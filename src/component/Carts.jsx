import React from 'react';
import { toast } from 'react-toastify';

const Carts = ({carts , setCarts}) => {
  console.log(carts);

  const Totalprice = carts.reduce( (sum, item) => sum+item.price , 0)
  console.log(Totalprice);

  const handlepamant = () =>{

    setCarts([])

    toast.success("payment successfully")
  }

  const handledelete = (item) =>{
    // console.log(item);

    const fillterd = carts.filter( c =>  c.id !== item.id)
    console.log(fillterd);
    setCarts(fillterd)

    toast("item deleted")

  }
   
  return (

    
        <div className=' p-10  w-8/12 bg-gray-50 mx-auto my-30 border border-gray-200 rounded-2xl'> 


        {
            carts.length===0? (<p className='font-bold text-2xl text-center'>cart is empty</p> 
                
             ): (<>

            
            <div className='space-y-5'>

                <p className='font-bold text-xl'>Your Cart </p>

            {
                carts.map(item => <div key={item.id} className='flex bg-gray-100 border border-gray-300 p-5 rounded-2xl items-center  mx-auto justify-between'>

                             
                             
                             <div className='flex gap-5 items-center'>

                                <div className='w-12 h-12 flex items-center justify-center bg-gray-300 rounded-full' >
                                    <img className='w-7 h-7 object-contain'  src={item.icon} alt="" />
                                </div>

                                <div className='space-y-1'>
                                    <h3 className='text-xl font-bold'>{item.name}</h3>
                                   <p className='font-semibold text-md text-gray-500'>${item.price}</p>
                                </div>

                                </div>

                                <div className='flex gap-3 items-center'>
                                    

                                    <button onClick= {()=> handledelete(item)} className='btn btn-error text-red-100'> Remove </button>
                                </div>
                   

                </div>)
            }

            </div>


            <div className='flex justify-between  p-5 mt-5 rounded-2xl font-bold mx-auto text-2xl  text-black'>
                <div>total : </div>
                <div>${Totalprice}</div>


            </div>

            <button onClick={handlepamant} className= 'bg-purple-600 btn  p-2  text-lg text-white font-semibold rounded-xl mt-5 w-full mx-auto flex justify-center'>
                proceed to chekout
            </button>

            
            </>)
        }

         


            

           

         
            
        </div>
    );
};

export default Carts;