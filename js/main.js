const menuBtn = document.querySelector('button.mobile-menu-btn')
const menu = document.querySelector('.mobile-menu')
const navBtns = document.querySelectorAll('.nav-menu-item')

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