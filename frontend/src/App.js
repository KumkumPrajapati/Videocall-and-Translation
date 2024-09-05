import logo from './logo.svg';
import './App.css';
import  {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LandingPage from './Pages/landing';
import Authentication from './Pages/authentication';
import { AuthProvider } from './Contexts/AuthContext';
import VideoMeet  from './Pages/VideoMeet';
import HomeComponent from './Pages/Home';
import History from './Pages/history';
import Translation from './Pages/translation';
function App() {
  return (
    <>
    <Router>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/home" element={<HomeComponent/>}  />
        <Route path='/history' element={<History />} />
        <Route path="/:url" element={<VideoMeet />} />
        <Route path="/translation" element={<Translation />} />
      </Routes>
      </AuthProvider>
    </Router>
    </>
  );
}

export default App;
