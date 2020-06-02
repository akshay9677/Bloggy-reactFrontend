import React, { useState } from "react";
import axios from "axios";



function Compose(){
    const [titl,setTitle] = useState("");
    const [bod,setBody] = useState("");

    
    function handleTitleChange(event){
        setTitle(event.target.value);
    }
    function handleBodyChange(event){
        setBody(event.target.value);
    }

    function handleClick(event){
       const blog ={
        title: titl,
        body: bod
       }
         axios.post("http://localhost:5000/blogs/add",blog)
         .then(res => console.log(res.data));

        setTitle("");
        setBody("");
        alert("Thanks for posting");
        window.location = "/home";

    }
    return(
        <div className="card border-dark mb-3 container compose" style={{ width: '30rem' }}>
        <div className="card-title">
       <h1>Compose</h1>
      </div>
      <div className="card-body">
           <form>
  <div className="form-group container">
    <label>Title {}</label>
    <input onChange={handleTitleChange} type="text" className="form-control form-control-lg" name="heading" placeholder="Enter Title"/>
  </div>
  <div className="form-group container">
    <label>Content</label>
    <textarea type="text" onChange={handleBodyChange} className="form-control form-control-lg" rows="5" name="body" placeholder="Enter Content"></textarea>
  </div>
  <div className="container">
  <button onClick={handleClick}type="submit" className="btn btn-primary">Submit</button>
  </div>
  
</form>
</div>
        </div>
    

    )
}

export default Compose;