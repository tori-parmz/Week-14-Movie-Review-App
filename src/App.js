import Header from './components/Header';
import Navigation from './components/Navigation';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList'
import Movie from './components/Movies'
import ReviewForm from './components/ReviewForm';
import Footer from './components/Footer';

function App() {
  console.log(Movie);
  return (
    <div className="App">
      <Navigation />
        <Header />
  
      <header className="App-header">
        <MovieList />
        <ReviewForm />
      </header>
      <Footer />
    </div>
  );
}

export default App;
