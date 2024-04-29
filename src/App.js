import Content from './components/Content'
import Register from './components/Login/Register';
// import Login from './components/Login/Login'
import Tabel from './components/DataFetch/Tabel';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import LoginForm from './components/Login/loginForm';
import ProtectedAdmin from './components/Dashboard/protectedAdmin';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Content/>} />
            <Route path="Login" element={<LoginForm/>} />
            <Route path="Register" element={<Register/>} />
            <Route path="Tabel" element={<Tabel/>} />
            <Route path="/login/dashboard" element={<ProtectedAdmin/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

