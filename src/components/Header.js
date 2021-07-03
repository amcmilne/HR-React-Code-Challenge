import React from 'react'

function Header() {
    return (
        <header className="header block row center" style={{backgroundColor:"#F5FFFA"}}>
            <div>
            <h1 className="main-title" style={{color: "#DC143C"}}> Sundae...</h1>
            <h2 className="sub-title" style={{color: "#48D1CC"}}>our favorite day of the week</h2> 
            </div>    
            <div>
                <a href="#/cart" style={{textDecoration:'none'}}> Cart </a>
                </div>       
        </header>
    )
}

export default Header
