import './App.css';
import HomePage from './pages/Home/Home';
import Some from './pages/Some/Some';
import { Route, Routes } from 'react-router';


function App() {

  return (
    <>
      <Routes >
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/some' element={<Some />} /> */}
      </Routes>
    </>
  )
}

export default App
