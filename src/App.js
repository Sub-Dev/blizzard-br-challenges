import './App.css';
import Menu from './components/Menu.tsx';
import Banner from './components/Banner.tsx';
import Footer from './components/Footer.tsx';
import GameList from './components/GamesList.tsx';

function App() {
  return (
    <div className="App">
      <Menu />
      <Banner />
      <GameList />
      <Footer />
    </div>
  );
}

export default App;
