import React from 'react'
import Navbar from './Navbar'

const Delete = () => {
  return (
    <div>
<Navbar/>

      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div className="row g-3">

<h1 className="text-center">Delete Baby</h1>

              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                <label htmlFor="" className="form-label">Name</label>
                <input type="text" className="form-control" />

              </div>

              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


          <button className="btn btn-success">Delete</button>

              </div>



            </div>




          </div>
        </div>
      </div>


    </div>
  )
}

export default Delete