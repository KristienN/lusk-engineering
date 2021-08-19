// import { projecs } from './projects'

const projects = [
    {
        "title":"Puma Depot Upgrade - Robert G. Mugabe Int'l Airport",
        "location": "Harare",
        "date": "March 2019 - October 2019",
        "description": "•	Project involved the upgrading of an existing fuel depot for aviation.",
        "client": "Puma Energy, Zimbabwe",
        "role": "Project Manager",
        "imgs": "./img/portfolio/lusk-airport.jpg",
        "id":"airport"
    },
    {
        "title":"Avondale Service Station",
        "location": "Harare",
        "date": "September 2018 - April 2019",
        "description": "Project involved the construction of a new service station.",
        "client": "Redan, Zimbabwe",
        "role": "Management Contractor",
        "imgs": "./img/portfolio/lusk-avondale.jpg",
        "id":"avondale"
    },
    {
        "title":"Zimplats Bulk Fuel dopt",
        "location": "Harare",
        "date": "March 2018 - August 2018",
        "description": "Project involved the upgrading of an existing fuel depot for aviation ",
        "client": "Puma Energy, Zimbabwe",
        "role": "Project Manager",
        "imgs": "./img/portfolio/lusk-zimplats.jpg",
        "id":"zimplats"
    },
    {
        "title":"Clipsham Service Station",
        "location": "Masvingo",
        "date": "January 2018 - July 2018",
        "description": "Project involved the rehabilitation of an old dis used service ",
        "client": "Puma energy, Zimbabwe",
        "role": "Management Contractor",
        "imgs": "./img/portfolio/lusk-clipsham.jpg"
    },
    {
        "title":"Westgate Service Station",
        "location": "Harare",
        "date": "September 2016 - April 2017",
        "description": "Project involved the construction of New Service Station at Westgate Shopping Mall. ",
        "client": "Redan, Zimbabwe",
        "role": "Project Manager",
        "imgs": "./img/portfolio/lusk-westgate.jpg",
        "id":"clipsham"
    },
    {
        "title":"NRZ Puma re-fuelling facility",
        "location": "Bulawayo",
        "date": "September 2016 - March 2017",
        "description": "Project involved the construction of a loading fuelling facility within the NRZ Depot and associated pipeline from 1million litres to the loading bay.  Installation of loading and offloading pumps and meters was part of the works.",
        "client": "Puma energy, Zimbabwe",
        "role": "Project Manager",
        "imgs": "./img/portfolio/lusk-nrzbulawayo.jpg",
        "id":"nrz"
    },
    {
        "title":"Dema Diesel Power Plant",
        "location": "Harare",
        "date": "March 2016 - June 2016",
        "description": "Project involved the upgrading of an existing fuel depot for aviation ",
        "client": "Fossil Contracting, Zimbabwe",
        "role": "Project Manager",
        "imgs": "./img/portfolio/lusk-dema.jpg",
        "id":"dema"
    }
]

const gallery = [
    {
        "title": "Puma Depot Upgrade - Robert G. Mugabe Int'l Airport",
        "img1": "./img/gallery/lusk-airport1.jpg",
        "img2": "./img/gallery/lusk-airport2.jpg",
        "img3": "./img/gallery/lusk-airport3.jpg",
        "caption": "Left to Right(Top to Bottom): - New Tanks in position; tank installation; Canopy works in progress; Canopy works when complete",
        "id":"airport"
        
    },
    {
        "title": "Avondale Service Station",
        "img1": "./img/gallery/lusk-avondale1.jpg",
        "img2": "./img/gallery/lusk-avondale2.jpg",
        "img3": "./img/gallery/lusk-avondale3.jpg",
        "caption": "Left to Right(Top to Bottom): - Forecourt after works are complete; admin building which was part of the works; earthworks in progress, fuel tanks installation",
        "id":"avondale"
        
    },
    {
        "title": "Zimplats Bulk Fuel dopt",
        "img1": "./img/gallery/lusk-zimplats1.jpg",
        "img2": "./img/gallery/lusk-zimplats2.jpg",
        "img3": "./img/portfolio/lusk-zimplats.jpg",
        "caption": "Left to Right(Top to Bottom): - 16 x 70,000Litres self bunded tanks installed into position; High speed pumps, tanks  pipework system",
        "id":"zimplats"
        
    },
    {
        "title": "Clipsham Service Station",
        "img1": "./img/gallery/lusk-clipsham1.jpg",
        "img2": "./img/gallery/lusk-clipsham2.jpg",
        "img3": "./img/gallery/lusk-clipsham3.jpg",
        "caption": "Left to Right(Top to Bottom): - Forecourt & canopy works when complete; rehabilitation of forecourt & canopy; rehabilitation of access roads",
        "id":"clipsham"
        
    },
    {
        "title": "Westgate Service Station",
        "img1": "./img/gallery/lusk-westgate1.jpg",
        "img2": "./img/gallery/lusk-westgate2.jpg",
        "img3": "./img/gallery/lusk-westgate3.jpg",
        "caption": "Left to Right(Top to Bottom): - Pump pre-asizing (calibration); Canopy installation in progress; forecourt concrete works",
        "id":"westgate"
        
    },
    {
        "title": "NRZ Puma re-fuelling facility",
        "img1": "./img/gallery/lusk-nrz1.jpg",
        "img2": "./img/gallery/lusk-nrz2.jpg",
        "img3": "./img/gallery/lusk-nrz3.jpg",
        "caption": "Left to Right(Top to Bottom): - 1million Litres rented storage tank, truck loading bay under construction, fuel pipelines crossing rail lines",
        "id":"nrz"
        
    },
    {
        "title": "Dema Diesel Power Plant",
        "img1": "./img/gallery/lusk-dema1.jpg",
        "img2": "./img/gallery/lusk-dema2.jpg",
        "img3": "./img/gallery/lusk-dema3.jpg",
        "caption": "Left to Right(Top to Bottom):Project  briefing during site tour; Transformer bundwalls formwork; Earthworks in  progress",
        "id":"dema"
        
    },
]

