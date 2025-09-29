import MainContent from './components/MainContent';
import logo from './assets/images/logo.png';

// Main App component
function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1>Learn & master GitHub Actions </h1>
      </header>
      <MainContent />
    </>
  );
}

export default App;
