import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardDetails from './components/CardDetails';
import Cards from './components/Cards'

function App() {
  return (
  <>
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route  path="/" element={<Cards />}/>
      <Route path='/cart/:id' element={<CardDetails />} />
    </Routes>
  </BrowserRouter>

  </>
  );
}

export default App;
