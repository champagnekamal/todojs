function addmore() {
    let name = document.getElementById("name").value;
    if(name==''){
        document.getElementById("error").innerHTML= "enter a value to add"
    }
    else {
let box= document.getElementById("box");

let li = document.createElement('li');
li.textContent=name;
box.appendChild(li);
    }
}