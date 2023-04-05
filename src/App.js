import Header from './components/Header';
import Navigation from './components/Navigation';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList'
import Movie from './components/Movie'
import ReviewForm from './components/ReviewForm';
import Footer from './components/Footer';

function App() {
  console.log(Movie);
  return (
    <div className="App">
      <Navigation />
        <Header />
  
      <header className="App-header">
        <Movie title="Nope" director="Jordan Peele" releaseDate="2022" runTime="2h 10m" description="The residents of a lonely gulch in inland California bear witness to an uncanny and chilling discovery." image="https://pbs.twimg.com/media/E66V_D2VoAExDxW?format=jpg&name=large" />
        <ReviewForm />
      </header>
      <Footer />
    </div>
  );
}

export default App;
