import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

function Home(){
   
    const [blog,setBlog] = useState([]);

    
    
        

    axios.get("http://localhost:5000/blogs/find")
    .then(res => {
        setBlog(res.data);
         
    })
    .catch((error)=> {
        console.log(error);
    })

    function handleClick(item){
        var i = item._id;
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover the post",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                axios.delete("http://localhost:5000/blogs/"+i)
                .then(res => {
                    console.log("Deleted Baby");
                     
                })
                .catch((error)=> {
                    console.log(error);
                })
            } else {
              swal("Your post is not deleted");
            }
          });


    }
    function handleClick2(item){
        var i = item._id;
        axios.put("http://localhost:5000/blogs/"+i)
    .then(res => {
        console.log("Deleted Baby");
         
    })
    .catch((error)=> {
        console.log(error);
    })

    }
    
        
    return (
        <div className="container">
             <h1 className="head">Bloggy</h1>
    <div className="alert alert-primary alertt" role="alert">
  A simple Blog Post App- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</div>
            {blog.map((noteItem, index) => {
                
        return (
           
            <div  key={index}>
            <h1>{noteItem.title}</h1>
              <p>{noteItem.body} </p>
              <button className="btn btn-danger btn-sm" onClick={handleClick.bind(this,noteItem)}><i className="far fa-window-close"></i> Delete</button>
              &nbsp;
              <button className="btn btn-primary btn-sm" onClick={handleClick2.bind(this,noteItem)}><i className="far fa-thumbs-up"></i> {noteItem.likes}  Like</button>
              
          </div>
        );
      })}   

        </div>
    )
}

export default Home;