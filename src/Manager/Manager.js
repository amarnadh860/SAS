import React from 'react';
import { useState,useEffect } from 'react';

const addToDatabase = (props)=>{
    let db = JSON.parse(localStorage.getItem('AcceptedData')) || []
    db.push(props)
    localStorage.setItem('AcceptedData',JSON.stringify(db))
    removeFromDatabase(props)
}

const removeFromDatabase = (props)=>{
    const sd = JSON.parse(localStorage.getItem('studentForm'))
    const filteredsd = sd.filter((detail)=>{
        if(JSON.stringify(detail) !== JSON.stringify(props))
            return detail
    })
    localStorage.setItem('studentForm',JSON.stringify(filteredsd))
}

const Mgr = (props)=>{
    const [fullDetails,setFullDetails] = useState({showFull:false})
    const {aadhar,firstname,lastname,eamcet,email,mobile} = props

   if(fullDetails){
    return (<div className='short-details'>
        <span><strong onClick ={()=>{setFullDetails((prevState)=>{return !fullDetails})}}>{aadhar}</strong></span>
        <span>{firstname+' '+lastname}</span>
        <span>{eamcet}</span>
        <span>{email}</span>
        <span>{mobile}</span>
        

    </div>)}
    else
    return (<div className='full-details'>
              <span onClick = {()=>{setFullDetails((prevState)=>{return !fullDetails})}}>&#8678; hold</span>
              <div className='container'>
                { Object.keys(props).map((key)=><p><span>{key}</span>:     {props[key]}</p>)}
                <div className= 'decision-buttons'>
                    <input type = 'button' className='accept-button' value = 'accept' name = 'accept' onClick={()=>addToDatabase(props)}></input>
                    <input type = 'button' className='reject-button' value = 'reject' name = 'reject' onClick={()=>removeFromDatabase(props)}></input>
                </div>
             </div>
          </div>)
    
    
}

const nameSearch = (rank,sd)=>{
    if(Number(rank)>0)
    return (sd.filter(  (student)=>rank>=Number(student.eamcet) ))
    return sd
}

const Manager = ()=>{
    const sd = JSON.parse(localStorage.getItem('studentForm')) || []
    let filteredDetails=sd
    const [details,setDetails] = useState(filteredDetails)

    return(
        <div className = 'manager'>
        <h1>Amarnadh Engineering College</h1>
        <div id = 'searches'>
        
            <p>Search Rank <input type = 'number' placeholder='search rank' onInput={(event)=>{
                setDetails(nameSearch(event.target.value,sd))
             }
         }></input> </p>
         </div>

         {
             (JSON.stringify(details)!=='[]')?(
            <div className='applications'>
            {   

               details.map((student)=> <div><Mgr {...student}/><br/></div> )

            }
          
          </div>):(<p>No records present</p>)
         }
    
        </div>
        );
    
}
export default Manager;