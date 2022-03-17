import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.css';
import AllProducts from './components/AllProducts/AllProducts';
import Menubar from './components/Menubar/Menubar';

function App() {
  const [count, setCount] = useState(0);

  const setCartCount = () => {
      if (count >= 0) {
        setCount(count + 1)
      }
  }
  const deleteCartCount = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  
  useEffect(() => {
  AOS.init({
    duration : 500
  });
 }, []);
  
  return (
    <div className="App mt-3">
      <Menubar count={count}></Menubar>
      <AllProducts setCartCount={setCartCount} deleteCartCount={deleteCartCount}></AllProducts>
    </div>
  );
}

export default App;
