import './App.css';
import { useState , useEffect } from 'react'


function url(path){  // path is /api/
  return process.env.NODE_ENV === 'development' ? `http://localhost:1234${path}` : path
}


function App() {
  const [data, setData] = useState("HI!")

  useEffect(()=>{
    fetch(url('/api/'))
      .then(res=>res.json())
      .then(apiData=>setData(apiData.data))
  },[])

  return (
    <div className="App">
      <header className='App-header'>
        API Data Returned: {data}
      </header>
    </div>
  );
}

export default App;
