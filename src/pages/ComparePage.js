import React,{useEffect, useState} from "react";
import Header from "../components/Common/Header";
import SelectCoins from "../components/Compare/SelectCoins";
import SelectDays from "../components/Coin/SelectDays";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import { coinObject } from "../functions/ConvertObject";
import List from "../components/Dashboard/List";
import CoinInfo from "../components/Coin/CoinInfo";
function ComparePage(){
    const[ crypto1, setCrypto1]=useState("bitcoin")
    const[ crypto2, setCrypto2]=useState("ethereum")
    const[crypto1Data, setCrypto1Data]=useState({})
    const[crypto2Data, setCrypto2Data]=useState({})

    const[isLoading, setIsLoading]=useState(true);
    const [days, setDays]= useState(30)
    const[priceType, setPriceType]= useState("prices")
 
    function handleDaysChange (event){
    setDays(event.target.value);
  }
  useEffect(()=>{
    getData(); 
   
  },[])

  async function getData(){
    setIsLoading(true);
    const data1 = await getCoinData(crypto1);
    const data2 = await getCoinData(crypto2);

    if(data1){
        coinObject(setCrypto1Data, data1);
       
    }
    if(data2){
        coinObject(setCrypto2Data, data2);
    }

    if(data1 && data2){
        const prices1= await getCoinPrices(crypto1, days,priceType);
        const prices2= await getCoinPrices(crypto2, days,priceType);
        if(prices1.length > 0 && prices2.length > 0){
            console.log("BOTH PRICES FETCHED", prices1, prices2);
         setIsLoading(false);
        }
    }
  }

  const handleCoinChange= async (event, isCoin2)=>{
   setIsLoading(true);
    if(isCoin2){
     setCrypto2(event.target.value);
     console.log(event.target.value) 
    const data= await getCoinData(event.target.value);
        coinObject(setCrypto2, data);
        console.log(event.target.value) 

 }
    else{
     setCrypto1(event.target.value);
     const data= await getCoinData(event.target.value);
         coinObject(setCrypto1, data);
    }
    const prices1 = await getCoinPrices(crypto1, days,priceType);
    const prices2 = await getCoinPrices(crypto2, days,priceType);
 }
    return(
        <div>
        <Header/>
        <div className="coins-days-flex">
            <SelectCoins crypto1={crypto1}
            handleCoinChange={handleCoinChange}
             crypto2={crypto2} />
            <SelectDays days={days} handleDaysChange={handleDaysChange} noPTag={true}/>
        </div>
        <div className="grey-wrapper">
            <List coin={crypto1Data}/>
            
        </div>
        <div className="grey-wrapper">
            <List coin={crypto2Data}/>
        </div>
        <CoinInfo coin={crypto1Data} />
        <CoinInfo coin={crypto2Data} />

        </div>
    )
}
export default ComparePage