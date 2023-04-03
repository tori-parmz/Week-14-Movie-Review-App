import Header from './components/Header';
import Navigation from './components/Navigation';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './components/Movie'
import ReviewForm from './components/ReviewForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
        <Header />
      <header className="App-header">
        <Movie />
        <ReviewForm />
      </header>
      <Footer />
    </div>
  );
}

export default App;
