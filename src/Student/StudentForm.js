import React from 'react';
import {v4 as uuid} from 'uuid';
export default class StudentForm extends React.Component{
state = {   
            firstname:'',
            lastname:'',
            fathername:'',
            email:'',
            mobile:'',
            eamcet:'',
            aadhar:'',
            street:'',
            village:'',
            town:'',
            state:'',
            pincode:''
}

invalidTextField = (word,name)=>{
    const errorID = name+'Error';
    if( !/^[a-zA-Z]*$/.test(word)){
        document.getElementById(errorID).innerHTML = `invalid ${name} does not allow spaces or symbols`
        return false
    }
    else if(word.length<3){
        document.getElementById(errorID).innerHTML = `invalid ${name} too short`
        return false
    }
    else if(word.length>30){
        document.getElementById(errorID).innerHTML = `invalid ${name} too long`
        return false
    }

     else{
        document.getElementById(errorID).innerHTML = ''
        return true
     } 
}

numberHandlerField = (num,name,size = 0)=>{
    
    switch(name){
        
        case 'Mobile':
        case 'Aadhar':
        case 'Pincode':
            {   
                console.log('in mobile')
                const errorID = name+'Error'
                if(!/^[0-9]*$/.test(num))
                {
                     document.getElementById(errorID).innerHTML = `invalid ${name} only numbers are allowed`
                    return false
                }

                 else if(num.length!==size)
                 {
                    document.getElementById(errorID).innerHTML = `check your ${name} once `
                    return false
                 }
                 else
                 {
                    document.getElementById(errorID).innerHTML = ''
                    return true
                 }
            
            }
            
        
        case 'Eamcet':
            {
                const errorID = name+'Error'
                if(!/^[0-9]*$/.test(num))
                {
                     document.getElementById(errorID).innerHTML = `invalid ${name} only numbers are allowed`
                    return false
                }
                 else if(parseInt(num)<=0 || parseInt(num)>200000)
                 {
                    document.getElementById(errorID).innerHTML = `enter valid ${name} rank(0-200000) `
                    return false
                 }
                 else
                 {
                    document.getElementById(errorID).innerHTML = ''
                    return true
                 }
            }

        }
    }

formHandler = (event) =>{
    
    switch(event.target.name){
    
        case 'Firstname':
            const firstname = (event.target.value)
                
            if(this.invalidTextField(firstname,event.target.name))
            {
                this.setState(()=>({
                    ...this.state,
                    firstname
                }))
            }
            break
            
        case 'Lastname':
            const lastname = (event.target.value)
                    
            if(this.invalidTextField(lastname,event.target.name))
             {
                this.setState(()=>({
                    ...this.state,
                    lastname
                }))
            }
            break
       
        case 'Father':
            const fathername = event.target.value
                
            if(this.invalidTextField(fathername,event.target.name))
            {
                this.setState(()=>({
                    ...this.state,
                    fathername
                }))
            }
            break
        
        case 'Email':
            const email = event.target.value
            const regex = /[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/
            if(regex.test(email))
            {
                document.getElementById('EmailError').innerHTML = ''
                this.setState(()=>({
                    ...this.state,
                    email
                 }))
            }
            else{
                document.getElementById('EmailError').innerHTML = 'enter a valid email'
            }
            break

        case 'Mobile':
            const mobile = event.target.value
            if(this.numberHandlerField(mobile,event.target.name,10))
            {   
                this.setState(()=>({
                    ...this.state,
                    mobile
                }))
            }
            break
        
        case 'Eamcet':
            const eamcet = event.target.value
            if(this.numberHandlerField(eamcet,event.target.name))
            {
                this.setState(()=>({
                    ...this.state,
                    eamcet
                }))
            }
            break
        
        case 'Aadhar':
            const aadhar = event.target.value
            if(this.numberHandlerField(aadhar,event.target.name,12))
            {
                this.setState(()=>({
                    ...this.state,
                    aadhar
                }))
            }
            break

        case 'Street':
            const street = event.target.value
                
            if(this.invalidTextField(street,event.target.name))
            {
                this.setState(()=>({
                    ...this.state,
                    street
                }))
            }
            break
        
        case 'Village':
            const village = event.target.value
                    
            if(this.invalidTextField(village,event.target.name))
            {
                this.setState(()=>({
                    ...this.state,
                        village
                  }))
            }
            break

        case 'Town':
            const town = event.target.value
                
            if(this.invalidTextField(town,event.target.name))
            {
                this.setState(()=>({
                    ...this.state,
                       town
                }))
            }
            break

        case 'State':
            const state = event.target.value
            if(state != 'placeholder')
            {
              document.getElementById('StateError').innerHTML = ''
              this.setState(()=>({
                  ...this.state,
                  state
                }))
           }
           else{
               document.getElementById('StateError').innerHTML = 'selecting a state is required'
           }
            break

        case 'Pincode':
            const pincode = event.target.value
            if(this.numberHandlerField(pincode,event.target.name,6))
            {
                this.setState(()=>({
                    ...this.state,
                    pincode
                }))
            }
            break
    }
}

submitHandler = (event)=>{

    event.preventDefault()
    const items = this.state
    const errors=Object.keys(items).map((key)=>{
        if(!items[key])
        return(`${key} is left empty fill a valid entry to proceed`)
    })
    const filterederrors = errors.filter((error)=>{
        return error!==undefined
    })
    console.log('errors',filterederrors)
    if(filterederrors.length!==0)
    {
        let estr=''
        errors.map((error)=>{
            if(error!== undefined)
                estr+=error+'\n'
        })
        estr?window.alert(estr):false
    }
    else{
         const info = JSON.parse(localStorage.getItem('studentForm'))?JSON.parse(localStorage.getItem('studentForm')):[]
         info.push(this.state)
         localStorage.setItem('studentForm',JSON.stringify(info))
         console.log('localStorage updated!',localStorage.getItem('studentForm'))
        }
    
}

render(){
    const INDIAN_STATES = [
                "Andhra Pradesh",
                "Arunachal Pradesh",
                "Assam",
                "Bihar",
                "Chhattisgarh",
                "Goa",
                "Gujarat",
                "Haryana",
                "Himachal Pradesh",
                "Jammu and Kashmir",
                "Jharkhand",
                "Karnataka",
                "Kerala",
                "Madhya Pradesh",
                "Maharashtra",
                "Manipur",
                "Meghalaya",
                "Mizoram",
                "Nagaland",
                "Odisha",
                "Punjab",
                "Rajasthan",
                "Sikkim",
                "Tamil Nadu",
                "Telangana",
                "Tripura",
                "Uttarakhand",
                "Uttar Pradesh",
                "West Bengal",
                "Andaman and Nicobar Islands",
                "Chandigarh",
                "Dadra and Nagar Haveli",
                "Daman and Diu",
                "Delhi",
                "Lakshadweep",
                "Puducherry"]

    return (
        <div id = 'student-form'>
            <h1>Apply for AEC</h1>
            <form id = 'studentDetails' onSubmit={this.submitHandler}>
                <fieldset>
                    <legend>Application Form</legend>
                    <div className='field'>
                        <p>Firstname:<input type = 'text' name = 'Firstname' id = 'firstname' className= 'form-tag'  onChange = {this.formHandler} /></p>
                        <p id = 'FirstnameError' className='errors'></p>
                    </div>
                    <div className='field'>
                        <p>Lastname:<input type = 'text' name = 'Lastname' id = 'lastname' className= 'form-tag'  onChange = {this.formHandler} /></p>
                        <p id = 'LastnameError' className='errors'></p>
                    </div>
                    <div className='field' >
                         <p>Fathername:<input type = 'text' name = 'Father' id = 'father' className='form-tag' onChange = {this.formHandler} /></p>
                         <p id = 'FatherError' className='errors'></p>
                    </div>
                    <div className='field' >
                        <p>Email:<input type = 'email' name = 'Email' id = 'email' className= 'form-tag' onChange = {this.formHandler} /></p>
                        <p id = 'EmailError' className='errors'></p>
                    </div>
                    <div className='field'>
                        <p>Mobile:<input type = 'text' name = 'Mobile' id = 'mobile' className='form-tag' onChange = {this.formHandler} /></p>
                        <p id = 'MobileError' className='errors'></p>
                    </div>
                    <div className='field'>
                        <p>Eamcet Rank:<input type = 'text' name = 'Eamcet' id = 'eamcet' className= 'form-tag' onChange = {this.formHandler} /></p>
                        <p id = 'EamcetError' className='errors'></p>
                    </div>
                    <div className='field'>
                        <p>Aadhar no.:<input type = 'text' name = 'Aadhar' id = 'aadhar' className= 'form-tag' onChange = {this.formHandler} /></p>
                        <p id = 'AadharError' className='errors'></p>
                    </div>
                    <div className='field'>
                        <p>Street:<input type = 'text' name = 'Street' id = 'street' className='form-tag' onChange = {this.formHandler} /></p>
                        <p id = 'StreetError' className='errors'></p>
                    </div>
                    <div className='field'>
                        <p>Village:<input type = 'text' name = 'Village' id = 'village' className='form-tag' onChange = {this.formHandler} /></p>
                        <p id = 'VillageError' className='errors'></p>
                    </div>
                    <div className='field'>
                        <p>Town:<input type = 'text' name = 'Town' id = 'town' className='form-tag' onChange = {this.formHandler} /></p>
                        <p id = 'TownError' className='errors'></p>
                    </div>
                    <div className='field'>
                        <p>State:<select name = 'State' id = 'state' className='form-tag' onChange= {this.formHandler} >
                            <option value='placeholder'>-------- Select State -------</option>
                             {
                                 INDIAN_STATES.map((STATE)=>{
                                   return <option key={STATE} value={STATE}>{STATE}</option>
                               })

                              }
                          </select>
                         </p>
                         <p id = 'StateError' className='errors'></p>
                    </div>
                    <div className='field'>
                        <p>Pincode:<input type = 'text' name = 'Pincode' id = 'pincode' className='form-tag' onChange = {this.formHandler} /></p>
                        <p id = 'PincodeError' className='errors'></p>
                    </div>

                </fieldset>
                <input type = 'submit' id= 'submit' name = 'submit' />
            </form>
        </div>
    );
}
}