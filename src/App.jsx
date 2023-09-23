import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './contexts/AuthContext.jsx';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './Home.jsx'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/login" element={<Login />} />
          <Route  path="/signup" element={<Signup />} />
        </Routes>
        <ToastContainer position="top-right"/>
        {/* <ToastContainer position="top-right" autoClose={3000} hideProgressBar /> */}
      </AuthProvider>
    </Router>
  );
}

export default App;