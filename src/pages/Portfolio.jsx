import React, { useEffect, useState } from 'react'

function Portfolio() {
  const website = [
    {
      name : "Static Website",
      link : "https://isservices.netlify.app/",
      imageSrc : "img/service.png",
      alt : "isservice",
      Title:"Static Website"
    }
  ]
  const webapp = [
    {
      name : "Share , upload and see beautiful plants (Ai , ML)",
      link : "https://plantgallery.netlify.app/",
      imageSrc : "img/pg.png",
      alt : "Plants Gallery",
      Title:"Plants Gallery"
    },
    {
      name : "Real time payment system and verification",
      link : "https://isamazonclone.netlify.app/",
      imageSrc : "img/amazon.png",
      alt : "Amazon clone",
      Title:"Amazon Clone"
    },
    {
      name : "To DO webapp",
      link : "https://istodo.netlify.app/",
      imageSrc : "img/todo.png",
      alt : "Todos",
      Title:"To Do app"
    },
    {
      name : "Code Editor with hot reload",
      link : "https://iscodeeditor.netlify.app/",
      imageSrc : "img/ce.png",
      alt : "Code Editor",
      Title:"Code Editor"
    },
  ]
  const app = [

  ]
  const software =[
    {
      name : "Screen Recorder for windows",
      link : "https://mega.nz/folder/ENsWnIAD#QVkoD0mJhZrccLljsoaQvw",
      imageSrc : "img/sr.png",
      alt : "isservice",
      Title:"Screen Recorder"
    }
  ]
  const [projectSelection  , setProjectSelection] = useState([])
  const [ all_color , setAll_color ] = useState("black")
  const [ website_color , setWebsite_color ] = useState("black")
  const [ webapp_color , setWebapp_color ] = useState("black")
  const [ software_color , setSoftware_color ] = useState("black")
  const [ app_color , setApp_color ] = useState("black")

  const  showAll = () => {
    var webb = new Array()
    webapp.map(web =>{
      webb.push(web)
    })
    website.map(web =>{
      webb.push(web)
    })
    software.map(web =>{
      webb.push(web)
    })

    setProjectSelection(webb)
    console.log(projectSelection)
    setAll_color("aqua")
    setWebsite_color("black")
    setWebapp_color("black")
    setSoftware_color("black")
    setApp_color("black")
  }

  useEffect(() => {
      showAll()
  }, []);


  const showWebsite = () =>{
      setProjectSelection([])
      var webb = new Array()
      website.map(web =>{
        webb.push(web)
      })
      setProjectSelection(webb)
      setAll_color("black")
      setWebsite_color("aqua")
      setWebapp_color("black")
      setSoftware_color("black")
      setApp_color("black")
  }
  const showWebapp = () =>{
    setProjectSelection([])
    var webb = new Array()
    webapp.map(web =>{
      webb.push(web)
    })
    setProjectSelection(webb)
    setAll_color("black")
    setWebsite_color("black")
    setWebapp_color("aqua")
    setSoftware_color("black")
    setApp_color("black")
  }
const showSoftware = () =>{
  setProjectSelection([])
  var webb = new Array()
  software.map(web =>{
    webb.push(web)
  })
  setProjectSelection(webb)
  setAll_color("black")
  setWebsite_color("black")
  setWebapp_color("black")
  setSoftware_color("aqua")
  setApp_color("black")
}
const showApp  = () =>{
  setProjectSelection([])
  var webb = new Array()
  app.map(web =>{
    webb.push(web)
  })
  setProjectSelection(webb)
  setAll_color("black")
  setWebsite_color("black")
  setWebapp_color("black")
  setSoftware_color("black")
  setApp_color("aqua")
} 


  return (
        <div>
            <section id="portfolio" className="gallery">
      <div className="container clearfix">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-md-12 col-lg-8">
                <h2 className="heading">Portfolio :</h2>
                <p></p>
                <div className="portfolio_bar">
                  <div style={{color:`${all_color}`}} onClick={() => showAll()} >All</div>
                  <div style={{color:`${website_color}`}} onClick={() => showWebsite()} >Website</div>
                  <div style={{color:`${webapp_color}`}} onClick={() => showWebapp()} >Webapp</div>
                  <div style={{color:`${software_color}`}} onClick={() => showSoftware()} >Software</div> 
                  <div style={{color:`${app_color}`}} onClick={() => showApp()} >App</div>  
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-around">


              {projectSelection.map((project)=>{
                return(
                  <div className="box gcontainer col-lg-4" > <a href={project.link}><img src={project.imageSrc} alt={project.alt} className="img-fluid gimage" style={{width: 400, height: 225}}/>   <div className="gmiddle">
                  <div className="gtext">{project.name}</div>
                </div></a> <h6 className="projectName">{project.Title}</h6></div>
                )
              })}
              </div>
            </div>
          </div>
        </div>
    </section>
    </div>
    )
}

export default Portfolio