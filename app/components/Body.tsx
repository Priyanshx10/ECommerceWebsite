/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import Image01 from "../../public/Image 01.jpg"
import Image02 from "../../public/Image 02.jpg"
import Image03 from "../../public/Image 03.jpg"


function Body() {
 return (
   <div className='mx-10 p-4 bg-slate-800 rounded-2xl text-white'>
     <header className="text-center">
       <h1 className="text-4xl font-bold mb-4">Welcome to the Complete 2024 Guide</h1>
       <section className="text-xl font-semibold mb-6">Xprovement: Unrecognizable Awaits</section>
     </header>

     <section className="section-features flex-col space-y-4">
       <div className="feature-box rounded-xl bg-slate-900 p-4 text-white flex-row flex justify-around">
        <div className='justify-center flex flex-col'>
          <h2 className="section-heading text-pink-600 text-2xl mb-2">Embark on a Life-Changing Journey</h2>
          <ul className="list-disc pl-4">
            <li>Guided path towards a remarkable lifestyle and career</li>
            <li>Unlock your full potential and discover newfound passions</li>
            <li>Become the best version of yourself</li>
          </ul>
         </div>
         <div>
          <Image src={Image01} alt="Image description" width={500} height={500} className='rounded-2xl' />
         </div>
       </div>


       <div className="feature-box rounded-xl bg-slate-900 p-4 text-white flex-row flex justify-around">
        <div>
          <Image src={Image02} alt="Image description" width={500} height={500} className='rounded-2xl' />
        </div>
        <div className='justify-center flex flex-col'>
          <h2 className="section-heading text-pink-600 text-2xl mb-2">Uncover Your Hidden Potential</h2>
          <ul className="list-disc pl-4">
            <li>Wake up energized and fulfilled, ready to tackle each day</li>
            <li>Access resources and personalized tools to achieve your goals</li>
            <li>Master new skills, launch a dream career, or cultivate a healthier lifestyle</li>
            <li>Connect with a supportive community of like-minded individuals</li>
          </ul>
        </div>
       </div>

       <div className="feature-box rounded-xl bg-slate-900 p-4 text-white flex-row flex justify-around">
        <div className='justify-center flex flex-col'>
            <h2 className="section-heading text-pink-600 text-2xl mb-2">Craft a Life You Love</h2>
            <ul className="text-white">
              <li>Explore in-depth learning modules, personalized coaching programs, and insightful workshops.</li>
              <li>Embrace a journey of self-discovery and redefine your aspirations.</li>
              <li>Step into a life that excites and inspires you.</li>
              <li>Xprovement is your map to a brighter, more fulfilling tomorrow.</li>
            </ul>
          </div>
         <div>
          <Image src={Image03} alt="Image description" width={500} height={500} className='rounded-2xl' />
        </div>
       </div>

       <div className="feature-box rounded-xl bg-slate-900 p-4 text-white flex-row flex justify-around">
         <h2 className="section-heading text-pink-600 text-2xl mb-2">Become Unrecognizable</h2>
         <ul className="text-white">
           <li>Imagine looking back and barely recognizing the person you once were.</li>
           <li>Evolve into the best version of yourself.</li>
           <li>Embark on a journey of self-discovery, growth, and transformation.</li>
           <li>Feel empowered, confident, and ready to embrace life's possibilities.</li>
         </ul>
       </div>

       <div className="feature-box rounded-xl bg-slate-900 p-4 text-white flex-row flex justify-around">
         <h2 className="section-heading text-pink-600 text-2xl mb-2">A Community of Support</h2>
         <ul className="text-white">
           <li>You're not alone on this journey.</li>
           <li>Connect with like-minded peers striving for positive change.</li>
           <li>Share experiences and find encouragement.</li>
           <li>Stay motivated and celebrate victories together.</li>
         </ul>
       </div>
     </section>
   </div>
 );
}

export default Body;
