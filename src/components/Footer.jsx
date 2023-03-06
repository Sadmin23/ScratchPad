import React from "react";

function Footer(){

    const d = new Date();
    let year = d.getFullYear();

    return <p>Copyright {year}</p>
}

export default Footer;