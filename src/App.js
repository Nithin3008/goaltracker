
import './App.css';
import { Home1 } from './Home';
import { Route, Routes } from 'react-router';
import { Archive1 } from './Archive';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home1></Home1>}></Route>
        <Route path='/Archive1' element={<Archive1></Archive1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
