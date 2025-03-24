const body = document.querySelector("#btn");
const code = document.querySelector("3code");
const icon = document.getElementById("icon");

color.addEventListener('click',()=>{
    color_code(length++);
})

function color_code(n)
{
    const code_num = Math.floor(Math.random() * 16777215).toString(16);
    const color = "#" + code_num;
    document.body.style.backgroundColor = color;
    code.innerText = color;
    console.log(color)
}

icon.addEventListener('click',() =>{
        navigator.clipboard.writeText(code.innerText)
})

color_code();
code();