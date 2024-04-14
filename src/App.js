import React,{useState} from'react';
import './App.css';

function App() {
  const [count,setcount] = useState(0);

  const increment = () => {
    setcount(count + 1)
  }

  const decrement = () => {
    setcount(count - 1)
  }
  return (
    <div style={{ margin:"auto",display:"flex",flexDirection:"column",justifyContent:"center",alignItems: "center",width:"100vh",height:"100vh",backgroundColor:"#cc6888"}}>
    <p>{count}</p>
    <div style={{gap:"2rem",display:"flex"}}>
    <button onClick={decrement}>Decrement</button>
    <button onClick={increment}>Increment</button>
    
    </div>
    </div>
  );
}

export default App;
