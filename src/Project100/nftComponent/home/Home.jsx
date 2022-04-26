import React from "react";
import Navbar from "../navbar/Navbar";
import "./home.css";
import planet from "../../../assestNft/planet.svg";
import metamask from "../../../assestNft/metamask.svg";
import coinbase from "../../../assestNft/coinbase2.svg";
import trustwallet from "../../../assestNft/trustwallet.svg";
import opensea from "../../../assestNft/opensea.svg";

export default function Home() {
  return (
    <div className="home-con">
      <div className="container">
        <Navbar />
        <div className="main-home">
          <div className="playto-earn">
            <div className="playto-earn-con">
              <span className="text1">
                <h1>Play to earn in a safe blockchain galaxy </h1>
              </span>
              <span className="text2-desktop">
                <h4>Mind blowing games await you. Earn directly to your</h4>
                <h4> wallet, have fun and earn token.</h4>
              </span>
              <span className="text2">
                <h4>Mind blowing games await you. Earn directly to your
                 wallet, have fun and earn token.</h4>
              </span>

              <span className="btn">Start playing</span>
            </div>
          </div>
          <div className="universe">
            <img src={planet} alt="planet" />
          </div>
        </div>

        <div className='wallets'> 
                <ul className='wallet-con'>
                    <li><img src={metamask} alt="metamask" /></li>
                    <li><img src={opensea} alt="opensea" /></li>
                    <li><img src={coinbase} alt="coinbase" /></li>
                    <li><img src={trustwallet} alt="trust wallet" /></li>
                   
                </ul>

        </div>
      </div>
 
    </div>
  );
}
