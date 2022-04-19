import React from 'react'
import "./HomeSc1.css"


let bannerData = {
    title: "Welcome To Gallery",
    
}

function HomeSc1() {
    return (
        <div className="banner-bg ">
            <div className="container">
                <div className="banner-con ">
                <div className="text-gradient">
                        <h1 >{bannerData.title}</h1>          
                    </div>    
                                        
                </div>
                
            </div>
        </div>
    )
}

export default HomeSc1
