import logo from '../../resources/logo.svg';
import './HomePage.css';
import Navbar from '../Navbar/Navbar'

function HomePage() {
  return (
    <div className="HomePage">
      <Navbar/>
      <header className="HomePage-header">
        <img src={logo} className="HomePage-logo" alt="logo" />
        <p>
          Edit <code>src/HomePage.tsx</code> and save to reload.
        </p>
        <a
          className="HomePage-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default HomePage;
