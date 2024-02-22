
import React from "react";
import './footer.css'

let Footer=()=>{
    return(
        <div className="footer">
            <div className="footer-logo">
                <img style={{height:"150px",marginTop:"40px"}} src="data:image/png;base64,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" />
                {/* <p>Damro</p> */}
            </div>
            <ul className="footer-links">
                <li>Comapny</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-socialicons">
                <div className="footer-icons-container">
                    <img style={{width:"50px", height:"50px",gap:"30px"}} src="https://cdn-icons-png.flaticon.com/512/733/733558.png" />
                {/* </div> */}
                {/* <div className="footer-icons-container"> */}
                    <img style={{width:"50px", height:"50px",gap:"30px"}} src="https://static.vecteezy.com/system/resources/previews/023/741/202/original/pinterest-logo-icon-social-media-icon-free-png.png" />
                {/* </div> */}
                {/* <div className="footer-icons-container"> */}
                    <img style={{width:"50px", height:"50px",gap:"30px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/2062095_application_chat_communication_logo_whatsapp_icon.svg/1024px-2062095_application_chat_communication_logo_whatsapp_icon.svg.png" />
                </div>
            </div>
            {/* <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - All Rights Reserved</p>
            </div> */}
        </div>
    )
}
export default Footer