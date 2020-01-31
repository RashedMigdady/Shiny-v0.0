import React, { Component } from 'react'



class Register extends Component{
    state={
        firstName:'',
        lastName:'',
        phone:'',
        HourlyPrice:'',
        email:'',
        yearsOfExperience:'',
        Address:'Amman',
        ProfessionType:'',
        bio:'',
        reports:[]
    }
    
    render(){
        return(
            <>
            <button className="Register">Join Now</button>



            </>
        );
    }
}

export default Register