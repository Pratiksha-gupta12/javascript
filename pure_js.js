// let Table;
// let t;

document.getElementById("mySubmit").onclick= function(){
    let Table= document.getElementById("myText").value;
    document.getElementById("myH2").innerHTML=` Table of ${Table} :`

    let t='';
    
        for(let i=1;i<=10;i++)
            {
                t += `${Table} * ${i} = ${Table * i}<br>` ;
                
            }

    
    document.getElementById("table").innerHTML= t;
}