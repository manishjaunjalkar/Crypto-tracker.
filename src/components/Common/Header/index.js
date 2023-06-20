import "./styles.css";
import TemporaryDrawer from "./drawer";
import Button from "../Button";
import { NavLink } from "react-router-dom";
let Header = ()=>{
    return (
        <div className="navbar">
            <h1 className="logo">Crypto Tacker <span style={{color: "var(--blue)"}}>.</span></h1>
            <div className="links">
                <NavLink to="/">
                    <p className="link" >Home</p>
                </NavLink>
                <a href="/compare">
                    <p className="link">Compare</p>
                </a>
                <a href="/watchlist">
                    <p className="link">Watchlist</p>
                </a>
                <NavLink to="/dashboard">
                   <Button text = {"Dashboard"}
                   onClick={()=>console.log("Clicked")}
                   />
                    
                   
                </NavLink>
            </div>
            <div className="mobile-drawer">
                    <TemporaryDrawer/>
                </div>
        </div>
        

    )
}

export default Header;