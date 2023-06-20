import React from "react";
import { ConvertDate } from "./convertDate";

export const SettingChartData=(setChartData,prices)=>{
    setChartData({
        labels: prices.map((price)=>ConvertDate(price[0])),
        datasets:[
            {
               data: prices.map((price)=>price[1]),
               borderColor: "#3a80e9",
              borderWidth: 2,
              fill: true,
              tension: 0.25,
              backgroundColor: "rgba(58, 128, 233,0.1)",
                pointRadius: 0,
            },
        ],
     } );
};