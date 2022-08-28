import React, { useState } from "react";
import { Link } from "react-router-dom";
import Preview from "./Preview";

const Event = () => {

    const [credentials, setCredentials] = useState({eventname:"",banner: "",desc:"", price:"", duration:"", date:"", eventlink:""})
    const [showModalLogin, setShowModalLogin] = useState(false);
  const toggleModalLogin = () => {
    if (showModalLogin) {
      setShowModalLogin(false);
    } else {
      setShowModalLogin(true);
    }
  };

  const onChange = (e)=>
    {
        setCredentials({...credentials, [e.target.name]: e.target.value})
        console.log(credentials)
    }
  return (
    <>
    <p style={{marginLeft:"155px"}} className="my-2">Create Event</p>
    <div style={{width:"1400px", height:"740px", textAlign:"center", marginLeft:"155px"}} className="w3-card text-center border border-dark">
    <Link to="/"><button style={{fontSize:"24px", marginRight:"1200px", marginTop:"40px"}}> <i class='fas fa-angle-double-left'></i> Back</button></Link>
<div className="row">
  <div className="column">
    <form>
        <div style={{marginTop:"80px"}} className="container">
        <h3 style={{marginTop:"40px", marginRight:"400px"}}>Create Event</h3>
    <input style={{width:"300px", marginTop:"40px"}} className="form-control mx-5" type="text" placeholder="Event Name" onChange={onChange} name="eventname" aria-label="default input example"/>
    <input style={{width:"300px", marginTop:"40px"}} className="form-control mx-5" type="text" placeholder="Banner" onChange={onChange} name="banner" aria-label="default input example"/>
<div className="mb-3">
  <label style={{marginRight:"440px", marginTop:"40px"}} for="desc" className="form-label font-weight-bold">Short Desciption</label>
  <textarea style={{width:"400px"}} className="form-control mx-5" id="desc" onChange={onChange} name="desc" rows="3"></textarea>
</div>
</div>
</form>
  </div>
  <div className="column">
    <button onClick={toggleModalLogin} type="button" className="btn btn-outline-danger" style={{width:"150px", marginLeft:"500px", borderRadius:"20px"}}>Preview</button>
    <Preview isOpen={showModalLogin} toggle={toggleModalLogin} cred={credentials}/>
  <form>
    <div style={{marginRight:"400px"}} className="conainer my-5">
  <label for="cars">Choose Language:</label>
  <select name="cars" id="cars">
    <option value="volvo">Englis</option>
    <option value="saab">Hindi</option>
  </select>
  <input style={{width:"300px", marginTop:"40px"}} className="form-control mx-5" type="text" placeholder="Price(in INR)" onChange={onChange} name="price" aria-label="default input example"/>
  <input style={{width:"300px", marginTop:"40px"}} className="form-control mx-5" type="text" placeholder="Duration(in Minutes)" onChange={onChange} name="duration" aria-label="default input example"/>
  <input style={{width:"300px", marginTop:"40px"}} className="form-control mx-5" type="text" placeholder="Date (DD-MM-YYYY)" onChange={onChange} name="date" aria-label="default input example"/>
  <input style={{width:"300px", marginTop:"40px"}} className="form-control mx-5" type="text" placeholder="Event Link" onChange={onChange} name="eventlink" aria-label="default input example"/>
</div>
</form>
  </div>
</div>
<button style={{width:"200px", height:"50px", marginTop:"200px"}} className="btn btn-danger text-center">save</button>
</div>
    </>
  )
}

export default Event