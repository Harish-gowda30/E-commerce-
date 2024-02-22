import React from "react";
import Hero from "../Components/Hero/hero";
import Popular from "../Components/popular/popular";
import Offers from "../Components/offers/offers";
import Newcollections from "../Components/Newcollections/newcollections";
import Newsletter from "../Components/Newsletter/newsletter";


let Shop=()=>{
    return(
        <div>
            <Hero/>
            <Popular />
            <Offers />
            <Newcollections />
            <Newsletter />
        </div>
    )
}
export default Shop