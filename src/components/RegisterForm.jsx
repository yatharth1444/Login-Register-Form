import { useState } from "react";

 function RegisterForm(){
     const [formData, setFormData] = useState({
        name : "",
        email: "",
        password : "",
     })
     const [formError, setFormError] = useState({
        name:"",
        email: "",
        password : "",
     })
     function validateField(name, value){
        switch (name) {
            case "name":
                return  value.trim() === "" ? "name is required" : ""
            case "email":
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) ? "" : "enter valid email"
            case "password":
                return value.length >0 ? "" : "password shold be six characters long"  
            default:
                return ""
        }
     }
     function OnChangeHandler(event){
       const {name, value} = event.target
       setFormData((prev)=>({
        ...prev,
        [name] : value
       }))
       setFormError((prev)=>({
        ...prev,
        [name]: validateField(name, value)
       }))
     }
     const handleSubmit = (e) =>{
         e.preventDefault()
         console.log("register user with the data ", formData)
         const newErrors = {
            name: validateField("name", formData.name),
            email: validateField("email", formData.email),
            password: validateField("password", formData.password),
         }
        setFormError(newErrors)
        const isValidated = Object.values(newErrors).every((msg)=>msg === "")
        if (isValidated) {
            console.log("no errors", formData);
        }
        else{
            console.log("error");
            
        }
     }
     return <div>
        <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input 
           type="text"
           name="name"
           value={formData.name}
           onChange={OnChangeHandler}
           placeholder="Enter your Name" 
        />
        {formError.name && <p style={{color:"red"}}>{formError.name}</p>}
        <input 
           type="email"
           name="email"
           value={formData.email}
           onChange={OnChangeHandler}
           placeholder="Enter your Email" 
        />
        {formError.email && <p style={{color:"red"}}>{formError.email}</p>}

        <input 
           type="password"
           name="password"
           value={formData.password}
           onChange={OnChangeHandler}
           placeholder="Enter your password" 
        />
        {formError.password && <p style={{color:"red"}}>{formError.password}</p>}
        <button type="Submit">Register</button>
        </form>
     </div>
}
export default RegisterForm
