
const labels = document.querySelectorAll('.form-control label');
const form = document.querySelector(".form-control")


labels.forEach(label=>{
    label.innerHTML = label.innerText.split('')
    .map((letter,index) => `<span style="transition-delay:${index * 50}ms">${letter}</span>`)
    .join('')
})

