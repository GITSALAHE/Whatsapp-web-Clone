function sendUser1(){
    var textzone = document.getElementById("msg").value;
    if(textzone.length <= 0){
        return;
    }
    var x = document.getElementById("m-txt");
    x.innerHTML = "vous : "+textzone;
    var res = document.getElementById("all");
    var label = document.createElement("label");
    var esp0 = document.createElement("br");
    var esp = document.createElement("br");
    var esp1 = document.createElement("br");
    var esp2 = document.createElement("br");
    label.className = "msg";
    res.appendChild(esp0);
    res.appendChild(label);
    res.appendChild(esp);
    res.appendChild(esp1);
    res.appendChild(esp2);
    label.innerText = textzone;
    res.scrollBy(0, 100000);
    document.getElementById("msg").value = '';
   
}   
function sendUser2(){
    var textzone = document.getElementById("msg").value;
    if(textzone.length <= 0){
        return;
    }
    var x = document.getElementById("m-txt");
    x.innerHTML = "youssef : "+textzone;
    var res = document.getElementById("all");
    var label = document.createElement("label");
    var esp0 = document.createElement("br");
    var esp = document.createElement("br");
    var esp1 = document.createElement("br");
    var esp2 = document.createElement("br");
    label.className = "msg1";
    res.appendChild(esp0);
    res.appendChild(label);
    res.appendChild(esp);
    res.appendChild(esp1);
    res.appendChild(esp2);
    label.innerText = textzone;
    res.scrollBy(0, 100000);
    document.getElementById("msg").value = '';
}