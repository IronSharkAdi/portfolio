import React from 'react'

function Services() {
    return (
        <div>
      <section id="services" style={{backgroundColor: '#eee' }}>
      <div className="container">
        <div className="row services">
          <div className="col-lg-12">
            <div className="row">
              <div className="container py-5">
            <h2 className="heading">Skills</h2>
                <div className="row">
                  <div className="col-lg-6">
                    <p className="lead"></p>
                    {/* <p>My main area of expertise are in MERN stack development and React.js with firebase database development</p> */}
                    <p style={{fontWeight:"regular" , fontSize:"20px"}}>I produce elegant , performant and accessible digital experiences with high quality responsive websites and web apps and write well optimized clean code and smooth experience for users.
                    <br/>
                     </p>
                     <p style={{fontWeight:"regular" , fontSize:"18px"}}>
                    I use modern javascript framework like  
Reactjs , styling library like Bootstrap and 
Material ui , database - Mysql, MongoDB and 
Firebase . For back-end I do MVC 
development with nodejs framework Expressjs.
I develop crtoss-platform app/software dev
with React Native and Electronjs.</p>
                  </div>
                  <div className="col-lg-5 mx-auto">
                    <div id="circle" ></div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 text-center">
                <div className="box">
                  <h5>Front-end :</h5>
                  <hr/>
                  <h6 >Html</h6>
                  <h6>Css</h6>
                  <h6>JavaScript</h6>
                  <h6>Jquery</h6>
                  <h6>Bootstrap</h6>
                  <h6>React.js</h6>
                  <h6>Electronjs</h6>
                  <h6>Nextjs</h6>
                  <h6>Material Ui</h6>
                  <h6>Redux</h6>
                </div>
              </div>
              <div className="col-md-3 text-center">
                <div className="box ">
                  <h5>Back-end :</h5>
                  <hr/>
                  <h6>JavaScript</h6>
                  <h6>Node.js</h6>
                  <h6>Express.js</h6>
                  <h6>Django</h6>
                  <h6>Flask</h6>
                  <h6>Python</h6>
                  <h6>Json</h6>
                  <h6>MongoDB</h6>
                  <h6>Mysql</h6>
                  <h6>Stripe</h6>
                  <h6>Firebase</h6>
                  <h6>Electronjs</h6>
                </div>
              </div>
              <div className="col-md-3 text-center">
                <div className="box ">
                  <h5>App dev :</h5>
                  <hr/>
                  <h6>React Native </h6> <br/>
                  <h6>Android Studio </h6>

                </div>
              </div>
              <div className="col-md-3 text-center">
                <div className="box ">
                  <h5>Others:</h5>
                  <hr/>
                  <h6>C++ (for competitive programming)</h6> <br/>
                  <h6>Unreal Engine 4</h6> <br/>
                  <h6>C# (.net)</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    )
}

export default Services
