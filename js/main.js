const selectElement = selector => {
 const element = document.querySelector(selector)
 if(element) return element;
 throw new Error(`Uverite se da li ovaj ${selector} postoji ili da li je pogresno napisan`)
}
const constiner = selectElement(".container")
const hamburgerMenu = selectElement(".hamburgerMenu")
hamburgerMenu.addEventListener("click", ()=> {
 constiner.classList.toggle("active")
 
})
const links = document.querySelectorAll(".links a")
links.forEach((link)=>{
 link.addEventListener("click", ()=>{
  constiner.classList.remove("active")
 })
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