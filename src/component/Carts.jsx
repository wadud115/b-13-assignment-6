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

    
        <div className=' p-10'> 


        {
            carts.length===0? (<p className='font-bold text-2xl text-center'>cart is empty</p> ): (<>

            
            <div className='space-y-5'>

            {
                carts.map(item => <div key={item.id} className='flex border p-5 rounded-2xl items-center w-8/12 mx-auto justify-between'>

                             
                             
                             <div className='flex gap-5 items-center'>

                                <div >
                                    <img className='h-30 w-25 object-contain'  src={item.image} alt="" />
                                </div>

                                <div>
                                    <h3 className='text-2xl font-bold'>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>

                                </div>

                                <div className='flex gap-3 items-center'>
                                    <p className='font-bold text-xl'>${item.price}/month</p>

                                    <button onClick= {()=> handledelete(item)} className='btn btn-error '> X </button>
                                </div>
                   

                </div>)
            }

            </div>


            <div className='flex justify-between bg-black p-5 mt-5 rounded-2xl font-bold mx-auto text-2xl w-8/12 text-white'>
                <div>total</div>
                <div>${Totalprice}</div>


            </div>

            <button onClick={handlepamant} className= 'bg-red-500 btn  p-2  text-2xl text-white font-semibold rounded-xl mt-5 w-8/12 mx-auto flex justify-center'>
                proceed to chekout
            </button>

            
            </>)
        }

         


            

           

         
            
        </div>
    );
};

export default Carts;