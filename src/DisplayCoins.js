import React from 'react'

function DisplayCoins(props) {
   const {name, id, image, market_cap, price_change_percentage_24h, symbol, current_price} = props.data
    
return (

    <div className='container'>
        <div className='coinInfo'>

            <div className='basic'>

              <img src={image}/>

              <h1>{name}</h1>

              <p>{symbol.toUpperCase()}</p>

            </div>

            <div className='details'>
                <p className='price'>$ {current_price.toLocaleString()}</p>

                {price_change_percentage_24h <0? (
                    <p className='red'>{price_change_percentage_24h.toFixed(2)} %</p> )
                     :  (<p className='green'>{price_change_percentage_24h.toFixed(2)} %</p>)
                } 
                <p>Mrt Cap: ${market_cap.toLocaleString()}</p>
            </div>
              
          </div>

    </div>
    
    )
}

export default DisplayCoins
