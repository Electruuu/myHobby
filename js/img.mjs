export default function img() { 
    let imgs = document.getElementsByTagName("img")
    let isOn = false
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].addEventListener("click", (e) => {
            e.target.classList.toggle("full")
            if (isOn) {
                isOn = false
                document.getElementById("darkener").classList.remove("active")
            } else {
                isOn = true
                document.getElementById("darkener").classList.add("active")
            }
        })
    }
}