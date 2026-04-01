import React from 'react';


const Steps = () => {
    return (
        <div>

            <div className='w-10/12 mx-auto space-y-10 mb-20'>

                <div className='text-center space-y-5'>

            <h2 className='text-4xl font-bold '>Get Started in 3 Steps</h2>
            <p className='text-gray-500'>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='grid grid-cols-3 gap-10 justify-between '>

                <div className='shadow-2xl p-10 rounded-2xl text-center space-y-5'>
                
                <div className='flex justify-end '>
                    <p className='bg-purple-600 h-10 w-10 text-white  rounded-full p-2'>01</p>
                    
                </div>


                      <div className='flex justify-center' >
                   <img className='bg-purple-100 p-5   rounded-full ' src="/public/user.png" alt="" />

                   </div>
                <div>
                    
                    <h3 className='font-bold text-xl '>Create Account</h3>
                    <p className='text-gray-500'>Sign up for free in seconds. No credit card required to get started.</p>
                    
                    
                    </div>

                    </div>


                <div className='shadow-2xl p-10 rounded-2xl text-center space-y-5'>
                
               <div className='flex justify-end '>
                    <p className='bg-purple-600 h-10 w-10 text-white  rounded-full p-2'>02</p>
                    
                </div>

                    
            <div className='flex justify-center' >
                    
                <img className='bg-purple-100 p-5   rounded-full ' src="/public/package.png" alt="" />
                
                </div>
                <div className=''>
                    
                    <h3 className='font-bold text-xl '>Choose Products</h3>
                    <p className='text-gray-500'> Browse our catalog and select the tools that fit your needs.</p>
                    
                    
                    </div>

                    </div>
                <div className='shadow-2xl p-10 rounded-2xl text-center space-y-5'>
                
                <div className='flex justify-end '>
                    <p className='bg-purple-600 h-10 w-10 text-white  rounded-full p-2'>03</p>
                    
                </div>

                <div className='flex justify-center' >

                 <img className='bg-purple-100 p-5    rounded-full ' src="/public/rocket.png" alt="" />

                 </div>
                
                
                <div>
                   
                    <h3 className='font-bold text-xl '>Start Creating</h3>
                    <p className='text-gray-500'>Download and start using your premium tools immediately.</p>
                    
                    
                    </div>

                    </div>

            </div>
            
            
            
            </div>
        </div>
    );
};

export default Steps;