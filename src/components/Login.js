import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
export default function Login() {
 let nav = useNavigate('');
    const [logMail, setLogEmail] = useState('');
    const [logPassword, setLogPassword] = useState('');
    let logData = JSON.parse(localStorage.getItem("todos"));
    let submit = (e) =>{
        e.preventDefault();
console.log(logData.email);
if(logMail == logData.email && logPassword == logData.password){
nav("../dashboard");
}else{
    alert("Invelid Credentials")
}
    }
  return (
    <div className='container'>
        <form onSubmit={submit}>     
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" value={logMail} onChange={(e) =>  setLogEmail(e.target.value) } id="email" placeholder="Email" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Password</label>
                        <input type="password" className="form-control" value={logPassword} onChange={(e) => setLogPassword(e.target.value)} id="inputPassword4" placeholder="Password" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
    </div>
  )
}
