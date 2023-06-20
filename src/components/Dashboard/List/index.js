import "./styles.css";
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import  TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Tooltip } from "@mui/material";
import { convertNumber } from "../../../functions/convertNumber";
import { NavLink } from "react-router-dom";
function List({coin}){
    return(
        <NavLink to={`/coin/${coin.id}`}>
        <tr className="list-row">
            <Tooltip title="Coin logo" placement="bottom-start">
                <td className="td-image">
                 <img src={coin.image} className="coin-logo"/>
                 </td>
             </Tooltip>
             <td className="name-col">
                <div>
                  <p className="coin-symbol">{coin.symbol}</p>
                  <p className="coin-name">{coin.name}</p>
                 </div>
            </td>
            <Tooltip title="Price Change in 24Hrs" placement="bottom-start">

            {coin.price_change_percentage_24h > 0 ? (
            <td className="flex-chip">
                 <div className="price-chip">{coin.price_change_percentage_24h.toFixed(2)}%</div>
                 <div className="icon-chip td-icon">
                    <TrendingUpRoundedIcon/>
                 </div>
            </td>
            ): ( 
             <td className="flex-chip">
                 <div className="price-chip chip-red">{coin.price_change_percentage_24h.toFixed(2)}%</div>
                 <div className="icon-chip red-chip td-icon" >
                    <TrendingDownRoundedIcon/>
                </div>
            </td>)}
            </Tooltip>
            <td className="price-change">
                <h3 className="coin-price td-center-align" style={{color: coin.price_change_percentage_24h < 0 ? "var(--red)": "var(--green)"}}>${coin.current_price.toLocaleString()}</h3>
             </td>
            <td>
            <p className="total_volume td-total-volume">
                {coin.total_volume.toLocaleString()}
                 </p>
            </td>
            <Tooltip title="Market Cap">
             <td className="desktop-td">
             <p className="total_volume">
                ${coin.market_cap.toLocaleString()}
                </p>
            </td>  
            </Tooltip>

            <Tooltip title="Market Cap">
             <td className="mobile-td">
             <p className="total_volume">
                ${convertNumber(coin.market_cap).toLocaleString()}
                </p>
            </td>  
            </Tooltip>
           
        </tr>
        </NavLink>
    )
}

export default List;