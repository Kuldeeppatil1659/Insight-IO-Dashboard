# Insight.IO Dashboard - ERIC Robotics FSD Assignment

A fully functional, self-hosted robotics dashboard built to evaluate spatial UI/UX implementation. This dashboard handles live video feeds alongside interactive 3D point cloud data (`.pcd`) with a zero-internet runtime dependency, matching the provided design specifications.

---

## 🚀 Features

### Interactive 3D Map View

* Full-screen rendering of `.pcd` (Point Cloud Data) files using:

  * Three.js
  * `@react-three/fiber`
  * `@react-three/drei`
* Includes `OrbitControls` for:

  * Pan
  * Zoom
  * Rotate

### Picture-in-Picture (PiP) Swapping

* Seamless CSS-driven toggling between:

  * 3D Map View
  * Live Camera Feed
* Components remain mounted for optimal performance and smooth transitions.

### Camera Feed with Digital Zoom

* Local video looping support.
* Functional vertical slider for digital zoom.
* Event handling isolated from global bubbling for improved UX.

### Telemetry HUD & Controls

Dynamic robotics control interface featuring:

* Auto / Manual drive mode toggle
* Mock telemetry indicators
* Interactive D-Pad controls
* Emergency Stop button

### 100% Self-Hosted

All assets are served locally from:

```bash
public/assets/
```

No external APIs or internet connection are required after installation.

---

## 🛠 Tech Stack

| Technology                | Usage                       |
| ------------------------- | --------------------------- |
| React 18 (Vite)           | Frontend Framework          |
| Material UI (MUI) v5      | UI Components               |
| Three.js                  | 3D Rendering                |
| @react-three/fiber        | React Renderer for Three.js |
| @react-three/drei         | Three.js Helpers            |
| CSS Positioning & Z-Index | Spatial UI Layering         |

---

## 📦 Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Kuldeeppatil1659/Insight-IO-Dashboard.git
cd Insight-IO-Dashboard
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Local Assets

Ensure the following files are present inside:

```bash
public/assets/
```

Required assets:

```bash
camera-feed.mp4
map.pcd
```

* `camera-feed.mp4` → Sample robotics/dashcam video
* `map.pcd` → Sample Point Cloud Data file

### 4. Run the Development Server

```bash
npm run dev
```

### 5. Open in Browser

Navigate to:

```bash
http://localhost:5173
```

---

## 📁 Project Structure

```bash
insight-io-dashboard/
│
├── public/
│   └── assets/
|       ├── camera-feed.mp4
│       └── map.pcd
│
├── src/
│   ├── components/
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── vite.config.js
```

---

## 🎯 Assignment Highlights

* Spatial UI/UX implementation
* Real-time robotics dashboard simulation
* Efficient 3D rendering pipeline
* Fully offline-compatible architecture
* Performance-focused PiP rendering strategy

---

## 📌 Notes

* All media and `.pcd` assets are loaded locally.
* The dashboard is optimized for desktop viewing.
* Designed specifically for the ERIC Robotics Full Stack Developer Assignment.

---

## 👨‍💻 Author

Developed by Kuldeep Patil for the ERIC Robotics FSD Assignment.
