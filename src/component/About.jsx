import React from 'react';

const About = () => {
    return (
        <div className='bg-purple-600 '>

            
      <div className='w-10/12 mx-auto flex justify-center  gap-10 p-15'>
      
                <div className='border-r px-20 border-white space-y-3'>
                    <h2 className='text-gray-200 font-bold text-4xl'>50K+</h2>
                    <p className='text-gray-300'> Active Users</p>

                </div>

                <div className='border-r px-20 border-white space-y-3'>
                    <h2 className='text-gray-200 font-bold text-4xl'>200+</h2>
                    <p className='text-gray-300'>Premium Tools</p>

                </div>

                <div className='space-y-3'>
                    <h2 className='text-gray-200 font-bold text-4xl'>4.9</h2>
                    <p className='text-gray-300'> Rating</p>

                </div>
</div>



          
            
        </div>
    );
};

export default About;