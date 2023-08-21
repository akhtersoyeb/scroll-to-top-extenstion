function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Use 'auto' for instant scrolling
  })
}

const button = document.createElement('button')
button.id = 'scrollToTopBtn'

const svgIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-to-line"><path d="M5 3h14"/><path d="m18 13-6-6-6 6"/><path d="M12 7v14"/></svg>'
const svgContainer = document.createElement('div')
svgContainer.innerHTML = svgIcon
const svgElement = svgContainer.firstChild

// Append the SVG element to the button
button.appendChild(svgElement)


button.addEventListener('click', () => {
  scrollToTop()
})

document.body.appendChild(button)

