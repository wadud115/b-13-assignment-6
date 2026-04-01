import { useState } from 'react'
import './App.css'
import About from './component/About'
import Banner from './component/Banner'
import Footer from './component/Footer'
import Models from './component/Models'
import NavBar from './component/NavBar'
import Carts from './component/Carts'
import Steps from './component/Steps'

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

    <NavBar></NavBar>
    <Banner></Banner>


    <About></About>


        
<div className="tabs tabs-box justify-center bg-transparent ">

  <input onClick={()=> setActiveTab("model")} type="radio" name="my_tabs_1" className="tab w-30 rounded-lg" aria-label="Model" defaultChecked />
  <input onClick={()=> setActiveTab("cart")} type="radio" name="my_tabs_1" className="tab w-30 rounded-lg " aria-label={`Cart (${carts.length})`} />
</div>

   {activeTab === "model" && <Models carts = {carts } setCarts={setCarts} modelsPromise= {modelsPromise}></Models>}
  
   {activeTab === "cart" && <Carts setCarts={setCarts} carts={carts}></Carts>  }

   <Steps></Steps>


    <Footer></Footer>
    
    </>
  )
}

export default App
