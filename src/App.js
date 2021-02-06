import './App.css';
import React from 'react' 
import {useEffect, useState} from 'react'
import DisplayCoins from "./DisplayCoins"

function App() {
  const[coins, setCoins] = useState([])
  const [search, setSearch] = useState("")

let url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"

useEffect(() => {
   fetch(url)
   .then(res => res.json())
   .then(res => setCoins(res))
},[])



const handleChange = (e) =>{
  setSearch(e.target.value)
}

const coinsFilter = coins.filter(coin =>{
  return coin.name.toLowerCase().includes(search.toLowerCase())
})

  return (
    <div className="App">
       <div className='search'>
           <form>
              <h1 className='header'>Crypto Market Info</h1>
              <input type="text"  placeholder="Search here" onChange={handleChange}/>
            </form>
        
         </div>
       
       <div className='main'>
        {
          coinsFilter.map(item => {
           return (
             <DisplayCoins data={item}  key={item.id}/>
           )
          })
        }
     

       </div>
    </div>
  );
}

export default App;
