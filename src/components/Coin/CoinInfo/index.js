import React, { useState } from "react";
import "./styles.css"

function CoinInfo({coin}){
  const shortDesc = coin.desc.slice(0,350) + "<span style='color:var(--grey)'> Read More...</span>"
  const longDesc = coin.desc + "<span style='color:var(--grey)'> Read less...</span>"
 

  const [flag, setFlag]= useState(false);
  return (

        <div>
          <h1 className="coin-info-heading">{coin.name}</h1>
          {coin.desc.length>200 ? (
            <p onClick={()=>setFlag(!flag)} className="coin-info-desc" dangerouslySetInnerHTML={{__html: !flag? shortDesc: longDesc}}/>
          )
          : (            <p  className="coin-info-desc" dangerouslySetInnerHTML={{__html:coin.desc}}/>
          )
          }
            </div>
    )
}
export default CoinInfo;