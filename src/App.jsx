import './App.css'
import HomePage from './components/HomePage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameGuide from "./components/GameGuide";
import About from './components/About';
import Contact from './components/Contact';
import Tips from './components/Tips';
import Reviews from './components/Reviews';
import PattiGuide from './components/PattiGuide';
import BoardGame from './components/BoardGame';
import GameTips from './components/GameTips';
import TrendingGames from './components/TrendingGames';
import OnlineGames from './components/OnlineGames';
import GameTeach from './components/GameTeach';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game-guides" element={<GameGuide />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/patti-guide" element={<PattiGuide />} />
        <Route path="/game-tips" element={<GameTips />} />
        <Route path="/board-game" element={<BoardGame />} />
        <Route path="/game-teach" element={<GameTeach />} />
        <Route path="/trending-games" element={<TrendingGames />} />
        <Route path="/online-games" element={<OnlineGames /> } />
        <Route path="/tips" element={<Tips />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  )
}

export default App
