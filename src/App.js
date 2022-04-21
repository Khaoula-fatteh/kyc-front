import logo from './logo.svg';
import './App.css';
import Layout from './Dashboard/views/Home/Layout/layout';
import Register from './Dashboard/views/Providers/Register'
import Login from './Dashboard/views/Login/Login'
import GetAllProviders from './Dashboard/views/Providers/GetAllProviders'
import UpdateProviders from './Dashboard/views/Providers/UpdateProviders';
import Home from './Dashboard/views/Home/home';
import NoMatch from './Dashboard/views/Meeting/NoMatch/NoMatch';
import CallPage from './Dashboard/views/Meeting/CallPage/CallPage'
import HomeCallPage from './Dashboard/views/Meeting/HomeCallPage/HomeCallPage'
import EmailVerify from './Dashboard/views/EmailVerify/EmailVerify';
import RegisterClients from './Dashboard/views/Clients/RegisterClients';
import {
  BrowserRouter as Router,
  Routes, Route, Navigate
} from "react-router-dom";

function App() {
  // const PrivateRoute = ({ auth: { isAthenticated }, children }) => {
  //   return isAthenticated ? children : <Navigate to="/login" />}


  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<PrivateRoute auth={{ isAthenticated: true }}><Home /></PrivateRoute>}>
            <Route index path="/" element={<Layout />} /> */}
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/getproviders' element={<GetAllProviders/>} />
          <Route exact path='/updateProvider' element={<UpdateProviders/>}/>
          <Route exact path='/registerClient' element={<RegisterClients/>}/>

          {/* <Route exact path='/callpage/:id' element={<CallPage />} />
          <Route exact path='/homecallpage' element={<HomeCallPage />} />
          <Route exact path='*' element={<NoMatch />} /> */}
          {/* </Route> */}
          <Route path="/providers/:id/verify/:token" element={<EmailVerify />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
