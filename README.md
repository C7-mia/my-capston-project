# 🌦️ Weather Dashboard

## 📌 Project Overview
The **Weather Dashboard** is a frontend web application built with **React** and **Tailwind CSS**, integrated with the **OpenWeatherMap API**.  
It allows users to search for a city and view **current weather conditions** along with a **5-day forecast**.

This project is part of my **Frontend Capstone** to simulate a real-world development environment involving:
- API integration
- Responsive UI design
- State management
- Deployment readiness

---

## ✅ Current Progress (Done)
- **Project Setup**
  - Created React app using Vite
  - Installed and configured Tailwind CSS
  - Set up global styles in `src/index.css` and `tailwind.config.js`

- **API Integration**
  - Connected to OpenWeatherMap’s **5-day forecast API**
  - Added `.env.example` and `.env` for API key management

- **Core Components**
  - `SearchBar` for city input
  - `WeatherCard` to display weather info
  - State management with `useState` and `useEffect`

- **Styling**
  - Responsive layout with Tailwind utility classes
  - Basic global theme (`bg-gray-100`, `text-gray-900`)

---

## 🚧 Work In Progress (On It)
- **Error Handling**
  - Improve user-friendly messages when a city is not found
  - Handle API/network errors gracefully

- **UI Enhancements**
  - Add icons for different weather conditions
  - Improve layout for mobile and tablet screens

- **Forecast Display**
  - Parse 3-hour forecast data into **daily summaries**
  - Show temperatures, humidity, and wind speed more clearly

---

## 🔜 Next Steps (To Do)
1. **Features**
   - Implement a **refresh button** for live updates
   - Add **recent search history** (local storage)
   - Optional: **Geolocation API** to auto-detect user’s location

2. **Extended Forecast**
   - Convert 5-day/3-hour data into a **clean daily forecast view**
   - Stretch goal: Switch to **One Call API 3.0** for 7-day forecast (requires paid plan)

3. **UI/UX**
   - Add a **dark mode toggle**
   - Backgrounds that change with weather conditions (sunny, rainy, cloudy, etc.)

4. **Deployment**
   - Deploy the app to **Netlify** or **Vercel**
   - Share live demo link for testing

---

## ⚙️ How to Run Locally
1. Clone the repo:
   ```bash
   git clone https://github.com/C7-mia/my-capston-project.git
   cd my-capston-project/weather-dashboard
