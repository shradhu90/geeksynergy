import React, { useState, useEffect } from 'react'

import { Link, Outlet } from "react-router-dom";
export default function Dashboard() {
    

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light  justify-content-center">
  <Link to="info" className='btn btn-primary m-4'>Company Info</Link>
  
    
</nav>

        <div className='container mt-5'>
        <Outlet/>
            </div>

        </>
    )
}
