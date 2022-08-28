import React from 'react'
import Modal from 'react-modal';
import { BsFillCalendar2Fill, BsStopwatch, BsCurrencyDollar } from "react-icons/bs";
import { BiVideo } from "react-icons/bi";
const Preview = (props) => {

  return (
    <>
    <Modal
    isOpen={ props.isOpen }
    contentLabel="Example Modal" >
        <button className="btn btn-danger text-center" onClick={props.toggle}>close</button>
        <div className="container">
    <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-12">
      <div class="p-12 md:w-1/2 flex flex-col items-start">
        <h2>Lorem Epsum is a dummy test title </h2>
        <h5>Short Description.....</h5>
        <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
            <h3>What will you get ?</h3>
            <h5>{props.cred.desc}</h5>
        </div>
      </div>
      <div class="p-12 md:w-1/2 flex flex-col items-start">
        <div class="flex flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
        <div style={{width:"400px", height:"340px"}} className="w3-card border border-dark">
         <h1 className="container text-center" style={{marginLeft:"165px"}}> <BsFillCalendar2Fill /></h1>
         <div className="container" style={{marginLeft:"30px", marginTop:"50px"}}>
            <h5 className="my-4"> <BsStopwatch /> {props.cred.date}</h5>
            <h5 className="my-4"><BiVideo /> {props.cred.eventlink}</h5>
            <h5 className="my-4" style={{color:"Green"}}> <BsCurrencyDollar /> Free </h5>
            <h5 className="my-4">Duration {props.cred.duration}</h5>
         </div>
         </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
</Modal>
    </>
  )
}

export default Preview