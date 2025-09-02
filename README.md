# Netflix Clone

A modern Netflix clone built with React and TypeScript.
🚧 **WIP**

![App Preview](public/preview.webp)

## Demo

📺 [Watch Demo Video](https://www.youtube.com/watch?v=N_vROtuFc3E)


## Tech Stack

- **TMDB API** - Movie/TV data
- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **TanStack Query** - Data fetching
- **Zustand** - State management
- **React Router** - Navigation
- **Sass** - Styling
- **Axios** - HTTP client

## API Endpoints

The app uses The Movie Database (TMDB) API v3:

- `/3/discover/movie` - Discover movies by genre/year
- `/3/discover/tv` - Discover TV shows by genre/year
- `/3/movie/{id}/videos` - Get movie trailers
- `https://image.tmdb.org/t/p/` - Movie poster/backdrop images

## Design Assets

UI design and assets from [Netflix Clone Figma Community](https://www.figma.com/community/file/967543658879972914)

## Setup

1. Clone and install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
VITE_TMDB_URL=https://api.themoviedb.org
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_TMDB_API_ACCESS_TOKEN=your_tmdb_access_token
```

3. Start development:
```bash
npm run dev
```

Get your TMDB API key from [The Movie Database](https://www.themoviedb.org/settings/api)