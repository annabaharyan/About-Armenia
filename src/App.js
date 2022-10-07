import './App.css';
import { Routes, Route } from 'react-router-dom'
import Config from './Components/Config'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'
import ErrorPage from './Pages/ErrorPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Config />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />

      </Routes>

    </>
  );
}

export default App;
