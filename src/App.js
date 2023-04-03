import Header from './components/Header';
import Navigation from './components/Navigation';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './components/Movie'
import ReviewForm from './components/ReviewForm';

function App() {
  return (
    <div className="App">
      <Navigation />
        <Header />
      <header className="App-header">
        <Movie />
        <ReviewForm />
      </header>
    </div>
  );
}

export default App;
