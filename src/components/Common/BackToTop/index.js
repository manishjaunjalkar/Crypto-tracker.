import React from "react";
import "./styles.css"
import { ArrowUpwardRounded } from "@mui/icons-material";
import { color } from "framer-motion";
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function BackToTop(){
    return(
        <div className="back-top-btn" style={{display:"none"}} id="myBtn"  onClick={()=>topFunction()}>
        <ArrowUpwardRounded style={{color: "var(--blue)"}}/>
        </div>
    )
}
export default BackToTop