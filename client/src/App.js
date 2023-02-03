import Header from './components/Header';
import SongList from './pages/SongList';
import Footer from './components/Footer';
import './App.css';

function App() {

  return (
    <div className="app">
      <Header />
      <SongList />
      <Footer/>
    </div>
  );
}

export default App;
