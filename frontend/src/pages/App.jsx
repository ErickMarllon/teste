import { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../providers/store';
import Home from './Home';
import Management from './Management';

function App() {
  const { auth } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={!auth ? <Home /> : <Navigate to="/management" />}
        />
        <Route
          path="/management"
          element={auth ? <Management /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
