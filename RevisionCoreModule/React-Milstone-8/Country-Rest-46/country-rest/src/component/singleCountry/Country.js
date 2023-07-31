import React, { useState } from 'react';
import './Country.css'

const Country = (props) => {

    const [steps,setSteps]=useState(0)
    //console.log(props.country)
     const { name, area,flags,population,capital,maps,latlng}= props.x

    return (
        <div>
            <div className='country bg-info' >

            <div className='d-flex flex-row justify-content-evenly'>
            <h5>{name.common}</h5>
            <p>{capital}</p>    
              
            </div>
            <img src={flags.png} alt='flag'/>
            <div className='d-flex flex-row justify-content-evenly'>
            <strong>Area:{area}</strong>
            <p>{population}</p>
            <a href={maps.googleMaps} target='_blank' rel="noreferrer">Location</a>
            </div>
            
            </div>
            
        </div>
    );
};

export default Country;