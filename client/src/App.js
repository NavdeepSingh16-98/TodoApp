import logo from './logo.svg';
import SignUp from './components/SignUp'
import NoPage from './components/NoPage';
//import MainPage from './components/MainPage/MainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import MainPage2 from './components/MainPage2'
import MainPage from './components/MainPage/MainPage';
//import SideBar2 from './components/SideBar2'
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
    {/* Welcome to App */}


    <Routes>
    <Route path="/" >
          <Route index element={<SignUp />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="home" element={<MainPage/>}/>
          <Route path="m2" element={<MainPage2/>}/>
          <Route path="s2" element={<SideBar2/>}/> */}
          <Route path="home" element={<MainPage/>}/>


          <Route path="*" element={<NoPage />} />
        </Route>
    </Routes>
    {/* <SignUp /> */}

    </div>
    </Router>
  );
}

export default App;
