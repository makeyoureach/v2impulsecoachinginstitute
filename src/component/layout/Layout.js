import { useState, useEffect } from "react";
import Navigation from "../Navigation";
import Footer from "../footer/Footer";
import SocialDailer from "../SocialDailer";

const Layout = (props) => {

    const [child, setChild] = useState(false);
    console.log("Nav parame "+props.usenav);
    useEffect(
        ()=>{if(props.usenav == true){
            setChild(true);
        }},[]
    )
   
    return (
        <div>
            {/* <Navigation scroll = {props.usenav}/> */}
            <div className={child ? 'layoutcont2' : 'layoutcont'}>
               {props.children}
            </div>
            {/* <Footer/> */}
            <SocialDailer/>
        </div>
    );
}

export default Layout;