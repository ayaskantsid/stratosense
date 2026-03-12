# StratoSense

StratoSense is a weather intelligence dashboard that blends live conditions, forecasts, and air‑quality data with interactive mapping. It’s designed to be fast, visual, and developer‑friendly: everything is fetched with React Query, validated with Zod, and rendered through a clean component system with Tailwind and shadcn/ui.

## Highlights

- **Live weather + forecasts**: current, hourly (48h), and daily outlooks.
- **Interactive map**: OpenWeather overlay layers (clouds, wind, pressure, temperature, precipitation) on top of MapTiler basemaps.
- **Air‑quality insights**: AQI and pollutants with visual ranges and tooltips.
- **Location aware**: dropdown search plus map‑click to pick custom coordinates.
- **Dark/light theme**: toggleable UI with theme‑aware map styling.
- **Typed + validated data**: Zod schemas protect the UI from API shape drift.
- **Smooth loading states**: Suspense + skeletons for a polished UX.

## Tech Stack

- **React 19 + TypeScript**
- **Vite** for fast dev/build
- **@tanstack/react-query** for data fetching and caching
- **Zod** for runtime validation
- **Leaflet + react‑leaflet + MapTiler** for mapping
- **Tailwind CSS + shadcn/ui** for UI

## Data Sources

- **OpenWeather One Call 3.0**: current, hourly, daily weather.
- **OpenWeather Geocoding**: location → coordinates.
- **OpenWeather Air Pollution**: AQI + pollutants.
- **MapTiler**: base map tiles.

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment

Create a `.env.local` file in the project root:

```bash
VITE_API_KEY="your_openweather_api_key"
VITE_MAPTILER_API_KEY="your_maptiler_api_key"
```

> Do not commit real keys. Use `.env.local` for local development.

### 3) Run the app

```bash
npm run dev
```

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — typecheck + production build
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint

## Project Structure

```
src/
  api.ts                  # API calls + Zod parsing
  schemas/                # Zod schemas for API responses
  components/
    cards/                # Weather cards
    dropdowns/            # Location + layer selectors
    skeletons/            # Loading states
    Map.tsx               # Leaflet map + overlays
    SidePanel.tsx         # Air‑quality details
```

## How It Works

### Weather + Forecasts
The app queries OpenWeather with React Query, validates the response with Zod, and renders cards for **current**, **hourly**, and **daily** data. This keeps the UI resilient to missing or malformed fields.

### Map Layers
The map combines:
- **MapTiler** basemaps (theme‑aware style)
- **OpenWeather overlay tiles** for layers such as clouds, wind, and temperature

Selecting a layer updates the tile overlay and the legend in real time.

### Air Quality
The side panel fetches AQI + pollutants and displays ranges with visual cues, so you can quickly assess air quality impact.

## Customization Ideas

- Add saved locations or geolocation auto‑detect
- Cache map selections in local storage
- Add units toggle (metric/imperial)
- Expand overlays (UV index, visibility, humidity)

## Credits

- Weather data by [OpenWeather](https://openweathermap.org/)
- Basemaps by [MapTiler](https://www.maptiler.com/)
