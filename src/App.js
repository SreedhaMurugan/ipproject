import './App.css';
import MainLayout from './Layout/MainLayout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';






function App() {

  const warplayout = (comp)=>{
    return <MainLayout comp={comp}></MainLayout>
  }
  return (
    <div className="App">
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={warplayout(<Home />)} />
          <Route path="/first" element={warplayout(<About />)} />
        </Routes>
      </BrowserRouter>

    

    </div>
  );
}

export default App;
