# 🧠 Pokemon Memory Game

A modern, responsive memory card game built with React and Vite. Test your memory by matching pairs of Pokemon cards fetched from the [PokéAPI](https://pokeapi.co/).

## 🎮 Game Features

- **Dynamic Pokemon Cards**: Fetches 6 random Pokemon and their images from the PokéAPI
- **Smooth Animations**: Beautiful flip animations and transitions for a polished experience
- **Score Tracking**: Keep track of your current score and best score (persisted in localStorage)
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark Modern Theme**: Clean, gradient-based design with modern aesthetics
- **Win Detection**: Automatically detects when you've matched all pairs

## 🚀 Live Demo

[Play the game](https://sherinawaz.github.io/odin-memory/)

## 📋 How to Play

1. Click on any card to flip it and reveal a Pokemon
2. Click another card to find its matching pair
3. If the cards match, they stay flipped and you earn a point
4. If they don't match, they flip back face-down
5. Continue until you've matched all pairs
6. Try to improve your best score!

## 🛠️ Technologies Used

- **React 19**: For building the UI components
- **Vite 8**: Modern frontend build tool for fast development
- **PokéAPI**: External API for fetching Pokemon data
- **CSS3**: Animations, gradients, and responsive layout
- **localStorage**: For persisting the best score

## 📁 Project Structure

```
src/
├── components/
│   ├── Game.jsx           # Main game logic and state management
│   ├── Game.css           # Game container styles
│   ├── Card.jsx           # Individual card component
│   ├── Card.css           # Card flip animations
│   ├── ScoreBoard.jsx     # Score display component
│   └── ScoreBoard.css     # Score styling
├── App.jsx                # Main app component
├── App.css                # App layout styles
├── main.jsx               # React entry point
└── index.css              # Global styles and color variables
```

## 🎨 Design Highlights

- **Gradient Text**: Uses CSS text gradients for the title and scores
- **3D Flip Animation**: Smooth perspective-based card flip using CSS transforms
- **Hover Effects**: Interactive feedback on card hover
- **Backdrop Filters**: Modern glassmorphism effect on containers
- **Responsive Grid**: Adapts from 3 columns on mobile to flexible layout on desktop

## 🔧 Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/SheriNawaz/odin-memory.git
cd odin-memory
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📦 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 🎯 Game Logic

- **Card Matching**: Each card has a `pokemonId` that matches with exactly one other card
- **Flip Limit**: Only 2 cards can be flipped at a time
- **Match Detection**: When 2 cards are flipped, the game checks if their `pokemonId` matches
- **Score System**: Each matched pair increases the current score by 1
- **Win Condition**: Game detects win when all cards are matched
- **Best Score**: The highest score is saved to localStorage and persists across sessions

## 📱 Responsive Breakpoints

- **Desktop**: 6-column grid with 140px cards
- **Tablet**: 4-column grid with 120px cards (max-width: 768px)
- **Mobile**: 3-column grid with 90px cards (max-width: 480px)

## 🚀 Deployment

The app is automatically deployed to GitHub Pages via GitHub Actions on every push to the master branch.

**Live URL**: [https://sherinawaz.github.io/odin-memory/](https://sherinawaz.github.io/odin-memory/)

## 📄 License

This project is open source and available under the MIT License.

## 🙌 Acknowledgments

- [The Odin Project](https://www.theodinproject.com/) for the project concept
- [PokéAPI](https://pokeapi.co/) for the Pokemon data
- React and Vite communities for excellent tools and documentation
