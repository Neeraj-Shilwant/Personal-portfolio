import React from 'react'
import './Contact.css'
import { db } from '../firebase';
import { useState } from 'react'
export default function Contact() {

    const [name,setname] = useState("");
    const [email,setemail] = useState("");
    const [subject,setsubject] = useState("");
    const [msg,setmsg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('contacts').add({
            name: name,
            email: email,
            subject : subject,
            message : msg
        })
        .then(()=>{
            alert('Message successfully submitted');
        })
        .catch((error) =>{
            alert(error.message)
        })

        setname('');
        setemail('');
        setmsg('');
        setsubject('');
    }
  return (
   <>
   <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2 class="u-custom-font u-font-montserrat u-text u-text-black u-text-default u-text-1" style={{marginLeft: "479px",fontWeight: 'bold'}}>Contact</h2>
        </div>

        <div className="row contact-info">

          <div className="col-md-4">
            <div className="contact-address">
              <i className="bi bi-geo-alt"></i>
              <h3>Address</h3>
              <address>Pimpri, Pune-411017</address>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-phone">
              <i className="bi bi-phone"></i>
              <h3>Phone Number</h3>
              <p>+91 705-703-5174</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-email">
              <i className="bi bi-envelope"></i>
              <h3>Email</h3>
              <p>neershil67@gmail.com</p>
            </div>
          </div>

        </div>

        <div className="form">
          <form action="/" method="post" onSubmit={handleSubmit} className="php-email-form">
            <div className="row">
              <div className="col-md-6 form-group">
                <input type="text" value={name} onChange={(e)=> setname(e.target.value)} name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
              </div>
              <div className="col-md-6 form-group mt-3 mt-md-0">
                <input type="email" value={email} onChange={(e)=> setemail(e.target.value)} className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"/>
              </div>
            </div>
            <div className="form-group mt-3">
              <input type="text" value={subject} onChange={(e)=> setsubject(e.target.value)} className="form-control" name="subject" id="subject" placeholder="Subject" required/>
            </div>
            <div className="form-group mt-3">
              <textarea className="form-control" value={msg} onChange={(e)=> setmsg(e.target.value)} name="message" rows="5" placeholder="Message" required></textarea>
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit" >Send Message</button></div>
          </form>
        </div>

      </div>
    </section>
   
   </>
  )
}
