import React from 'react';

import "./AboutDevelopers.css";

import { FaGithub, FaPeopleCarry,FaInstagram,FaLinkedin} from "react-icons/fa"

function AboutDevelopers(props) {
    return (
        <div className='container-fluid ' style={{marginTop:"100px"}}>
            <div className='p1-container'>
               
               <div className='row text-center'>
                   <div className='col-lg-6'>
                   <FaPeopleCarry size={65} className='text-primary' />
                   </div>
                   <div className='col-lg-6'>
                   <h3 className='text-center text-primary'>About Us</h3>
                   <hr style={{ width: "40%", margin: "auto", color: "blue" }}></hr>
            <hr style={{ width: "40%", margin: "auto", color: "blue" }}></hr>
            <hr style={{ width: "40%", margin: "auto", color: "blue" }}></hr>
            <hr style={{ width: "40%", margin: "auto", color: "blue" }}></hr>
                   </div>
               </div>
           </div>
            
            
            
            <div className='container row team-container text-center'>
                <div className='col-lg-3 col-md-6 p-3' style={{border:"1px solid black", borderRadius:"4px",background:"cyan"}}>
                    <h5>Swapnil Kumbhare</h5>
                    <FaInstagram size={27}/>
                    <FaLinkedin size={27}/>
                    <FaGithub size={27}/>
                </div>
                <div className='col-lg-3 col-md-6 p-3' style={{border:"1px solid black", borderRadius:"4px",background:"yellow"}}>
                <h5>Sanket Ingale</h5>
                <FaInstagram size={27}/>
                    <FaLinkedin size={27}/>
                    <FaGithub size={27}/>
                </div>
                <div className='col-lg-3 col-md-6 p-3' style={{border:"1px solid black", borderRadius:"4px",background:"lightgreen"}}>
                <h5>Shashank Juwar</h5>
                <FaInstagram size={27}/>
                    <FaLinkedin size={27}/>
                    <FaGithub size={27}/>
                </div>
                <div className='col-lg-3 col-md-6 p-3' style={{border:"1px solid black", borderRadius:"4px",background:"orange"}}>
                <h5>Vedant Kapse</h5>
                <FaInstagram size={27}/>
                    <FaLinkedin size={27}/>
                    <FaGithub size={27}/>
                </div>
            </div>
        </div>
    );
}

export default AboutDevelopers;

