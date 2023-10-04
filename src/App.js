import './App.css';
import Main from './Components/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReadMore from './Components/ReadMore';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Main />} />
          <Route path='/readmore' element={<ReadMore />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;




