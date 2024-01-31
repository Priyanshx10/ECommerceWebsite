import React from 'react';

function Body() {
 return (
   <div className='container mx-auto p-4 bg-slate-800 rounded-2xl text-white'>
     <header className="text-center">
       <h1 className="text-4xl font-bold mb-4">Welcome to the Complete 2024 Guide</h1>
       <section className="text-xl font-semibold mb-6">Xprovement: Unrecognizable Awaits</section>
     </header>

     <section className="section-features flex-col space-y-4">
       <div className="feature-box rounded-xl bg-slate-900 p-4 text-white">
         <h2 className="section-heading text-pink-600 text-2xl mb-2">Embark on a Life-Changing Journey</h2>
         <ul className="list-disc pl-4">
           <li>Guided path towards a remarkable lifestyle and career</li>
           <li>Unlock your full potential and discover newfound passions</li>
           <li>Become the best version of yourself</li>
         </ul>
       </div>

       {/* Other features with bullet points similarly */}

       <div className="feature-box rounded-xl bg-slate-900 p-4 text-white">
         <h2 className="section-heading text-pink-600 text-2xl mb-2">Uncover Your Hidden Potential</h2>
         <ul className="list-disc pl-4">
           <li>Wake up energized and fulfilled, ready to tackle each day</li>
           <li>Access resources and personalized tools to achieve your goals</li>
           <li>Master new skills, launch a dream career, or cultivate a healthier lifestyle</li>
           <li>Connect with a supportive community of like-minded individuals</li>
         </ul>
       </div>

       {/* ... */}
     </section>
   </div>
 );
}

export default Body;
