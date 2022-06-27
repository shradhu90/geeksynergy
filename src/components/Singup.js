import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
export default function Singup() {
    let location = useNavigate("");
    let[data, setData] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [number, setNumber] = useState('');
    const [profession, setProfession] = useState('');
    const data1 = {
        name : name,
        email: email,
        number: number,
        password: password,
        profession: profession
    }
    let submit = (e) => {
        e.preventDefault();
        setData([...data,data1]);
        localStorage.setItem("todos", JSON.stringify(data1))
        if(name && email && password && number && profession){
            let myData = JSON.parse(localStorage.getItem("todos"));
            if(myData){
                location("../login")
            }
        }else{
            alert("Fill All The Input Fields")
        }
    }
    return (
        <div className='container mt-5'>
            <form onSubmit={submit}>
                <div className='form-row'>
                    <div className="form-group col-md-6">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} id="name" placeholder="Name" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="number">Mobile Number</label>
                        <input type="tel" className="form-control" value={number} onChange={(e) => setNumber(e.target.value)} id="number" placeholder="Mobile Number" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} id="email" placeholder="Email" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Password</label>
                        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} id="inputPassword4" placeholder="Password" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputState">Profession</label>
                        <select id="inputState" value={profession} onChange={(e) => setProfession(e.target.value)} className="form-control">
                            <option selected>Choose...</option>
                            <option>FrontEnd Developer</option>
                            <option>Backend Developer</option>
                            <option>FullStack Developer</option>
                        </select>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
            
        </div>
    )
}