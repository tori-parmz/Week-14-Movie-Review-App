import Header from './components/Header';
import Navigation from './components/Navigation';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './components/Movie'

function App() {
  return (
    <div className="App">
      <Navigation />
        <Header />
      <header className="App-header">
        <Movie />
      </header>
    </div>
  );
}

export default App;
