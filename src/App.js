import './App.css';
import NavigationBar from './sections/NavigationBar';
import HeroSection from './sections/HeroSection';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <HeroSection/>
      <Footer/>
    </div>
  );
}

export default App;
