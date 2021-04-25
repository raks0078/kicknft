import React, { Component } from 'react'
import house from "../images/main-cards/the-conjuring-house.jpg"
import box2 from "../images/main-cards/box2.png"
import nominee from "../images/main-cards/nominee.png"
import jeep from "../images/main-cards/jeep.png"
import cryptoart from "../images/main-cards/featured-vertical-cryptoart.png"
import "./Explore.scss"
class Explore extends Component {
  render() {
    return (
      <div className="container">
        <div className="sections">
          <div className="main-cards">
            <a href="javascript:void(0)">
              <span>
                <img src={house} />
                <div className="content">
                  <p>Creating the Conjuring <br/>franchise</p>
                  <small>Original audio tape with Ed & Lorrain Warren</small>
                </div>
              </span>
            </a>
            <a href="javascript:void(0)">
              <span>
                <img src={box2} />
                <div className="content">
                  <p>55 NFT artists <br/>collaboration</p>
                  <small>NFTBastards</small>
                </div>
              </span>
            </a>
            <a href="javascript:void(0)">
              <span>
                <img src={nominee} />
                <div className="content">
                  <p>Everyone Wins</p>
                  <small>Nominee gift bag for Hollywood’s biggest night</small>
                </div>
              </span>
            </a>
            <a href="javascript:void(0)">
              <span>
                <img src={jeep} />
                <div className="content">
                  <p>Smokable NFT <br/>Genesis Experience</p>
                  <small>Auction closes 4/23 at 4:20 PST</small>
                </div>
              </span>
            </a>
            <a href="javascript:void(0)">
              <span>
                <img src={cryptoart} />
                <div className="content">
                  <p>Rarible   <br/>weekly picks</p>
                  <small>by Vertical Cryptoart</small>
                </div>
              </span>
            </a>
          </div>
          <div className="top-sellers">
            <h1 className="heading">Top 
            <span className="text-blue"> sellers</span> in 1 
            <span className="text-blue"> day</span></h1>
            <div className="top-seller-content">
              <span>
                <div className="counting">1</div>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Explore
