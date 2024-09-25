import { useState } from "react";

function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: 0,
    message: ""
  });

  const handleForm = (e) => {
    const {name, value} = e.target
   setData({
    ...data, 
    [name]: value
   })
  
   console.log(data);
   
   
  }
  return <div>
    <form action="">
      <input onChange={handleForm} value={data.name} name="name" type="text" placeholder="Enter name"/>
      <input onChange={handleForm} value={data.email} name="email" type="email"  placeholder="Enter email"/>
      <input onChange={handleForm} value={data.number} name="number" type="number" placeholder="Enter phone number"/>
      <textarea onChange={handleForm} value={data.message} name="message" id="" placeholder="enter message">{data.message}</textarea>
      <button type="submit">Submit</button>
    </form>
  </div>;
}

export default Contact;
