const menuItem = document.querySelectorAll('.menu-item')
const menuLink = document.querySelectorAll('.menu-link')

menuItem.forEach((_, index) => {
  menuItem[index].addEventListener('click', function() {
    menuItem.forEach((_, index) => {
      menuItem[index].classList.remove('active')
      menuLink[index].classList.remove('active-icon')
    })
    this.classList.add('active')
    menuLink[index].classList.add('active-icon')
  })
})