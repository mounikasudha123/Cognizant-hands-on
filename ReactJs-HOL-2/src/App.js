import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import StudentApp from './Components/StudentApp';

function App() {
  return (
    <div className="App">
      <div className="main-shell">
        <h1 className="app-title">Student Management Portal</h1>
        <p className="app-description">
          This hands-on exercise demonstrates React component creation, composition,
          state management, and rendering data using reusable components.
        </p>

        <div className="page-sections">
          <Home />
          <StudentApp />
          <About />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
