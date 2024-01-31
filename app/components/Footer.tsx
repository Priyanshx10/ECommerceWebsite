import React from 'react'

function Footer() {
  return (
    <div className='bg-slate-300 h-[800] '>
        <div className='flex flex-row justify-around '>
            <div>
                <h1 className="text-center text-l">Support</h1>
            </div>
            <div>
                <h1 className="text-center text-l">About Us</h1>
            </div>
            <div>
                <h1 className="text-center text-l">Contact</h1>
            </div>
        </div>
        <div className='flex flex-row justify-start '>
            <div>
                <h1 className="text-center text-sm mx-4"> © 2024 Astro Nova Labs</h1>
            </div>
            <div>
                <h1 className="text-center text-sm mx-4">Community Standards</h1>
            </div>
            <div>
                <h1 className="text-center text-sm mx-4">Privacy Policy</h1>
            </div>
            <div>
                <h1 className="text-center text-sm mx-4">Terms</h1>
            </div>
            <div>
                <h1 className="text-center text-sm mx-4">Cookie policy</h1>
            </div>
        </div>
       
    </div>
  )
}

export default Footer