import Header from './components/Header';
import Navigation from './components/Navigation';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import Movie from './components/Movie';
import Footer from './components/Footer';

//App renders MovieList which is parent of all components besides Header, Footer, & Navigation
function App() {
  console.log(Movie);
  return (
    <div className="App">
      <Navigation />
        <Header />
  
      <header className="App-header">
        <div className='container'>
        <MovieList />
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default App;
