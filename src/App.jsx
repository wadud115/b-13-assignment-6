import { useState } from 'react'
import './App.css'
import About from './component/About'
import Banner from './component/Banner'
import Footer from './component/Footer'
import Models from './component/Models'
import NavBar from './component/NavBar'
import Carts from './component/Carts'
import Steps from './component/Steps'
import Cards from './component/Cards'
import { ToastContainer } from 'react-toastify'

const getModels = async () => {
  const res = await fetch("/models.json")
  return res.json()
}

const modelsPromise = getModels()

function App() {


  const [activeTab , setActiveTab] = useState("model")

  // console.log(activeTab);

  const [ carts , setCarts] = useState([])

  // console.log(carts);
 


  return (
    <>

    <NavBar carts={carts}></NavBar>
    <Banner></Banner>


    <About></About>

      <div className='text-center space-y-3 mt-30'>
            <h2 className='text-5xl font-bold'>Premium Digital Tools</h2>
            <p className='w-5/12 mx-auto'>Choose from our curated collection of premium digital products designed 
                to boost your productivity and creativity.</p>
            </div>

    <div className="tabs tabs-box justify-center bg-transparent mt-10 ">

  <input onClick={()=> setActiveTab("model")} type="radio" name="my_tabs_1" className="tab w-30 rounded-full" aria-label="Product" defaultChecked />
  <input onClick={()=> setActiveTab("cart")} type="radio" name="my_tabs_1" className="tab w-30  rounded-full " aria-label={`Cart (${carts.length})`} />
</div>


        


   {activeTab === "model" && <Models carts = {carts } setCarts={setCarts} modelsPromise= {modelsPromise}></Models>}
  
   {activeTab === "cart" && <Carts setCarts={setCarts} carts={carts}></Carts>  }

   <Steps></Steps>

   <Cards></Cards>


    <Footer></Footer>

    <ToastContainer></ToastContainer>
    
    </>
  )
}

export default App
