import React from 'react'
import './Home.css'

function Home() {
  return (
    <>
        <div className='container'>
            <div className='card'>
                <label className='text1'>Enter Your Details</label>

                <div className='fields'>
                    <div className='field1'>
                        <label className='f1'>User Name:</label>
                        <input type="text" placeholder='Enter your name' />
                    </div>

                    <div className="field2">
                        <label className="f2">User Password:</label>
                        <input type="text" placeholder="Enter your password" />
                    </div>;

                </div>
            </div>
        </div>
    </>
  )
}

export default Home