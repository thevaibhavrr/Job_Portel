import { Routes, Route } from "react-router-dom";
import Navbar from './pages/navbar'
import Index from './pages/index'
import About from "./pages/feature";
import JobList from './pages/joblist'
import Category from './pages/categry'  
import Feedback from "./pages/feedback"; 
import SliderPost from './pages/postdata/indexslider' 
import"./App.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/index.html" element={<Index />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/joblist" element={<JobList />}></Route>
        <Route path="/category" element={<Category />}></Route>
        <Route path="/Feedback" element={<Feedback />}></Route>
        {/* <Route path="/slider" element={<SliderPost />}></Route> */}
      </Routes>
    </div>
  );
} 

export default App;
