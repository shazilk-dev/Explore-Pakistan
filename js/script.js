document.addEventListener("DOMContentLoaded", function () {
  const uploadForm = document.getElementById("uploadForm");
  const photoInput = document.getElementById("photo");
  const captionInput = document.getElementById("caption");
  const galleryGrid = document.getElementById("galleryGrid");

  let appMap = null;
  const appMarkers = {};

  function loadGallery() {
    const items = JSON.parse(localStorage.getItem("gallery") || "[]");
    galleryGrid.innerHTML = "";
    items.forEach((it) => {
      const div = document.createElement("div");
      div.className = "gallery-item";

      const img = document.createElement("img");
      img.src = it.data;
      img.alt = it.caption || "User photo";

      const p = document.createElement("p");
      p.textContent = it.caption || "";

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "delete-btn";

      deleteBtn.addEventListener("click", function () {
        const list = JSON.parse(localStorage.getItem("gallery") || "[]");
        const filtered = list.filter((x) => x.created !== it.created);
        localStorage.setItem("gallery", JSON.stringify(filtered));
        loadGallery();
      });

      div.appendChild(img);
      if (it.caption) div.appendChild(p);
      div.appendChild(deleteBtn);
      galleryGrid.appendChild(div);
    });
  }

  uploadForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const file = photoInput.files[0];
    const caption = captionInput.value.trim();
    if (!file) return alert("Please choose a photo.");
    if (file.size > 2 * 1024 * 1024)
      return alert("Please choose an image smaller than 2 MB.");
    const reader = new FileReader();
    reader.onload = function () {
      const data = reader.result;
      const items = JSON.parse(localStorage.getItem("gallery") || "[]");
      const entry = { data, caption, created: Date.now() };
      items.unshift(entry);
      localStorage.setItem("gallery", JSON.stringify(items.slice(0, 20)));
      photoInput.value = "";
      captionInput.value = "";
      loadGallery();
    };
    reader.readAsDataURL(file);
  });

  function initMap() {
    try {
      appMap = L.map("mapid").setView([30.3753, 69.3451], 5);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "© OpenStreetMap contributors",
      }).addTo(appMap);

      const places = [
        {
          name: "Islamabad",
          coords: [33.6844, 73.0479],
          info: "Capital city — modern and green.",
        },
        {
          name: "Lahore",
          coords: [31.5204, 74.3587],
          info: "Historic city with famous food.",
        },
        {
          name: "Karachi",
          coords: [24.8607, 67.0011],
          info: "Largest city and port — beaches and markets.",
        },
        {
          name: "Hunza",
          coords: [36.3075, 74.648],
          info: "Spectacular mountain valley.",
        },
        {
          name: "Skardu",
          coords: [35.2978, 75.635],
          info: "Gateway to high-altitude lakes and glaciers.",
        },
        {
          name: "Multan",
          coords: [30.1575, 71.5249],
          info: "City of Saints — shrines and crafts.",
        },
        {
          name: "Mohenjo-daro",
          coords: [27.3294, 68.138],
          info: "Ancient Indus Valley ruins.",
        },
      ];

      places.forEach((p) => {
        const marker = L.marker(p.coords).addTo(appMap);
        marker.bindPopup(`<strong>${p.name}</strong><br>${p.info}`);
        appMarkers[p.name.toLowerCase()] = marker;
      });

      document.querySelectorAll(".map-link").forEach((link) => {
        link.addEventListener("click", function (ev) {
          ev.preventDefault();
          const place = (link.dataset.place || "").toLowerCase();
          focusOnPlace(place);
        });
      });
    } catch (err) {
      console.warn("Leaflet not loaded or map container missing", err);
    }
  }

  function focusOnPlace(placeKey) {
    if (!appMap) {
      document.getElementById("mapid").scrollIntoView({ behavior: "smooth" });
      return;
    }
    const key = (placeKey || "").toLowerCase();
    const marker = appMarkers[key];
    document.getElementById("mapid").scrollIntoView({ behavior: "smooth" });
    if (marker) {
      appMap.setView(marker.getLatLng(), 9);
      marker.openPopup();
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    loadGallery();
    initMap();
  });
});
