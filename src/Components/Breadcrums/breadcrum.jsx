

import React from "react";
import './breadcrum.css'

let Breadcrum=(props)=>{
    const {product}=props;
    return(
        <div className="breadcrum">
            {product.name}
        </div>
    )
}
export default Breadcrum