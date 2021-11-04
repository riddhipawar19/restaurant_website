import React, { useEffect, useState } from 'react'
import App from './App'
import "./Card.css"
import axios from "axios"
// import menuItems from './MenuItems'
import Order from './Order'

function Card(props) {
  
  const [items, setItems] = useState([])

  const [menuItems, setmenuItems] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/")
    .then(result =>{
      setmenuItems(result.data)
      console.log(result.data);
    })
  }, [])
  
    const orderNow = (id) =>{
      setItems(id)
      console.log(id);
    }
    <Order itemIds={items}/>
    return (
      <div className="card__main">
      {console.log(`Card ${props.isLight}`)}
      {menuItems.map(item => {
        if(item.category === props.category)
          return (
          <div className="card">
            <div className={props.isLight ? 'card__container' : 'theme--dark' }>
              <div className="card__subcard1">
                <img className="card__image" src={item.image}></img>
                <p className="card__title">{item.name}</p>
              </div>
              <div className="card__subcard2">
                  <p>{item.price}</p>
                  <button onClick={() => orderNow(item.id)}>Order Now</button>
              </div>
            </div>
          </div>
        )
        }
      )
      }
      </div>
      
    )
}


export default Card;



