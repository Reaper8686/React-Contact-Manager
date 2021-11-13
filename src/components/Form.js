import { useState } from "react";


function Form(props){
    let [inputName,setInputName]  = useState("");
    let [inputEmail,setInputEmail] = useState("")

    const handleName = (e) => {
        setInputName(e.target.value);
    }

    const handleEmail = (e) => {
        setInputEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        inputName==="" || inputEmail===""? alert("null values"):props.add(inputName,inputEmail);
        setInputEmail("");
        setInputName("");
        console.log(inputName);
        console.log(inputEmail);
    }
    return(
        <div className="mt-3 mb-3 shadow-sm p-3 mb-5 bg-body rounded">
            <h2 className="mt-3 mb-3">Add Contact</h2>
            <form onSubmit = {handleSubmit}> 
                <label className="mb-2 fw-bold">Name</label><br/>
                <input className="mb-2 w-50 p-1" type="text" placeholder="Enter Name" value={inputName} onChange={handleName} /><br/>
                <label className="mb-2 fw-bold">Email</label><br/>
                <input className="mb-2 w-50 p-1" type="email" placeholder="Enter Email" value={inputEmail} onChange={handleEmail} /><br/>
                <button className="fw-bold border border-white rounded p-2 text-light bg-info">Submit</button>
            </form>
        </div>
    );
}

export default Form;