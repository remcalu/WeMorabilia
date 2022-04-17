import './HomePage.css';
import Navbar from '../Navbar/Navbar';
import HomePageGreeting from '../HomePageGreeting/HomePageGreeting';

function HomePage() {
  return (
    <div className="HomePage">
      <Navbar/>
      <HomePageGreeting/>
    </div>
  );
}

export default HomePage;
