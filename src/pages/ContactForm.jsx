import React, { useState } from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import axios from 'axios'


function ContactForm() {
  const url = 'https://mypersonalmailserverisa.herokuapp.com/'
  const [data, setData] = useState({ name : '', from : 'ironshark', email : '' , msg : ''});
  const sendmail = async (e) =>{
      e.preventDefault();
      alert("Sending Email.....")
      await axios.post(url , data)
      alert("Thanks for contacting , I will be responding soon")
      setData({ ...data , email : '' })
      setData({ ...data , name : ''})
      setData({ ...data , msg : ''})
  }
    return (
        <div>
            <section id="contact" style={{backgroundColor: '#fff'}} className="text-page pb-4"> 
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="heading">Wanna get in touch ?</h2>

  
            <div className="row">
              <div className="col-lg-6">
                <form  onSubmit={sendmail}  className="contact-form">
                  <div className="controls">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label for="name">Your name *</label>
                          <input type="text" name="name"  value={data.name} onChange={(e) => setData({ ...data , name : e.target.value})} id="name" placeholder="Enter your firstname" required="required" className="form-control"/>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="surname">Your email *</label>
                      <input type="email" name="email" id="email" value={data.email} onChange={(e) => setData({ ...data ,email : e.target.value})} placeholder="Enter your  email" required="required" className="form-control"/>
                    </div>
                    <div className="form-group">
                      <label for="surname">Your message *</label>
                      <textarea rows="4" value={data.msg} onChange={(e) => setData({ ...data , msg : e.target.value})} name="message" id="message" placeholder="Enter your message" required="required" className="form-control"></textarea>
                    </div>
                    <div className="text-center">
                      <input type="submit" onclick="handleSubmit2()" value="Send message" className="btn btn-outline-primary btn-block"/>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-6">
                <p>Lets get in touch and make a great project together</p>
                <p>Always seeking for opportunities . I try to bring a great experience to the table for users .</p>
                <p className="social"><a href="https://www.facebook.com/marzukrahman.adi/" className="instagram"> <FacebookIcon/> </a><a href="https://www.instagram.com/marxuk_rahman_adi/" className="instagram"> <InstagramIcon/>  </a>
                <a href="https://github.com/IronSharkAdi" className="instagram"> <GitHubIcon/>  </a>
                <a href="https://twitter.com/iron_adi" className="instagram"> <TwitterIcon/>  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    )
}

export default ContactForm
