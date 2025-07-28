import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import RegisterForm from './components/Register/RegisterForm';
import LoginForm from './components/Login/LoginForm';

function App() {
  return (
    <div className="app-container">
      <nav className="nav-links" aria-label="Authentication navigation">
        <Link className="nav-link" to="/register">
          Register
        </Link>
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </nav>

      <main className="form-container">
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