// Rest of javascript 


const menuBtn = document.querySelector('button.mobile-menu-btn')
const menu = document.querySelector('.mobile-menu')
const navBtns = document.querySelectorAll('.nav-menu-item')
const projectContainer = document.querySelector('.projects-container')
const galleryContainer = document.querySelector('.gallery-container')

menuBtn.addEventListener('click', ()=> {
    menu.classList.toggle('hidden')
})

navBtns.forEach(n => {
    n.addEventListener('click', (e)=>{
        let remove = document.querySelector('.selected')
        remove.classList.remove('selected')
        n.classList.add('selected')
    })
})

if(galleryContainer){
  gallery.forEach(g => {
    let card = `<div class="block md:flex justify-around md:space-x-8 min-w-full" id="${g.id}">
                          <div class="flex flex-col justify-centre items-centre my-12 bg-white border border-black">
                              <div class="md:flex md:space-x-2">
                                  <img src="${g.img1}" class="w-full h-64 mb-2 md:mb-0" alt="">
                                  <img src="${g.img2}" class="w-full h-64 mb-2 md:mb-0" alt="">
                                  <img src="${g.img3}" class="w-full h-64 mb-2 md:mb-0" alt="">
                              </div>

                              <div class="md:flex md:justify-between md:space-x-10 p-3 border-t border-black">
                                  <h1 class="font-bold text-md mb-2">${g.title}</h1>
                                  <h4 class="font-italic text-sm md:text-center mb-6">${g.caption}</h4>
                                  <a href="./portfolio.html#${g.id}" class="bg-red-800 p-3 rounded mb-6 text-white text-center font-semibold text-md">View project</a>
                              </div>
                          </div>
                      </div>`
    galleryContainer.innerHTML += card
  })
}

if(projectContainer){
  projects.forEach(p => {
    let card = `<div class="md:flex justify-centre items-centre my-12 bg-white" id="${p.id}">
                    <a href="gallery.html#${p.id}" class="img-link w-full md:w-1/3"><img src="${p.imgs}" class="w-full h-full object-cover" alt=""></a>
                    <div class="block p-8">
                        <h1 class="font-bold text-2xl mb-4">${p.title}</h1>
                        <hr/>
                        <h4 class="font-italic text-sm my-4 mt-8">${p.date}</h4>
                        <h2 class="font-semibold text-lg my-4">${p.location}</h2>
                        <p>${p.description}</p>
                        <h2 class="font-semibold text-lg my-4">Client:  ${p.client}</h2>
                        <div class="md:flex md:space-x-8 space-y-4 md:space-y-0 tags my-4">
                            <span class="block bg-yellow-500 border border-black p-2 text-sm rounded">
                                Fuel Farms
                            </span>
                            <span class="block bg-yellow-500 border border-black p-2 text-sm rounded">
                                Service Station
                            </span>
                        </div>
                        <p class="text-sm font-bold text-red-500">Role: ${p.role}</p>
                    </div>
                </div>`
    projectContainer.innerHTML += card
  })
}



function initMap() {
  const office = { lat: -17.806957794936924, lng: 31.04039995512634 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: office,
  });

  const marker = new google.maps.Marker({
    position: office,
    map: map,
  });
} 