import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProductInfo from './pages/ProductInfo';
import CartPage from './pages/CartPage';
import './stylesheets/products.css'
import './stylesheets/authentication.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OrdersPage from './pages/OrdersPage';
import AdminPage from './pages/AdminPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<ProtectedRoutes><HomePage /></ProtectedRoutes>} />
          <Route path='/productinfo/:productid' exact element={<ProtectedRoutes><ProductInfo /></ProtectedRoutes>} />
          <Route path='/cart' exact element={<ProtectedRoutes><CartPage /></ProtectedRoutes>} />
          <Route path='/orders' exact element={<ProtectedRoutes><OrdersPage /></ProtectedRoutes>} />
          <Route path='/admin' exact element={<ProtectedRoutes><AdminPage /></ProtectedRoutes>} />

          <Route path='/login' exact element={<LoginPage />} />
          <Route path='/register' exact element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
      <div><Footer /></div>
    </div>
  );
}

export default App;

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('currentUser')) {
    return children
  } else {
    return <Navigate to='/login' />
  }
}