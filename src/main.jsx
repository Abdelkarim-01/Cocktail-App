import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'react-toastify/dist/ReactToastify.css'

import './index.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer position='top-center' autoClose={2000} />
    {/* <Counter />/ */}
    <App />
  </React.StrictMode>
); 
function Counter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0);  // Initialize the ref with 0

  useEffect(() => {
    prevCountRef.current = count;  // Update the ref's current value after every render
  });
  const data={
    id:1,
    name:'hhh',
    country:'gigigogo'
  }
  console.log(data.jjjj);
  
  return (
    <div>
      <h1>Current count: {count}</h1>
      <h2>Previous count: {prevCountRef.current}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;