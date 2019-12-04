import React from "react";
import Footer from '../components/Footer'

const Layout = (props) => {
    return ( 
        <>
        <div className="container">
            {props.children}
        </div>
        <Footer/>
        </>
     );
}
 
export default Layout;
