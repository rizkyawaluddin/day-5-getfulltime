let myProjects = []

const month = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember'
]

function addProject(event) {
    event.preventDefault()


    let name = document.getElementById('projectName').value
    let startDate = document.getElementById('startDate').value
    let endDate = document.getElementById('endDate').value
    let description = document.getElementById('description').value
    let image = document.getElementById('image')

    let node = document.getElementById('nodeJs').checked
    let react = document.getElementById('reactJs').checked
    let next = document.getElementById('nextJs').checked
    let typeScript = document.getElementById('typeScript').checked


    let blogs = {
        name: name,
        startDate: startDate,
        endDate: endDate,
        description: description,
        image: image = URL.createObjectURL(image.files[0]),
        node: node,
        react: react,
        next: next,
        typeScript: typeScript
    }

    myProjects.push(blogs)
    renderBlog()
    // console.log(blogs)
}

function renderBlog() {
    let lengthData = myProjects.length

    let blogProject = document.getElementById('card')

    blogProject.innerHTML = firstBlogConten()
    
    for (let i = 0; i < lengthData; i++) {
        blogProject.innerHTML += `
        <div class="card-project">
                    <img src="${myProjects[i].image}" id="image-post" alt="">
                    <a href="blog-detail.html" id="project-name">${myProjects[i].name}</a>
                    <p id="duration-post">${getDistanceTime(myProjects[i].startDate, myProjects[i].endDate)}</p>
                    <p id="description-post">${myProjects[i].description}</p>
                    <div class="logo-post" id="logo-post">
                    ${(myProjects[i].node == true) ?'<i class="fa-brands fa-node"></i>':''}
                    ${(myProjects[i].react == true) ?'<i class="fa-brands fa-react"></i>':''}
                    ${(myProjects[i].next == true) ?'<i class="fa-brands fa-next"></i>':''}
                    ${(myProjects[i].typeScript == true) ?'<i class="fa-brands fa-typeScript"></i>':''}
                    </div>
                      <div class="btn">
                        <button class="button">edit</button>
                        <button class="button">delete</button>
                      </div>
                  </div> `
    }
}


function getDistanceTime(start, end) {
  let startDate = new Date(start)
  let endDate = new Date(end)

let distance = endDate - startDate
console.log(distance); 

let miliseconds = 1000
// let secondInMinute = 60
let secondInHours = 3600
let hoursInDay = 24 
let dayInMonth = 31
let monthInYear = 12

let distanceYear = Math.floor(distance / (miliseconds* secondInHours * hoursInDay * dayInMonth * monthInYear))
let distanceMonth = Math.floor(distance / (miliseconds * secondInHours * hoursInDay * dayInMonth))
let distanceDay = Math.floor(distance / (miliseconds * secondInHours * hoursInDay))
let distanceHours = Math.floor(distance / (miliseconds * 60 * 60))
let distanceMinutes = Math.floor(distance / (miliseconds * 60))
let distanceSeconds = Math.floor(distance / miliseconds)

console.log(distanceDay);
console.log(distanceHours);
console.log(distanceMinutes);

if (distanceYear > 0) {
    return`${distanceYear} Year`
} else if (distanceMonth > 0) {
    return`${distanceMonth} Month`
} else if(distanceDay > 0) {
    return `${distanceDay} day`
} else if(distanceHours > 0) {
    return `${distanceHours} hours`
} else if(distanceMinutes > 0) {
    return `${distanceMinutes} minutes`
} else {
    return `${distanceSeconds} seconds`
}


}


function firstBlogConten() {
    return `  <div class="card-project">
    <img src="assets/hacking2.jpg" id="image-post" alt="">
    <a href="blog-detail.html" id="project-name">Creating blog projects - 2022</a>
    <p id="duration-post">duration</p>
    <p id="description-post">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima praesentium nisi quibusdam debitis amet sunt, natus nulla ab dolore facere!</p>
    <div class="logo-post" id="logo-post">
      <i class="fa-brands fa-node"></i>
      <i class="fa-brands fa-react"></i>
      <i class="fa-brands fa-next"></i>
      <i class="fa-brands fa-type"></i>
    </div>
      <div class="btn">
        <button class="button">edit</button>
        <button class="button">delete</button>
      </div>
  </div> `
}



