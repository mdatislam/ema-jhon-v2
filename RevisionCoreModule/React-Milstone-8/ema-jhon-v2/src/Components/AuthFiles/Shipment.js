import React from 'react';

const Shipment = () => {
    return (
        <div>
            
            <form className='form-container'>
            <h2 style={{textAlign:'center',font:'larger'}}> Plese provid your shipping info:</h2>
                <div className='input-field'>
                    <label htmlFor="Name">Name</label>
                    <input  type='email' placeholder='Enter Your Name' />
                </div>
                <div className='input-field'>
                    <label htmlFor="address">Address</label>
                    <input  type='email' placeholder='Your Parament address' />
                </div>
                <div className='input-field'>
                    <label htmlFor="email">Email</label>
                    <input  type='email' placeholder='Your email' />
                </div>
                <div className='input-field'>
                    <label htmlFor="email">Mobile Number</label>
                    <input  type='email' placeholder='mobile number' />
                </div>
                
            </form>

        </div>
    );
};

export default Shipment;