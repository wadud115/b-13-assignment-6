import React, { useState } from 'react';
import { toast } from 'react-toastify';
// import { toast } from 'react-toastify';

const ModelCard = ({model, carts , setCarts}) => {

    const [isSubscribed , setIssubscribed] = useState(false)

    const handleSubscription = () =>{
        setIssubscribed(true)
        setCarts([...carts , model])

        // toast.success('item added to cart')
        toast.success("item added to cart")
    }

   

    return (
        <div className=''>

  

            <div className='shadow-lg rounded-lg border overflow-hidden border-zinc-300'>


                    
                    <div className='p-5 space-y-3'>
                        
                        <div className=' flex justify-end  '>
                            <p className=' bg-green-200 text-green-700 font-semibold w-30 h-10flex p-2 rounded-3xl flex justify-center items-center'>{model.tag}</p>
                        </div>
                        
                        <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
                   <img 
                 src={model.icon} 
                className="w-7 h-7 object-contain"/>
                                                   
                           </div>

                        <h2 className='text-2xl font-bold'>{model.name}</h2>
                        <p>{model.description}</p>
                        <div className='text-2xl font-bold'>${model.price}<span className='text-gray-400 font-normal text-sm '>/{model.period}</span></div>
                        <ul className="mt-4 space-y-3">

                     {model.features.map((feature, index) => (
                     <li key={index} className="flex items-start gap-3 text-gray-600">
      
                    <span className="text-green-500 ">✔</span>
      
                      <p>{feature}</p>
                        </li>
           ))}
          </ul>
                        <button  onClick={ handleSubscription} className='btn w-full bg-purple-600 rounded-lg  text-white'>
                            {isSubscribed? "Add to carded " : "Buy Now "}</button>
                    </div>
                    
                </div>
            
        </div>
    );
};

export default ModelCard;
