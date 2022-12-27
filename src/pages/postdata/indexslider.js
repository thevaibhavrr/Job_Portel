import React, { useState } from "react";

function Indexslider() {
  const [user, setUser] = useState({
    title: "",
    describstion: "",
  });
  const [image , setImage] = useState({
    profile : ""
  })
  let img , data
  const userimage = (e)=>{
    img = e.traget.img;
    data = e.traget.value.filedname
  }
  console.log(data)

 
  let name, value;
  const userInput = (e) => {
    name = e.traget.name;
    console.log(name)
    value = e.traget.value;
    console.log(value)
    setUser({ ...user, [name]: value });
  };
console.log(user)
  const postdata = async(e)=>{
    e.preventDefault()
    const {name ,describstion, image } =  user
    
    const res =  await fetch('/slider',{

    })
  }

  return (
    <div
      style={{
        padding: "100px",
        backgroundColor: "#98AFC7",
        width: "500px",
        height: "50%",
        marginLeft: "400px",
        marginTop: "30px",
        boxShadow:
          "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
      }}
    >
      <div>
        <div style={{ padding: "10px" }}>
          <label htmlFor="title">Title</label>
          <div>
            <input type="text" name="title" value={user.title} onChange={{userInput}} id="title"></input>
          </div>
        </div>
      </div>
      <div style={{ padding: "10px" }}>
        <label htmlFor="">Describstion</label>
        <input type="text" name="describstion" value={user.describstion} onChange={{userInput}} id="describstion"></input>
      </div>
      <div style={{ padding: "10px" }}>
        <label htmlFor="image">Image</label>
        <input type="file" name="image" value={image.profile} onChange={{userimage}} id="image"></input>
      </div>
      <button
        type="submit"
        style={{
          marginTop: "20px",
          border: "2px solid black",
          color: "black",
          backgroundColor: "#4CAF50",
          boxShadow:
            "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
        }}
      >
        Post
      </button>
    </div>
  );
}

export default Indexslider;

    //10 and 12 th aadhar pan photo 1-3 tsining , intenship 3 6-8 , inteview 13-20 , 1-3 year 
    // addhar paa