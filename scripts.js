var ul = document.createElement("ul");
ul.setAttribute("class","pagination  justify-content-center");

var li=document.createElement("li");
li.setAttribute("class","page-item");

var a = document.createElement("a");
a.setAttribute("class","page-link");
a.setAttribute("href","#");
a.setAttribute("onclick","load('previous')");
a.innerHTML="Previous";

li.append(a);

var li1=document.createElement("li");
li1.setAttribute("class","page-item");
li1.setAttribute("id","id-1");

var a1 = document.createElement("a");
a1.setAttribute("class","page-link");
a1.setAttribute("href","#");
a1.setAttribute("onclick","load(1)");

a1.innerHTML="1";

li1.append(a1);

var li2=document.createElement("li");
li2.setAttribute("class","page-item");
li2.setAttribute("id","id-2");

var a2 = document.createElement("a");
a2.setAttribute("class","page-link");
a2.setAttribute("href","#");
a2.setAttribute("onclick","load(2)");

a2.innerHTML="2";

li2.append(a2);

var li3=document.createElement("li");
li3.setAttribute("class","page-item");
li3.setAttribute("id","id-3");

var a3 = document.createElement("a");
a3.setAttribute("class","page-link");
a3.setAttribute("href","#");
a3.setAttribute("onclick","load(3)");

a3.innerHTML="3";

li3.append(a3);

var li4=document.createElement("li");
li4.setAttribute("class","page-item");
li4.setAttribute("id","id-4");

var a4 = document.createElement("a");
a4.setAttribute("class","page-link");
a4.setAttribute("href","#");
a4.setAttribute("onclick","load(4)");

a4.innerHTML="4";

li4.append(a4);

var li5=document.createElement("li");
li5.setAttribute("class","page-item");
li5.setAttribute("id","id-5");

var a5 = document.createElement("a");
a5.setAttribute("class","page-link ");
a5.setAttribute("href","#");
a5.setAttribute("onclick","load(5)");
a5.innerHTML="5";

li5.append(a5);

var li6=document.createElement("li");
li6.setAttribute("class","page-item");

var a6 = document.createElement("a");
a6.setAttribute("class","page-link");
a6.setAttribute("href","#");
a6.setAttribute("onclick","load('next')");
a6.innerHTML="Next";

li6.append(a6);

ul.append(li,li1,li2,li3,li4,li5,li6);

document.body.append(ul);

var currentPage=1;

function load(page) {
    var mydata = JSON.parse(data);
    if(page>=1 && page <=5){
        currentPage=page;
    }
    else{
        if(page=='next' && currentPage<5){
            currentPage+=1;
            console.log("in next page")
        }
        if(page=='previous' && currentPage>1){
            currentPage-=1;
        }
        
    }
    console.log("Current page is:"+currentPage)
	
    // var activeList=document.querySelector(".active");
    // for(let i in activeList)
    //     console.log(i)
    // console.log("Activelist:"+activeList)
    // var active = document.getElementById("id-"+page);
    // active.classList.add("active")
    var res="";
    for(let i=(currentPage-1)*10,j=0;j<10;j++,i++){
        res += "<div class='row'><div class='col-lg-4 col-sm-12 border '> <b>Id:</b>"+mydata[i].id+"</div> <div class='border  col-lg-4 col-sm-12'> <b>Name:</b>"+mydata[i].name+"</div> <div class='border col-lg-4 col-sm-12'> <b>EmailID:</b>"+mydata[i].email+"</div> </div>";
    }
    
    document.getElementById("source").innerHTML=res;
}