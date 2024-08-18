import React,{ useState} from "react";
import "./contact.css";
export default function Contact() {
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        mobile: "",
        summary: ""
      });
    
      const [errors, setErrors] = useState({});
  const handler = (event) => {
    event.preventDefault();
    
    const newErrors = {};
    
    if (!formData.fname) {
      newErrors.fname = "First name is required";
    }

    if (!formData.lname) {
      newErrors.lname = "Last name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.mobile) {
        newErrors.mobile = "Mobile number is required";
      } else if (formData.mobile.length !== 10) {
        newErrors.mobile = "Mobile number should be 10 digits";
      }
      if (!formData.summary) {
        newErrors.summary = "Summary is required";
      }
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
      } else {
        alert("Form Submitted Successfully");
        // Clear the form or send data to backend here
      }  

  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <>
      <div className="contact">
        <div className="container pb-5">
          <form
            className="contactform form-floating col-lg-7 col-md-7 col-sm-10 mt-3 pb-4"
            onSubmit={handler}
          >
            <h1 className="head pt-5 mb-5">Contact Us</h1>
            <hr />
            <h6 className="form-label ms-5">Full Name <span> *</span></h6>

            <div className="input-container">
              <input
                type="text"
                className="form-group ps-2"
                placeholder="First Name"
                id="fname"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
              />
              <input
                type="text"
                className="form-group ps-2"
                placeholder="Last Name"
                id="lname"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
              />
            </div><br/>
            {errors.fname && <span className="error col-md-6">*{errors.fname}</span>}{errors.lname && <span className="error1 col-md-6">*{errors.lname}</span>}
            <h6 className="form-label ms-5 mb-3 mt-5">E-mail <span> *</span></h6>
            <input type="email" class="form-controls col-md-6" id="Email1" placeholder="ex: example@example.com" aria-describedby="emailHelp" value={formData.email} onChange={handleChange} /><br/>
            {errors.email && <span className="error">*{errors.email}</span>}
            <h6 className="form-label ms-5 mb-3 mt-5">Mobile <span> *</span></h6>
            <input type="number" class="form-controls" id="mobile" placeholder="Enter Mobile Number" aria-describedby="emailHelp"  value={formData.mobile} onChange={handleChange}/><br/>
            {errors.mobile && <span className="error">*{errors.mobile}</span>}
            <h6 className="form-label ms-5 mb-3 mt-5">Summery <span> *</span></h6>
            <textarea id="w3review" className="form-label col-md-10 " value={formData.summary} onChange={handleChange} name="w3review" ></textarea><br/>
            {errors.summary && <span className="error">*{errors.summary}</span>}
            <hr/>
            <center>

            <button className="btn submit mt-3" >Submit</button>
            </center>
          </form>
        </div>
      </div>
    </>
  );
}
