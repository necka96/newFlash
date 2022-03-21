const selectElement = selector => {
 const element = document.querySelector(selector)
 if(element) return element;
 throw new Error(`Uverite se da li ovaj ${selector} postoji ili da li je pogresno napisan`)
}
const container = selectElement("#container")
const hamburgerMenu = selectElement(".hamburgerMenu")
hamburgerMenu.addEventListener("click", ()=> {
 container.classList.toggle("active")
 
})


const scrollHeader = () => {
 const navbarElement = selectElement(".navbar")
 if(this.scrollY >= 15){
   navbarElement.classList.add("activated")
 }else{
   navbarElement.classList.remove("activated")
 }
}
window.addEventListener("scroll", scrollHeader)

const bodyElement = document.body
const themeToggleBtn = selectElement("#theme-toggle-btn")
const currentTheme = localStorage.getItem("currentTheme")
if(currentTheme){
 bodyElement.classList.add("light-theme")
}
themeToggleBtn.addEventListener("click", ()=>{
 bodyElement.classList.toggle("light-theme")
 if(bodyElement.classList.contains("light-theme")){
  localStorage.setItem("currentTheme", "themeActive")
 }else{
    localStorage.removeItem("currentTheme")
 }
})
const fromOpenBtn= selectElement("#search-icon")
const fromCloseBtn= selectElement("#form-close-btn")
const searchFormContainer = selectElement("#search-form-container")
fromOpenBtn.addEventListener("click",()=>{
  searchFormContainer.classList.add("activated")
})
fromCloseBtn.addEventListener("click",()=>{
  searchFormContainer.classList.remove("activated")
})
window.addEventListener("keyup", event=> {
  if(event.key === "Escape") searchFormContainer.classList.remove("activated")
} )
// Swiper
const swiper = new Swiper(".swiper", {
    // How many slides to show
    slidesPerView: 1,
    // How much space between slides
    spaceBetween: 20,
    // Make the next and previous buttons work
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Make the pagination indicators work
    pagination: {
        el: '.swiper-pagination'
    },
    //Responsive breakpoints for how many slides to show at that view
    breakpoints: {
        // 700px and up shoes 2 slides
        700: {
          slidesPerView: 2
        },
        // 1200px and up shoes 3 slides
        1200: {
            slidesPerView: 3
        }
    }   
});