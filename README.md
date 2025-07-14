# 🌦️ Enhanced Weather App UI (React)

This project is a visually immersive, responsive weather app built with **React**. It features dynamic themes and animated UI that responds to real-time weather conditions — all without changing any API or backend logic.

---

## 🚀 Features

### 🎨 Dynamic Weather-Based Theming
- **Hot Weather (>25°C)**: Vibrant sunset gradients, warm colors.
- **Cold Weather (<10°C)**: Snow-themed backgrounds, frosted UI.
- **Rainy/Windy**: Realistic rain, snow, or cloud animations.

### ✨ Visual Enhancements
- **Animated backgrounds** using CSS or lightweight canvas effects.
- **Glassmorphism** weather cards with floating shadows.
- **Interactive weather icons** (SVG or Lottie-based).
- **Pulsing temperature display** with smooth transitions.

### 🧩 Responsive & Interactive
- Fully responsive design (mobile, tablet, desktop).
- Hover/tap animations for buttons and cards.
- Optional day/night theming using system time.

---

## 🛠️ Tech Stack

- **React** (Create React App or Vite)
- **CSS3** / **Tailwind CSS** for styling and animations
- **Framer Motion** / **Lottie** / **react-snowfall** / **tsparticles** for weather effects
- **React Hooks** for state and UI behavior

---

## 📁 Folder Structure


```text
src/
│
├── components/
│   ├── WeatherCard.jsx          # Glass UI with weather data
│   ├── AnimatedBackground.jsx   # Handles dynamic theming and effects
│   └── WeatherIcon.jsx          # Lottie/SVG-based animated icons
│
├── styles/
│   ├── themes.css               # Theme variables and gradients
│   └── animations.css           # CSS keyframes for background & transitions
│
├── App.jsx
├── index.js
└── assets/
    └── icons/                   # Weather icons or Lottie JSON files


---

## 🔧 Setup Instructions

```bash
# 1. Clone the repo
git clone https://github.com/your-username/weather-app-ui.git
cd weather-app-ui

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
