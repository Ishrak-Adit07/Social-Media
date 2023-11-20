import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

//Importing Scenes
import HomePage from './scenes/HomePage';
import LoginPage from './scenes/LoginPage';
import ProfilePage from './scenes/ProfilePage';

//Importing css files
import './App.css';


//Importing components
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Routes>

        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile/:userid" element={<ProfilePage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
