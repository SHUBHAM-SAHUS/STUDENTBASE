import React,{useState} from 'react'
import {useParams} from "react-router-dom";
export const StudentForm = () => {
 const [student,setstudent] =useState({
     name:"",
     email:"",
     phone:"",
     standard:"",
     adderess1:"",
     address2:""
 });


 const frmsubmit=(e)=>{
  e.preventDefault();
if(id){
    alert("update")
}
else{
    alert("nhi hua");
}

 }


 const Oninput=(e)=>{
     setstudent({...student,[e.target.name]:e.target.value});
     
 }

    const {id} = useParams();
    return (
        <>



    

    <div className="container">
  <div className="py-4">
    <div className="row">
      <div className="col-md-10 mx-auto">
        <div className="card card-body shadow">
          <form onSubmit={frmsubmit}>
            <div className="form-row form-group mb-4">
              <div className="col-md-6">
                <input
                  type="text"
                
                  placeholder="Enter Student Name"
                  name="name"
                  value={student.name}
                  className="form-control"
                  onChange={Oninput}
                />
              </div>
              <div className="col-md-6">
                <input
                  placeholder="Enter Student E-mail"
                  name="email"
                  value=""
                  className="form-control"
                  onChange={Oninput}
                />
              </div>
            </div>
            <div className="form-row form-group mb-4">
              <div className="col-md-6">
                <input
            
                  type="text"
                  placeholder="Enter Student Phone"
                  name="phone"
                  value={student.phone}
                  className="form-control"
                  onChange={Oninput}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Enter Student Class"
                  name="standard"
                  value={student.standard}
                  className="form-control"
                  onChange={Oninput}
                />
              </div>
            </div>
            <div className="form-row form-group">
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Enter Student Address Line 1"
                  name="address1"
                  value={student.address1}
                  className="form-control"
                  onChange={Oninput}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Enter Student Line 2"
                  name="address2"
                  value={student.address2}
                  className="form-control"
                  onChange={Oninput}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
                      { id ? "update student"  : "Add Student" }             
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
        
        </>
    )
}


