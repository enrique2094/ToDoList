const val = document.getElementById('val');
const btn = document.querySelector('.sbtn');
const ul = document.getElementById('ul');
const liitem = document.querySelectorAll('.list');

btn.addEventListener('click', () => {
    let input = val.value;

    let regx = /[a-zA-Z]/;

    if(regx.test(input)){
        var li = document.createElement('li');
        // li.className = 'li';
        li.innerText = input;
        ul.appendChild(li);
    }else{}
    val.value = " ";
});


for(item of liitem){
    item.addEventListener('dblclick',(e)=>{
        e.target.remove();
    })
}



if(window.matchMedia('(max-width:450px)').matches){
    for(item of liitem){
        item.addEventListener('click',(e)=>{
            e.target.remove();
        })
    }
}

document.querySelector('.subbtn').addEventListener('click', () => {
    subbtn.classList.toggle('stop');
})

