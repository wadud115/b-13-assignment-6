import React, { use } from 'react';
import ModelCard from './ModelCard';

const Models = ({modelsPromise , carts , setCarts}) => {
    const models = use(modelsPromise)
    console.log(models);
    
    return (
        <div className='py-10'>


         



            

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10 w-10/12 mx-auto'>

                {
                models.map(model => <ModelCard carts = {carts } setCarts={setCarts} model = {model}></ModelCard>
                )
            }


            </div>

            
        </div>
    );
};

export default Models;