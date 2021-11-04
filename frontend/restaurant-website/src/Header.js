import React, { useState} from 'react'
import "./Header.css"
import Card from './Card'
import Order from './Order'
import { useHistory } from 'react-router-dom'

function Header() {

    const history = useHistory()

    const [category, setcategory] = useState("")
    const [itemCount, setItemCount] = useState(0)
    const [theme, setTheme] = useState({
        color:"black",
        backgroundColor:"white"
    })

    const [btnText, setBtnText] = useState("Enable Dark Theme")
    const [isLight, setIsLight] = useState(true)

    // const [isActive, setisActive] = useState("")

    const changeTheme = () => {
        if(theme.color === "black"){
            setTheme({
                color:"white",
                backgroundColor:"black"
            })
            setBtnText("Enable Light Theme")
            setIsLight(false)
            {console.log(`Is light ${isLight}`);}
        }
        else{
            setTheme({
                color:"black",
                backgroundColor:"white"
            })
            setBtnText("Enable Dark Theme")
            setIsLight(true)
            {console.log(`Is light ${isLight}`);}
        }
    }

    return (
        <div className="header">
          <div className="header__container">
            <div className="header__menu" style={theme}>
               <p id="breakfast" onClick={e => setcategory(e.target.id)} className="header__menu__bf">BREAKFAST</p>
               <p id="lunch" onClick={e => setcategory(e.target.id)} className="header__menu__lunch">LUNCH</p>
               <p id="dinner" onClick={e => setcategory(e.target.id)} className="header__menu__dinner">DINNER</p>
               <p id="desserts" onClick={e => setcategory(e.target.id)} className="header__menu__desserts">DESSERTS</p>
               <button onClick={changeTheme}>{btnText}</button>
               {/* <Card category={category} isLight={isLight}/> */}
            </div>
            <h3 style={theme} onClick={() => history.push("/order")}>YOUR ORDER {itemCount}</h3>
           </div>
            <Card category={category} isLight={isLight} count={itemCount} setCount={setItemCount}/>
        </div>
    )
}

export default Header;
