import React, { useState } from 'react';
import './App.css';
import LoginForm from './pages/login';
import HomepageLayout from './pages/home';
import NotificationsLayout from './pages/notifications';
import expiredStorage from './components/expiredLogin';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
    const status = expiredStorage('loggedIn')
    const [loggedIn, setLoggedIn] = useState(status);

    const onLoginSuccess = (data) => {
        setLoggedIn(data);
    };


    return (
        <div className="App">
        <header className="App-header">
                <Router>
                    <Routes>
                        <Route exact path='/login' element={<LoginForm onLoginSuccess={onLoginSuccess}/>} />
                        <Route exact path="/notifications" element={<NotificationsLayout isUserLoggedIn={loggedIn}/>} />
                        <Route exact path="/" element={<HomepageLayout isUserLoggedIn={loggedIn}/>} />
                    </Routes>
                </Router>
        </header> 
        </div>
    );

}

export default App;
