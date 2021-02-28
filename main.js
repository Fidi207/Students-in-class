studentArray=[];
function submit(){
    var name1=document.getElementById("s1").value;
    var name2=document.getElementById("s2").value;
    var name3=document.getElementById("s3").value;
    var name4=document.getElementById("s4").value;
    studentArray.push(name1);
    studentArray.push(name2);
    studentArray.push(name3);
    studentArray.push(name4);
    console.log(studentArray);
    document.getElementById("displayArray").innerHTML= studentArray;
    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";
}

function sort(){
    studentArray.sort();
    document.getElementById("displayArray").innerHTML= studentArray;
}