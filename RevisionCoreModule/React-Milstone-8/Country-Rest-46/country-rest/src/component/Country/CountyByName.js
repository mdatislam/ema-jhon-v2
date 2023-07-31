import React, { useState } from 'react';
import './CountryByName.css'
import Country from '../singleCountry/Country';
import { useNavigate } from 'react-router';

const CountyByName = () => {
    const [searchText,setSearchText]=useState('')
    const [singleCountry,setSingleCountry]= useState([])
    const navigate= useNavigate()

const handleSearchText=(event)=>{
    setSearchText(event.target.value)
    
}

const handleSearch=(searchText)=>{
    //console.log(searchText)
    
   if(searchText){
    const url = `https://restcountries.com/v3.1/name/${searchText}`

    fetch(url)
    .then(res=>{
       // console.log(res)
        if(res.status===404){
            alert('No country found, search by another name') 
            navigate("/Home")
           
        }
      return  res.json()
    })
    .then(data=>  setSingleCountry(data))
   }
   else{

    alert('Please search another country name')
    return
   }
}

    return (
        <div>
           
           <div className="input-form">
            <h3>Put Required Country Name</h3>
            <input onChange={handleSearchText} type='text' placeholder='country name' />
            <span > <button onClick={()=>handleSearch(searchText)} style={{'margin':"30px -4px"}}>Search</button></span>
           </div>

           <div className='country-container'>
               
                   { 
                   singleCountry.map((x) =>  <Country 
                   key={x.area}
                   x={x}></Country>)
                   } 
                
            </div>

        </div>
    );
};

export default CountyByName;