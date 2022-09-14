import React,{useState} from 'react'
import "./Register.css"
import axios from 'axios'
import {Link, useHistory} from 'react-router-dom'
import * as Components from './Pages/Component';
import log from './img/log.svg'
import reg from './img/register.svg'
import emailjs from '@emailjs/browser';
import Navbar from '../Components/NavBar/Navbar';

const RegisterLogin=()=>{
    
    const history=useHistory();
    const history1 = useHistory();

    const [ user1, setUser1] = useState({
        email:"",
        password:""
    },[])
    //FOR WHEN WE TYPE SOMETHING IN INPUT BOX
    const handleLogin = event => {
        const { name, value } = event.target
       //event.preventDefault();
        setUser1({
            ...user1,
            [name]: value
        })
    }
  
    //SENDING AXIOS REQUEST
    const login = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/api/home/login", user1)
        .then(res => {
            alert(res.data.firstName)
            //setLoginUser(res.data.user)
            alert(res.data.roles)
            console.log(res.data)
            console.log(res)
            if(res.data.roles.length===1)
                {
                    history1.push("/"+res.data.roles[0].roleName)
                    return;
                    //alert(res.data.roles[0])
                }
        })
    }
    //register
    const [user,setUser]=useState({
        firstName:"",
        lastName:"",
        userName:"",
        address:"",
        contactNumber:"",
        email:"",
        password:"",
        confirmpassword:""
    })
    const handlechange=event=>{
        const {name,value}=event.target
        setUser({
            ...user,[name]:value
        })
    }
    const register=()=>{
        const {firstName,lastName,userName,address,contactNumber,email,password,confirmpassword}=user
        if(firstName&& lastName && userName && address && contactNumber && email && password && (password===confirmpassword)){
            axios.post("http://localhost:8080/api/home",user)
            .then(resp=>{
                alert(resp.data)
                history.push(toggle(true))
            })
        }else{
            alert("invalid")
        }  
    }
    

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tdv9twp', 'template_ura60oa', e.target, 'UkQ9ZabRalHqMJiO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
    const [signIn, toggle] = React.useState(false);
    return(
       <>
       <Navbar/>
       
        
        
        <Components.Container>
            
             <Components.SignUpContainer signinIn={signIn}>
                 <Components.Form onSubmit={sendEmail}>
                     <Components.Title>Create Account</Components.Title>
                     <Components.Input type='text' name="firstName" value={user.firstName} placeholder='Enter your First Name' onChange={handlechange}/>
                     <Components.Input type='text' name="lastName" value={user.lastName} placeholder='Enter your last Name' onChange={handlechange} />
                     <Components.Input type='text' name="userName" value={user.userName} placeholder='Enter your User Name' onChange={handlechange} />
                     <Components.Input type='text' name="address" value={user.address} placeholder='Enter your Address' onChange={handlechange} />
                     <Components.Input type='text' name="contactNumber" value={user.contactNumber} placeholder='Enter your Contact Number' onChange={handlechange}/>
                     <Components.Input type='email' name="email" value={user.email} placeholder='Enter your Email' onChange={handlechange} />
                     <Components.Input type='password' name="password" value={user.password} placeholder='Enter your Password' onChange={handlechange} /> 
                     <Components.Input type='password' name="confirmpassword" value={user.confirmpassword} placeholder='Confirm Password' onChange={handlechange}/> 
                     <Components.Button onClick={register}>Register</Components.Button><br/>
                     {/* <Components.Button onClick={()=>history.push("/")}>Home</Components.Button> */}
                     <img src={reg} alt="signin" width='500px' height='250px'/>
                 </Components.Form>
             </Components.SignUpContainer>

             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form onSubmit={login}>
                      <Components.Title>Login</Components.Title>
                      <Components.Input type='email' name="email" value={user1.email} onChange={handleLogin} placeholder="Enter your Email" />
                      <Components.Input type='password' name="password" value={user1.password} onChange={handleLogin}  placeholder="Enter your Password" />
                      <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                      <Components.Button onClick={login}>Login</Components.Button><br/>
                      {/* <Components.Button onClick={()=>history.push("/")}>Home</Components.Button> */}
                      <img src={log} alt="register" width='500px'/>
                  </Components.Form>
             </Components.SignInContainer>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                 <Components.LeftOverlayPanel signinIn={signIn}>
                     <Components.Title>Welcome Back!</Components.Title>
                     <Components.Paragraph>
                         To keep connected with us please login with your personal info
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>
                         Login
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title>Hello, Friend!</Components.Title>
                       <Components.Paragraph>
                           Enter Your personal details and start journey with us
                       </Components.Paragraph>
                           <Components.GhostButton onClick={() => toggle(false)}>
                               Register
                           </Components.GhostButton> 
                     </Components.RightOverlayPanel>
                 </Components.Overlay>
             </Components.OverlayContainer>
         </Components.Container>
         </> 
    )
}
export default RegisterLogin;
