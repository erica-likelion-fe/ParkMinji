import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Post from './pages/post/Post';
import Posting from './pages/posting/posting';
import Edit from './pages/post/Edit';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/post" element={<Post />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
          <Route path="/posting" element={<Posting />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
