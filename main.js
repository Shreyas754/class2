names=[];
function submit() {
    var name1=document.getElementById("student1").value;
    var name2=document.getElementById("student2").value;
    var name3=document.getElementById("student3").value;
    var name4=document.getElementById("student4").value;
    names.push(name1);
    names.push(name2);
    names.push(name3);
    names.push(name4);
    document.getElementById("displayname").innerHTML=names;
    document.getElementById("submitbutton").style.display="none";
    document.getElementById("sortbutton").style.display="inline";
}

function sorting() {
    names.sort();
    document.getElementById("displayname").innerHTML=names;
}
