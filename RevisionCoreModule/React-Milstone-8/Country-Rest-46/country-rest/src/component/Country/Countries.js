import React, { useEffect, useState } from 'react';
import Country from '../singleCountry/Country';
import './countries.css'


const Countries = () => {
    
    const [countries,setCountries]=useState([])
    //const [searchText,setSearchText]=useState('')
    const [searchCountry,setSearchCountry]=useState([])
   

    useEffect(()=>{
        const url= `https://restcountries.com/v3.1/all`
        //console.log(url)
        fetch(url)
        .then(res=>res.json())
        .then(data =>setCountries(data))
    },[])

// searching option add
    const handleSearchCountry= (e)=>{
        //setSearchText(e.target.value) 
        const text= e.target.value 
        const match= countries.filter(d=>d.name.common.toLowerCase().includes(text.toLowerCase()))
        setSearchCountry(match)

    
    }
//console.log(countries)
    return (
        <div>
            <h2>Welcome To Travel of Different Countries!!</h2>

           <br />
            <input onChange={handleSearchCountry}  type='text' placeholder='write country name' id=''/>

            {/* <h3>Total country found: {countries.length}</h3> */}
            <h3>Search country found: {searchCountry.length}</h3>
            <div className='country-container'>
               
                   { 
                   searchCountry.map((x) =>  <Country  key={x.area} x={x}></Country>)
                   } 
                
            </div>
        </div>
    );
};

export default Countries;