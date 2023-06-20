import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import DashboardTabs from "../components/Dashboard/tabs";
import axios from "axios";
import Search from "../components/Dashboard/Search";
import PaginationComponent from "../components/Dashboard/Pagination";
import Loader from "../components/Common/Loader";
import { get100Coins } from "../functions/get100Coins";
import Footer from "../components/Common/Footer";
// import BackToTop from "../components/Common/BackToTop";


let Dashboard=()=>{
    const [coins, setCoins]= useState([]);
    const[search, setSearch]=useState("");
    const [page, setPage] = useState(1);
    const [paginatedCoins, setPaginatedCoins] = useState([]);
    const [isLoading, setIsLoading]= useState(true);
    const onSearchChange=(e)=>{
        setSearch(e.target.value);
    }

    var filteredCoins = coins.filter((item)=>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.symbol.toLowerCase().includes(search.toLowerCase())
    );

    const handlePageChange = (event, value) => {
        setPage(value);
        // Value = new page number
        var initialCount = (value - 1) * 10;
        setPaginatedCoins(coins.slice(initialCount, initialCount + 10));
      };

    useEffect(()=>{
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
        .then((res)=>{setCoins(res.data);
        setPaginatedCoins(res.data.slice(0,10));
        setIsLoading(false);
        })
        .catch((err)=>{
            console.log(err)
            setIsLoading(false);
        })
    },[])

    useEffect(()=>{
        getData();
    },[]);

    const getData = async ()=>{
        const myCoins = await get100Coins();
        if(myCoins){
        setCoins(myCoins);
        setPaginatedCoins(myCoins.slice(0,10));
        setIsLoading(false);
        }

    }
return(
<>
 <Header/>
 {/* <BackToTop/> */}
{isLoading ? (<Loader/>) : (
     <div>
        <Search search={search} onSearchChange={onSearchChange}/>
        <DashboardTabs coins={search ? filteredCoins : paginatedCoins}/>
        {!search && (
            <PaginationComponent
              page={page}
              handlePageChange={handlePageChange}
            />
          )}
          <Footer/>
    </div>
    )}
</>
)

}
export default Dashboard