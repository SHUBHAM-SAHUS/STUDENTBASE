import React from 'react'
import {Link} from "react-router-dom"
import { Avatar } from './Avatar'
export const Student = () => {
    return (
        <>

  
  <div className="container">
    <div className="py-4">
      <div className="row">
      {
          new Array(12).fill("").map((val,index)=>{
              return(
                  <>

<div className="col-lg-3 col-md-6 mb-4" key="PUT_HERE_KEY">
  <div className="card shadow text-center py-4">
    
    <div className="card-body">
    <Avatar urL={`https://i.pravatar.cc/150?img=${index+1}`} />
      <h5 className="card-title mb-0 ">Student Name</h5>
      <p className="text-muted small">Student E-mail</p>
      <Link to={`/Students/${val.address}`} className="btn btn-primary btn-profile">
        View Profile
      </Link>
      <button className="btn btn-edit">
        <span className="material-icons">delete_outline</span>
      </button>
    </div>
  </div>
</div>
                  </>
              )
          })
      }
      </div>
    </div>
  </div>
        </>
    )
}

