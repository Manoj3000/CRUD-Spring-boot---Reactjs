import './App.css';
import List from './components/List';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddForm from './components/AddForm';
import Navbar from './components/Navbar';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <ToastContainer
          toastClassName="dark-toast"
          position={toast.POSITION.BOTTOM_RIGHT}
          autoClose={2000} />
        <div className="container my-5">
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/add" element={<AddForm title="Add" />} />
            <Route path="/edit/:id" element={<AddForm title="Edit" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
