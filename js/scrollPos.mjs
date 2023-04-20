export default function scrollPos() { 
    document.addEventListener("scroll", (e) => {
        document.documentElement.style.setProperty('--scrollPos', window.scrollY + 'px')
    })
}