import logo from './logo.svg';
import SignUp from './components/SignUp'
import NoPage from './components/NoPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
          <Route path="*" element={<NoPage />} />
        </Route>
    </Routes>
    {/* <SignUp /> */}

    </div>
    </Router>
  );
}

export default App;
