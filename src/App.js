import './App.css';
import LoginForm from './pages/login';
import HomepageLayout from './pages/home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
            <Router>
                <Routes>
                    <Route exact path='/login' element={<Login/>} />
                    <Route exact path="/notifications" element={<Notifications/>} />
                    <Route exact path="/" element={<Home/>} />
                </Routes>
            </Router>
      </header> 
    </div>
  );
}

function Home() {
    return <HomepageLayout />;
}

function Login() {
    return <LoginForm />;
}

function Notifications() {
    return <h2>Notifications</h2>;
}

export default App;
