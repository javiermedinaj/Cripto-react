import { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Table from './components/Tablecoins';


function App() {

  const getData = async()=> {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    console.log(res.data)
  }


  useEffect(() => {
    getData()
  },[]);

  return (
    <div className="App">
        <h1>Coin market</h1>
        <Tablecoins/>
    </div>
  );
}

export default App;
