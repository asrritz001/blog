import React from "react";
import './Form.css';
function Form(){
    return(
        <div className="form">
        <h2>Contact us!!!!</h2>
        <form>
        <label>First Name</label>
        <input type="text"name="Name" placeholder="First Name" required/>
        <label>Last Name:</label>
        <input type="text"name="name" placeholder="Last Name" required/>
        <label>Email:</label>
      
        <input type="text"name="name" placeholder="Emailid" required/>
        <label>Message:</label>
      
        <textarea name="message" placeholder=" write here Description" required/>
        <button type="submit">Submit</button>
        </form>
        </div>
    );
}
export default Form;