import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ModelCard = ({model, carts , setCarts}) => {

    const [isSubscribed , setIssubscribed] = useState(false)

    const handleSubscription = () =>{
        setIssubscribed(true)
        setCarts([...carts , model])

        toast.success('item added to cart')
    }

    return (
        <div>

            <div className='shadow-lg rounded-lg border overflow-hidden border-zinc-300'>

                    <div className='h-56 flex justify-center items-center bg-zinc-200'>
                    <img className='h-40 w-40 object-contain' src={model.image} alt="" />
                    </div>

                    <div className='p-5 space-y-3'>
                        <h2 className='text-2xl font-bold'>{model.title}</h2>
                        <p>{model.description}</p>
                        <div className='text-2xl font-bold'>${model.price}/month</div>
                        <button  onClick={ handleSubscription} className='btn w-full bg-red-500 rounded-lg  text-white'>
                            {isSubscribed? "Subscribed" : "Subscribe now"}</button>
                    </div>
                    
                </div>
            
        </div>
    );
};

export default ModelCard;
