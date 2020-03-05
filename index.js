// Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon
function hamburgerMenu() {
  let x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


fetch('https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=pl_name,pl_bmassj,pl_bmassprov,pl_discmethod,pl_pnum, pl_publ_date&order=rowupdate desc&format=json&where=pl_disc=2019')

  .then(response => response.json())
  .then(result => {
    console.log(result)

    for (let n = 0; n < Math.min(result.length, 15); n++) {

      // Section
      let section = document.createElement('section')
      document.body.appendChild(section)
      section.setAttribute('class', 'cards')


      // Div Image
      let divImage = document.createElement('div')
      section.appendChild(divImage)
      divImage.setAttribute('class', 'divImage')

      // Image
      let image = document.createElement('img')
      divImage.appendChild(image)
      image.setAttribute('class', 'imgGlobe')
      image.setAttribute('src', 'globe.png')



      // Div Container
      let divContainer = document.createElement('div')
      section.appendChild(divContainer)
      divContainer.setAttribute('class', 'divContainer')



      // Div Planet Name
      let divPlanetName = document.createElement('div')
      divContainer.appendChild(divPlanetName)
      divPlanetName.setAttribute('class', 'sectionDiv')

      // Title Planet Name
      let titlePlanetName = document.createElement('h2')
      titlePlanetName.textContent = 'Planet name: '
      divPlanetName.appendChild(titlePlanetName)

      // Paragraph Planet Name
      let planetName = document.createElement('p')
      planetName.id = 'planetName'
      divPlanetName.appendChild(planetName)
      planetName.textContent = result[n].pl_name
      console.log(result[n].pl_name)



      // Div Planet Mass
      let divPlanetMass = document.createElement('div')
      divContainer.appendChild(divPlanetMass)
      divPlanetMass.setAttribute('class', 'sectionDiv')

      // Title Planet Mass
      let titlePlanetMass = document.createElement('h2')
      titlePlanetMass.textContent = 'Planet Mass or M*sin(i) [Jupiter mass]: '
      divPlanetMass.appendChild(titlePlanetMass)

      // p Planet Mass
      let planetMass = document.createElement('p')
      planetMass.id = 'planetMass'
      divPlanetMass.appendChild(planetMass)
      planetMass.textContent = result[n].pl_bmassj
      console.log(result[n].pl_bmassj)

      // p Planet Measurement
      let planetMeasurement = document.createElement('p')
      planetMeasurement.id = 'planetMeasurement'
      divPlanetMass.appendChild(planetMeasurement)
      planetMeasurement.textContent = result[n].pl_bmassprov
      console.log(result[n].pl_bmassprov)




      // Div Planet Discovery Method
      let divDiscMethod = document.createElement('div')
      divContainer.appendChild(divDiscMethod)
      divDiscMethod.setAttribute('class', 'sectionDiv')

      // Title Planet Discovery Method
      let titleDiscMethod = document.createElement('h2')
      titleDiscMethod.textContent = 'Planet discovery method: '
      divDiscMethod.appendChild(titleDiscMethod)

      // p Planet Discovery method
      let discMethod = document.createElement('p')
      discMethod.id = 'discMethod'
      divDiscMethod.appendChild(discMethod)
      discMethod.textContent = result[n].pl_discmethod
      console.log(result[n].pl_discmethod)



      // Div Number of planets in system
      let divPlanetsInSystem = document.createElement('div')
      divContainer.appendChild(divPlanetsInSystem)
      divPlanetsInSystem.setAttribute('class', 'sectionDiv')

      // Title Number of planets in system
      let titlePlanetsInSystem = document.createElement('h2')
      titlePlanetsInSystem.textContent = 'Number of planets in system: '
      divPlanetsInSystem.appendChild(titlePlanetsInSystem)

      // p Number of Planets in System
      let planetsInSystem = document.createElement('p')
      planetsInSystem.id = 'planetsInSystem'
      divPlanetsInSystem.appendChild(planetsInSystem)
      planetsInSystem.textContent = result[n].pl_pnum
      console.log(result[n].pl_pnum)



      // Div Date of discovery
      let divDiscovery = document.createElement('div')
      divContainer.appendChild(divDiscovery)
      divDiscovery.setAttribute('class', 'sectionDiv')

      // Title Date of discovery
      let titleDiscovery = document.createElement('h2')
      titleDiscovery.textContent = 'Discovered: '
      divDiscovery.appendChild(titleDiscovery)

      // p Date of discovery
      let discovery = document.createElement('p')
      discovery.id = 'discovery'
      divDiscovery.appendChild(discovery)
      discovery.textContent = result[n].pl_publ_date
      console.log(result[n].pl_publ_date)
    }
  })