import React from "react";

import "./navbar.css";

function navbar(){
  return(
    <nav className="Items">
      <img id="logopic" src="https://images.squarespace-cdn.com/content/v1/5aa9b09612b13f9aecc1613a/1580931987781-ASLYMT54VLLXWUV7XK3C/Website+logo.png?format=1500w" width="270" height="55"></img>
      <ul id="Contents">
        <li>
             <button class="dropbtn">ABOUT</button>
             <div class="droplist">
                <a href="#">ABOUT</a>
                <a href="#">MANAGEMENT</a>
                <a href="#">CONTACT</a>
              </div>
        </li>
        <li >
          <button class="dropbtn">TEAMS</button>
          <div class="droplist">
            <a href="#">VALORANT</a>
            <a href="#">FORTNITE</a>
            <a href="#">HALO</a>
            <a href="#">APEX LEGENDS</a>
            <a href="#">CONTENT CREATORS</a>
         </div>
        </li>
        <li >
          <button class="dropbtn">PRESS</button>
          <div class="droplist">
            <a href="#">NEWS</a>
            <a href="#">LOGOS</a>
            <a href="#">WALLPAPERS</a>
         </div>
        </li>
        <li >
            <button class="dropbtn">JOBS</button>
        </li>
        <li >
            <button class="dropbtn">SCHEDULE</button>
        </li>
        <li >
            <button class="dropbtn-shop">SHOP</button>
        </li>
      </ul>
    </nav>
  )
};

export default navbar;
