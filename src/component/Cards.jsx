import React from 'react';

const Cards = () => {
    return (
        <div>

            <div className='text-center space-y-5 mb-10 mt-40'>
                <h2 className='font-bold text-4xl'>Simple, Transparent Pricing</h2>
                <p>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div className='cards grid grid-cols-3 gap-10 w-10/12 mx-auto mb-20'>

                <div className='card bg-[#F9FAFC] border border-[#F2F2F2] shadow-2xl p-5 space-y-5 rounded-3xl'>
                    <div>
                        <h3 className='font-bold text-xl '>Starter</h3>
                        <p className='text-gray-500'>Perfect for getting started</p>
                    </div>

                    <p>
                        <span className='font-bold text-3xl'>$0</span> /month
                    </p>

                    <ul className='text-gray-500 '>
                        <li> ✔ Access to 10 free tools</li>
                        <li> ✔ Basic templates</li>
                        <li> ✔ Community support</li>
                        <li> ✔ 1 project per month</li>
                    </ul>


                    <div className='mt-30'>
                        <button className='btn bg-purple-600 text-white rounded-full w-full'>Get Started Free</button>
                    </div>

                </div>
                <div className='card bg-[#8900f9] text-white border border-[#F2F2F2] shadow-2xl p-5 space-y-5 rounded-3xl'>
                    <div>
                        <h3 className='font-bold text-xl '>Pro</h3>
                        <p className='text-white'>Best for professionals</p>
                    </div>

                    <p>
                        <span className='font-bold text-3xl'>$29</span> /month
                    </p>

                    <ul className='text-white '>
                        <li> ✔ Access to all premium tools</li>
                        <li> ✔ Unlimited templates</li>
                        <li> ✔ Custom integrations</li>
                        <li> ✔ Cloud sync</li>
                        <li> ✔ SLA guarantee</li>
                        <li> ✔ Advanced analytics</li>
                    </ul>


                    <div className='mt-15'>
                        <button className='btn text-purple-500 font-semibold rounded-full w-full'>Get Started Free</button>
                    </div>

                </div>
                <div className='card bg-[#F9FAFC] border border-[#F2F2F2] shadow-2xl p-5 space-y-5 rounded-3xl'>
                    <div>
                        <h3 className='font-bold text-xl '>Enterprise</h3>
                        <p className='text-gray-500'>For teams and businesses</p>
                    </div>

                    <p>
                        <span className='font-bold text-3xl'>$99</span> /month
                    </p>

                    <ul className='text-gray-500 '>
                        <li> ✔ Team collaboration</li>
                        <li> ✔ Custom integrations</li>
                        <li> ✔ Custom integrations</li>
                        <li> ✔ Dedicated support</li>
                        <li> ✔ SLA guarantee</li>
                        <li> ✔ Custom branding</li>
                    </ul>


                    <div className='mt-15'>
                        <button className='btn bg-purple-600 text-white rounded-full w-full'>Get Started Free</button>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default Cards;