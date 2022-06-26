var list1=[];
var list2=[];
var list3=[];
var list4=[];
 var n=1;
 var x=09;

 function docs(){
    var str1=document.getElementById("display");
    var newRow=str1.insertRow(n);
    
    list1[x]=document.getElementById('namee').value;
    list2[x]=document.getElementById('mail').value;
    list3[x]=document.getElementById('dob').value;
    list4[x]=document.getElementById('img').value;


    var cel1=newRow.insertCell(0);
    var cel2=newRow.insertCell(1);
    var cel3=newRow.insertCell(2);
    var cel4=newRow.insertCell(3);

    cel1.innerHTML=list1[x];
    cel2.innerHTML=list2[x];
    cel3.innerHTML=list3[x];
    cel4.innerHTML=list4[x];

    n++;
    x++;

    
}

