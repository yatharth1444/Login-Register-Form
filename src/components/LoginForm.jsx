import { useState } from "react"

function LoginForm(){
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const [formErrors, setFormErrors] =useState({
        email: "",
        password:""
    })
    const HandleSubmit = (event) =>{
        event.preventDefault()
        console.log("Login Successfull with" , formData);
        const newErrors = {
            email: validateForm("email", formData.email),
            password: validateForm("password", formData.password)
        }
        setFormErrors(newErrors)
        const isValid = Object.values(newErrors).every((msg)=>msg === "")
        if(isValid){
          console.log("logging with details", formData);
          
        }else{
           console.log("fix credentials to login");
           
        }
    }
    const validateForm = (name, value) =>{
       switch (name) {
        case "email":
            return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)? "": "Invalid email address"
         
        case "password":
            return value.length < 6 ? "password must be six characters" : ""
          
       
        default:
            return ""
       }
    }
    function HandleChange(event){
         const {name, value} = event.target
         setFormData((prev)=>({
            ...prev,
            [name] : value
         }))
         setFormErrors((prev)=>({
            ...prev,
            [name] : validateForm(name, value) 
         }))
     }
    return <div>
        <form onSubmit={HandleSubmit}>
             <h2>Login Form</h2>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={HandleChange}
            />
            {formErrors.email && <p style={{color:"red"}}>{formErrors.email}</p>}
            <input 
              type="password" 
              name="password"
              value={formData.password}
              placeholder="Password"
              onChange={HandleChange}
            />
             {formErrors.password && <p style={{color:"red"}}>{formErrors.password}</p>}
        <button type="Submit">Login</button>
  </form>
       
    </div>
}
export default LoginForm