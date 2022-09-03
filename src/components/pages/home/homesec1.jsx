import React from 'react'
import man from "../../assets/img/man.png"
import fix from "../../assets/img/fix.png"
import tomato from "../../assets/img/tomato.png"
const homesec1 = () => {
    return (

        <div className="homesec1">
            <div className="over">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="left">
                            <p>Black Friday Offer</p>
                            <h1>Organic Orange<br />Juice  <span> 40% Flat</span></h1>
                            <h5>Apparently we had reached a great height in the atmosphere, for the sky
                                was a dead black, and the stars had ceased to twinkle</h5>
                                <button>Shop Now</button>
                                <img src={tomato} className='tmt' />

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right">
                            <img src={man}  className='man'/>
                            <img src={fix} className='fix'/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default homesec1