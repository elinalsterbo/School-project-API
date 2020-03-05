// Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon
function hamburgerMenu() {
  let x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2014-6-3&page=1&api_key=') //API-key have been removed

  .then(response => response.json())
  .then(result => {
    console.log(result.photos)

    for (let n = 0; n < Math.min(result.photos.length, 12); n++) {

      // Section
      let section = document.createElement('section')
      document.body.appendChild(section)
      section.setAttribute('class', 'cardsMars')


      // Div Image
      let divImage = document.createElement('div')
      section.appendChild(divImage)
      divImage.setAttribute('class', 'divImageMars')

      // Image
      let image = document.createElement('img')
      divImage.appendChild(image)
      image.setAttribute('class', 'imgRover')
      image.setAttribute('src', result.photos[n].img_src)



      // Div Container
      let divContainer = document.createElement('div')
      section.appendChild(divContainer)
      divContainer.setAttribute('class', 'divContainerMars')



      // Div Camera Name
      let divCameraName = document.createElement('div')
      divContainer.appendChild(divCameraName)
      divCameraName.setAttribute('class', 'sectionDivMars')

      // Title Camera Name
      let titlePlanetName = document.createElement('h2')
      titlePlanetName.textContent = 'Camera: '
      divCameraName.appendChild(titlePlanetName)

      // Paragraph Camera Name
      let cameraName = document.createElement('p')
      cameraName.id = 'cameraName'
      divCameraName.appendChild(cameraName)
      cameraName.textContent = result.photos[n].camera.full_name
      console.log(result.photos[n].camera.full_name)



      // Div Camera The most recent Earth date from which photos exist
      let divDate = document.createElement('div')
      divContainer.appendChild(divDate)
      divDate.setAttribute('class', 'sectionDivMars')

      // Title Camera The most recent Earth date from which photos exist
      let titleDate = document.createElement('h2')
      titleDate.textContent = 'Earth day on which the picture was taken: '
      divDate.appendChild(titleDate)

      // p Camera The most recent Earth date from which photos exist
      let date = document.createElement('p')
      date.id = 'date'
      divDate.appendChild(date)
      date.textContent = result.photos[n].rover.max_date
      console.log(result.photos[n].rover.max_date)



      // Div The Rover's launch date from Earth
      let divLaunchDate = document.createElement('div')
      divContainer.appendChild(divLaunchDate)
      divLaunchDate.setAttribute('class', 'sectionDivMars')

      // Title The Rover's launch date from Earth
      let titleLaunchDate = document.createElement('h2')
      titleLaunchDate.textContent = 'The rover´s launch date from Earth: '
      divLaunchDate.appendChild(titleLaunchDate)

      // p The Rover's launch date from Earth
      let launchDate = document.createElement('p')
      launchDate.id = 'launchDate'
      divLaunchDate.appendChild(launchDate)
      launchDate.textContent = result.photos[n].rover.launch_date
      console.log(result.photos[n].rover.launch_date)



      // Div 	The Rover's landing date on Mars
      let divLandingDate = document.createElement('div')
      divContainer.appendChild(divLandingDate)
      divLandingDate.setAttribute('class', 'sectionDivMars')

      // Title 	The Rover's landing date on Mars
      let titleLandingDate = document.createElement('h2')
      titleLandingDate.textContent = 'The rover´s landing date on Mars: '
      divLandingDate.appendChild(titleLandingDate)

      // p 	The Rover's landing date on Mars
      let landingDate = document.createElement('p')
      landingDate.id = 'landingDate'
      divLandingDate.appendChild(landingDate)
      landingDate.textContent = result.photos[n].rover.landing_date
      console.log(result.photos[n].rover.landing_date)



      // Div The most recent Martian sol from which photos exist (Martian rotation or day)
      let divSol = document.createElement('div')
      divContainer.appendChild(divSol)
      divSol.setAttribute('class', 'sectionDivMars')

      // Title The most recent Martian sol from which photos exist (Martian rotation or day)
      let titleSol = document.createElement('h2')
      titleSol.textContent = ' Which sol (Martian rotation or day) the picture was taken: '
      divSol.appendChild(titleSol)

      // p The most recent Martian sol from which photos exist (Martian rotation or day)
      let sol = document.createElement('p')
      sol.id = 'sol'
      divSol.appendChild(sol)
      sol.textContent = result.photos[n].rover.max_sol
      console.log(result.photos[n].rover.max_sol)
    }
  })