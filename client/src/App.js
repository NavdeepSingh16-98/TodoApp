import logo from './logo.svg';
import SignUp from './components/SignUp'
import NoPage from './components/NoPage';
//import MainPage from './components/MainPage/MainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import MainPage2 from './components/MainPage2'
import MainPage from './components/MainPage/MainPage';
//import SideBar2 from './components/SideBar2'
import Login from './components/Login';
import Modal from './components/Modal';
import Modal2 from './components/Modal2';
import TodoDisplay from './components/TodoDisplay';
//import ActualMainPage from './components/ActualMainPage'
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <div className="App">
    {/* Welcome to App */}
    <Navbar/>


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
          <Route path="modal" element={<Modal/>}/>
          <Route path="modal2" element={<Modal2/>}/>
<Route exact path="/todo/:todoTitle" element={<TodoDisplay/>} />



          <Route path="*" element={<NoPage />} />
        </Route>
    </Routes>

    <Footer/>
    {/* <SignUp /> */}

    </div>
    </Router>
  );
}

export default App;
