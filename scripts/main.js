const liElement=document.querySelectorAll('.li_element')
function activLiElement(){
    liElement.forEach(el=>{
        el.classList.remove('active')
        this.classList.add('active')
    })
}
liElement.forEach(el=>el.addEventListener('click', activLiElement))
