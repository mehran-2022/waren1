var resultat=document.querySelector(".resultat");
var loood=document.getElementById("relod");
loood.addEventListener("click",relod)
function relod(){
    location.reload();

}
resultat.addEventListener("click",bt2)

function bt2(){
    var resultat=document.querySelector(".resultat");
resultat.classList.remove("show");
    console.log("dokem remove div resultat kar mikone ikea 0 ebene")
};

var euronull={
    breite:300,
    länge:140,
    höhe:100,
    DoppelP:70,
}
var euronull2fach={
    breite:200,
    länge:140,
    höhe:100,
    DoppelP:70,
}
var fach12={
    
    breite:100,
    länge:70,
    höhe:130,
    DoppelP:35,
}
var b0= document.getElementById("b0");
var a0= document.getElementById("a0");


function my(){
   
    var artikelname=document.getElementById("Name");
    var stapel=document.getElementById("stapel");
    var ArtikelNummer=document.getElementById("ArtikelNummer");
var inhöhe=document.getElementById("höhe");
var inbreite=document.getElementById("breite");
var inlänge=document.getElementById("länger");
var instück=document.getElementById("stück");
var ingewicht=document.getElementById("gewicht");
var inregal=document.getElementById("vkf1");
var infach=document.getElementById("vkf2");
var inebene=document.getElementById("vkf3");
var a1= document.getElementById("a1");
var a2= document.getElementById("a2");
var b1= document.getElementById("b1");
var b2= document.getElementById("b2");
var c1= document.getElementById("c1");
var c2= document.getElementById("c2");
var a0= document.getElementById("a0");
var b0= document.getElementById("b0");
var d1= document.getElementById("d1");
var d2= document.getElementById("d2");
var resultat=document.querySelector(".resultat");
resultat.classList.add("show");


 
var euronull={
    breite:300,
    länge:140,
    höhe:100,
    DoppelP:70,
}
var euronull2fach={
    breite:200,
    länge:140,
    höhe:100,
    DoppelP:70,
}
var fach12={
    
    breite:100,
    länge:70,
    höhe:130,
    DoppelP:35,
}
//regal 24
if(inregal.value==24&&infach.value==01&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("24-01-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("24-01-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test241()

};
if(inregal.value==24&&infach.value==02&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("24-02-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("24-02-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test241()

};
if(inregal.value==24&&infach.value==03&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("24-03-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("24-03-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test241()

};
if(inregal.value==24&&infach.value==04&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("24-04-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("24-04-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test242()

};
if(inregal.value==24&&infach.value==05&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("24-05-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("24-05-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test242()

};
if(inregal.value==24&&infach.value==06&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("24-06-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("24-06-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test242()

};
if(inregal.value==24&&infach.value==07&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("24-07-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("24-07-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test243()

};
if(inregal.value==24&&infach.value==08&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("24-08-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("24-08-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test243()

};
if(inregal.value==24&&infach.value==09&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("24-09-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("24-09-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test243()

};
if(inregal.value==24&&infach.value==10&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("24-10-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("24-10-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test244()

};
if(inregal.value==24&&infach.value==11&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("24-11-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("24-11-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test244()

};
if(inregal.value==24&&infach.value==12&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("24-12-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("24-12-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test244()

};
if(inregal.value==24&&infach.value==13&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("24-13-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("24-13-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test245()

};
if(inregal.value==24&&infach.value==14&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("24-14-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("24-14-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test245()

};
if(inregal.value==24&&infach.value==15&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("24-15-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("24-15-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test245()

};
if(inregal.value==24&&infach.value==16&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("24-16-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("24-16-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test246()

};
if(inregal.value==24&&infach.value==17&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("24-17-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("24-17-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test246()

};
if(inregal.value==24&&infach.value==18&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("24-18-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("24-18-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test246()

};
if(inregal.value==24&&infach.value==19&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("24-19-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("24-19-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test247()

};
if(inregal.value==24&&infach.value==20&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("24-20-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("24-20-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test247()

};
if(inregal.value==24&&infach.value==21&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("24-21-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("24-21-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test247()

};
if(inregal.value==24&&infach.value==22&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("24-22-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("24-22-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test248()

};
if(inregal.value==24&&infach.value==23&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("24-23-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("24-23-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test248()

};
if(inregal.value==24&&infach.value==24&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("24-24-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("24-24-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test248()

};
if(inregal.value==24&&infach.value==25&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("24-25-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("24-25-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test249()

};
if(inregal.value==24&&infach.value==26&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("24-26-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("24-26-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test249()

};
if(inregal.value==24&&infach.value==27&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("24-27-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("24-27-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test249()

};
if(inregal.value==24&&infach.value==31&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("24-31-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("24-31-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull2fach.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull2fach.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull2fach.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull2fach.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull2fach.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull2fach.länge/2)
console.log("c1")
}if(vkf4l>euronull2fach.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull2fach.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull2fach.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test2410()

};
if(inregal.value==24&&infach.value==32&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("24-32-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("24-32-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull2fach.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull2fach.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull2fach.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull2fach.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull2fach.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull2fach.länge/2)
console.log("c1")
}if(vkf4l>euronull2fach.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull2fach.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull2fach.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test2410()

};







/////////regal 22\\\\\\\\\\\\\\\\
if(inregal.value==22&&infach.value==01&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("22-01-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("22-01-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test221()

};
if(inregal.value==22&&infach.value==02&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("22-02-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("22-02-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test221()

};
if(inregal.value==22&&infach.value==03&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("22-03-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("22-03-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test221()

};
if(inregal.value==22&&infach.value==04&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("22-04-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("22-04-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test222()

};
if(inregal.value==22&&infach.value==05&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("22-05-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("22-05-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test222()

};
if(inregal.value==22&&infach.value==06&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("22-06-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("22-06-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test222()

};
if(inregal.value==22&&infach.value==07&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("22-07-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("22-07-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test223()

};
if(inregal.value==22&&infach.value==08&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("22-08-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("22-08-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test223()

};
if(inregal.value==22&&infach.value==09&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("22-09-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("22-09-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test223()

};
if(inregal.value==22&&infach.value==10&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("22-10-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("22-10-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test224()

};
if(inregal.value==22&&infach.value==11&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("22-11-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("22-11-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test224()

};
if(inregal.value==22&&infach.value==12&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("22-12-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("22-12-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test224()

};
if(inregal.value==22&&infach.value==13&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("22-13-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("22-13-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull2fach.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull2fach.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull2fach.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull2fach.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull2fach.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull2fach.länge/2)
console.log("c1")
}if(vkf4l>euronull2fach.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull2fach.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull2fach.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test225()

};
if(inregal.value==22&&infach.value==14&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("22-14-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("22-14-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull2fach.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull2fach.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull2fach.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull2fach.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull2fach.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull2fach.länge/2)
console.log("c1")
}if(vkf4l>euronull2fach.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull2fach.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull2fach.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test225()

};
if(inregal.value==22&&infach.value==15&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("22-15-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("22-15-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=fach12.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach12.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach12.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach12.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach12.länge){
c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(fach12.länge/2)
console.log("c1")
}if(vkf4l>fach12.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach12.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach12.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test226()

};
if(inregal.value==22&&infach.value==16&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("22-16-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("22-16-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test227()

};
if(inregal.value==22&&infach.value==17&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("22-17-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("22-17-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test227()

};
if(inregal.value==22&&infach.value==18&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("22-18-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("22-18-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test227()

};
if(inregal.value==22&&infach.value==19&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("22-19-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("22-19-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test228()

};
if(inregal.value==22&&infach.value==20&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("22-20-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("22-20-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test228()

};
if(inregal.value==22&&infach.value==21&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("22-21-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("22-21-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test229()

};
if(inregal.value==22&&infach.value==22&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("22-22-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("22-22-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test229()

};
if(inregal.value==22&&infach.value==23&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("22-23-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("22-23-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test228()

};
if(inregal.value==22&&infach.value==24&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("22-24-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("22-24-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test229()

};
if(inregal.value==22&&infach.value==25&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("22-25-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("22-25-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test2210()

};
if(inregal.value==22&&infach.value==26&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("22-26-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("22-26-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test2210()

};
if(inregal.value==22&&infach.value==27&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("22-27-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("22-27-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test2210()

};
if(inregal.value==22&&infach.value==31&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("22-31-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("22-31-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test2211()

};
if(inregal.value==22&&infach.value==32&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("22-32-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("22-32-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test2211()

};
if(inregal.value==22&&infach.value==33&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("22-33-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("22-33-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test2211()

};
if(inregal.value==22&&infach.value==34&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("22-34-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("22-34-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test2212()

};
if(inregal.value==22&&infach.value==35&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("22-35-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("22-35-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test2212()

};
if(inregal.value==22&&infach.value==36&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("22-36-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("22-36-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test2212()

};
if(inregal.value==22&&infach.value==37&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("22-37-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("22-37-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test2213()

};
if(inregal.value==22&&infach.value==38&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("22-38-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("22-38-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test2213()

};
if(inregal.value==22&&infach.value==39&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("22-39-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("22-39-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test2213()

};




/////////regal 20\\\\\\\\\\\\\\\\
if(inregal.value==20&&infach.value==01&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("20-01-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("20-01-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test201()

};
if(inregal.value==20&&infach.value==02&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("20-02-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("20-02-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test201()

};
if(inregal.value==20&&infach.value==03&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("20-03-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("20-03-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test201()

};
if(inregal.value==20&&infach.value==04&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("20-04-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("20-04-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test202()

};
if(inregal.value==20&&infach.value==05&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("20-05-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("20-05-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test202()

};
if(inregal.value==20&&infach.value==06&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("20-06-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("20-06-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test202()

};
if(inregal.value==20&&infach.value==07&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("20-07-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("20-07-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test203()

};
if(inregal.value==20&&infach.value==08&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("20-07-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("20-07-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test203()

};
if(inregal.value==20&&infach.value==09&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("20-09-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("20-09-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test203()

};
if(inregal.value==20&&infach.value==10&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("20-10-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("20-10-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test204()

};
if(inregal.value==20&&infach.value==11&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("20-11-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("20-11-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test204()

};
if(inregal.value==20&&infach.value==12&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("20-12-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("20-12-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test204()

};
if(inregal.value==20&&infach.value==15&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("20-15-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("20-15-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=fach12.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach12.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach12.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach12.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach12.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(fach12.länge/2)
console.log("c1")
}if(vkf4l>fach12.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach12.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach12.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test205()

};
if(inregal.value==20&&infach.value==16&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("20-16-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("20-16-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test206()

};
if(inregal.value==20&&infach.value==17&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("20-17-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("20-17-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test206()

};
if(inregal.value==20&&infach.value==18&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("20-18-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("20-18-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test206()

};
if(inregal.value==20&&infach.value==19&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("20-19-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("20-19-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test207()

};
if(inregal.value==20&&infach.value==20&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("20-20-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("20-20-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test207()

};
if(inregal.value==20&&infach.value==21&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("20-21-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("20-21-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test207()

};
if(inregal.value==20&&infach.value==22&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("20-22-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("20-22-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test208()

};
if(inregal.value==20&&infach.value==23&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("20-23-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("20-23-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test208()

};
if(inregal.value==20&&infach.value==24&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("20-24-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("20-24-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test208()

};
if(inregal.value==20&&infach.value==25&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("20-25-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("20-25-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test209()

};
if(inregal.value==20&&infach.value==26&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("20-26-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("20-26-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test209()

};
if(inregal.value==20&&infach.value==27&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("20-27-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("20-27-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test209()

};
if(inregal.value==20&&infach.value==31&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("20-31-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("20-31-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test2010()

};
if(inregal.value==20&&infach.value==32&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("20-32-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("20-32-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test2010()

};
if(inregal.value==20&&infach.value==33&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("20-33-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("20-33-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test2010()

};
if(inregal.value==20&&infach.value==34&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("20-34-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("20-34-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test2011()

};
if(inregal.value==20&&infach.value==35&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("20-35-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("20-35-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test2011()

};
if(inregal.value==20&&infach.value==36&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("20-36-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("20-36-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test2011()

};
if(inregal.value==20&&infach.value==37&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("20-37-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("20-37-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test2012()

};
if(inregal.value==20&&infach.value==38&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("20-37-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("20-37-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test2012()

};
if(inregal.value==20&&infach.value==39&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("20-39-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("20-39-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test2012()

};








//regal 26
if(inregal.value==26&&infach.value==01&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("26-01-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("26-01-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test4()

};
if(inregal.value==26&&infach.value==02&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("26-02-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("26-02-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test4()

};
if(inregal.value==26&&infach.value==03&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("26-03-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("26-03-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test4()

};
if(inregal.value==26&&infach.value==04&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("26-04-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("26-04-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test5()

};
if(inregal.value==26&&infach.value==05&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("26-05-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("26-05-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test5()

};
if(inregal.value==26&&infach.value==06&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("26-06-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("26-06-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test5()

};
if(inregal.value==26&&infach.value==07&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("26-07-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("26-07-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull2fach.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull2fach.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull2fach.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull2fach.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull2fach.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull2fach.länge/2)
console.log("c1")
}if(vkf4l>euronull2fach.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull2fach.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull2fach.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test6()

};
if(inregal.value==26&&infach.value==08&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("26-08-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("26-08-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull2fach.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull2fach.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull2fach.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull2fach.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull2fach.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull2fach.länge/2)
console.log("c1")
}if(vkf4l>euronull2fach.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull2fach.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull2fach.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test6()

};
if(inregal.value==26&&infach.value==09&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("26-09-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("26-09-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test7()

};
if(inregal.value==26&&infach.value==10&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("26-10-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("26-10-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test7()

};
if(inregal.value==26&&infach.value==11&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("26-11-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("26-11-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test7()

};
if(inregal.value==26&&infach.value==12&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("26-12-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("26-12-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=fach12.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach12.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach12.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach12.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach12.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(fach12.länge/2)
console.log("c1")
}if(vkf4l>fach12.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach12.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach12.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test8()

};
if(inregal.value==26&&infach.value==13&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("26-13-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("26-13-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test9()

};
if(inregal.value==26&&infach.value==14&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("26-14-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("26-14-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test9()

};
if(inregal.value==26&&infach.value==15&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("26-15-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("26-15-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test9()

};
if(inregal.value==26&&infach.value==16&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("26-16-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("26-16-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test10()

};
if(inregal.value==26&&infach.value==17&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("26-17-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("26-17-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test10()

};
if(inregal.value==26&&infach.value==18&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("26-18-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("26-18-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test10()

};
if(inregal.value==26&&infach.value==19&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("26-19-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("26-19-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test11()

};
if(inregal.value==26&&infach.value==20&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("26-20-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("26-20-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test11()

};
if(inregal.value==26&&infach.value==21&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("26-21-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("26-21-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test11()

};
if(inregal.value==26&&infach.value==22&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("26-22-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("26-22-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test12()

};
if(inregal.value==26&&infach.value==23&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("26-23-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("26-23-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test12()

};
if(inregal.value==26&&infach.value==24&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("26-24-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("26-24-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull.länge/2)
console.log("c1")
}if(vkf4l>euronull.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test12()

};
if(inregal.value==26&&infach.value==25&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("26-25-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("26-25-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull2fach.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull2fach.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull2fach.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull2fach.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull2fach.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull2fach.länge/2)
console.log("c1")
}if(vkf4l>euronull2fach.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull2fach.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull2fach.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test13()

};
if(inregal.value==26&&infach.value==26&&inebene.value==00){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("26-26-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("26-26-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull2fach.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>euronull2fach.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=euronull2fach.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>euronull2fach.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=euronull2fach.länge){


c1.textContent="dast artikel  länge passt  ";
c1.style.color="green";
console.log(euronull2fach.länge/2)
console.log("c1")
}if(vkf4l>euronull2fach.länge){

c1.textContent="dast artikel  länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=euronull2fach.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>euronull2fach.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}

test13()

};








//regal 28
    if(inregal.value==28&&infach.value==01&&inebene.value==00){
        var artike={
            name:artikelname.value,
            breite:inbreite.value,
            länge:inlänge.value,
            höhe:inhöhe.value,
            gewicht:ingewicht.value,
            stück:instück.value,
            stapel:stapel.value,
            ArtikelNummer:ArtikelNummer.value
        }
        localStorage.setItem("28-01-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("28-01-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b1>euronull.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=euronull.länge){
   
   
    c1.textContent="dast artikel  länge passt  ";
    c1.style.color="green";
    console.log(euronull.länge/2)
    console.log("c1")
}if(vkf4l>euronull.länge){
   
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
    d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
    console.log(vkf4l)
    d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
    console.log("yessss")
    d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
    console.log(vkf4l)
    d1.style.color="red";
    }
    
    test1()

    };
    if(inregal.value==28&&infach.value==02&&inebene.value==00){
        var artike={
            name:artikelname.value,
            breite:inbreite.value,
            länge:inlänge.value,
            höhe:inhöhe.value,
            gewicht:ingewicht.value,
            stück:instück.value,
            stapel:stapel.value,
            ArtikelNummer:ArtikelNummer.value
        }
        localStorage.setItem("28-02-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("28-02-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b1>euronull.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=euronull.länge){
   
   
    c1.textContent="dast artikel  länge passt  ";
    c1.style.color="green";
    console.log(euronull.länge/2)
    console.log("c1")
}if(vkf4l>euronull.länge){
   
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
    d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
    console.log(vkf4l)
    d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
    console.log("yessss")
    d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
    console.log(vkf4l)
    d1.style.color="red";
    }
    
    test1()

    };
     if(inregal.value==28&&infach.value==03&&inebene.value==00){
        var artike={
            name:artikelname.value,
            breite:inbreite.value,
            länge:inlänge.value,
            höhe:inhöhe.value,
            gewicht:ingewicht.value,
            stück:instück.value,
            stapel:stapel.value,
            ArtikelNummer:ArtikelNummer.value
        }
        localStorage.setItem("28-03-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("28-03-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b1>euronull.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=euronull.länge){
   
   
    c1.textContent="dast artikel  länge passt  ";
    c1.style.color="green";
    console.log(euronull.länge/2)
    console.log("c1")
}if(vkf4l>euronull.länge){
   
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
    d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
    console.log(vkf4l)
    d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
    console.log("yessss")
    d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
    console.log(vkf4l)
    d1.style.color="red";
    }
    
    test1()

    };
    if(inregal.value==28&&infach.value==04&&inebene.value==00){
        var artike={
            name:artikelname.value,
            breite:inbreite.value,
            länge:inlänge.value,
            höhe:inhöhe.value,
            gewicht:ingewicht.value,
            stück:instück.value,
            stapel:stapel.value,
            ArtikelNummer:ArtikelNummer.value
        }
        localStorage.setItem("28-04-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("28-04-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b1>euronull.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=euronull.länge){
   
   
    c1.textContent="dast artikel  länge passt  ";
    c1.style.color="green";
    console.log(euronull.länge/2)
    console.log("c1")
}if(vkf4l>euronull.länge){
   
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
    d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
    console.log(vkf4l)
    d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
    console.log("yessss")
    d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
    console.log(vkf4l)
    d1.style.color="red";
    }
    
    test2()

    };
    if(inregal.value==28&&infach.value==05&&inebene.value==00){
        var artike={
            name:artikelname.value,
            breite:inbreite.value,
            länge:inlänge.value,
            höhe:inhöhe.value,
            gewicht:ingewicht.value,
            stück:instück.value,
            stapel:stapel.value,
            ArtikelNummer:ArtikelNummer.value
        }
        localStorage.setItem("28-05-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("28-05-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b1>euronull.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=euronull.länge){
   
   
    c1.textContent="dast artikel  länge passt  ";
    c1.style.color="green";
    console.log(euronull.länge/2)
    console.log("c1")
}if(vkf4l>euronull.länge){
   
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
    d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
    console.log(vkf4l)
    d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
    console.log("yessss")
    d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
    console.log(vkf4l)
    d1.style.color="red";
    }
    
    test2()

    };
    if(inregal.value==28&&infach.value==06&&inebene.value==00){
        var artike={
            name:artikelname.value,
            breite:inbreite.value,
            länge:inlänge.value,
            höhe:inhöhe.value,
            gewicht:ingewicht.value,
            stück:instück.value,
            stapel:stapel.value,
            ArtikelNummer:ArtikelNummer.value
        }
        localStorage.setItem("28-06-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("28-06-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b1>euronull.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=euronull.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>euronull.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=euronull.länge){
   
   
    c1.textContent="dast artikel  länge passt  ";
    c1.style.color="green";
    console.log(euronull.länge/2)
    console.log("c1")
}if(vkf4l>euronull.länge){
   
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
} if(inlänge.value<=euronull.DoppelP){
console.log("yessss")
    d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
    console.log(vkf4l)
    d1.style.color="green";
}if(inlänge.value>euronull.DoppelP){
    console.log("yessss")
    d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
    console.log(vkf4l)
    d1.style.color="red";
    }
    
    test2()

    };
    if(inregal.value==28&&infach.value==07&&inebene.value==00){
        var artike={
            name:artikelname.value,
            breite:inbreite.value,
            länge:inlänge.value,
            höhe:inhöhe.value,
            gewicht:ingewicht.value,
            stück:instück.value,
            stapel:stapel.value,
            ArtikelNummer:ArtikelNummer.value
        }
        localStorage.setItem("28-07-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("28-07-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull2fach.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b1>euronull2fach.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=euronull2fach.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>euronull2fach.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=euronull2fach.länge){
   
   
    c1.textContent="dast artikel  länge passt  ";
    c1.style.color="green";
    console.log(euronull2fach.länge/2)
    console.log("c1")
}if(vkf4l>euronull2fach.länge){
   
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
} if(inlänge.value<=euronull2fach.DoppelP){
console.log("yessss")
    d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
    console.log(vkf4l)
    d1.style.color="green";
}if(inlänge.value>euronull2fach.DoppelP){
    console.log("yessss")
    d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
    console.log(vkf4l)
    d1.style.color="red";
    }
    
    test3()

    };
    if(inregal.value==28&&infach.value==08&&inebene.value==00){
        var artike={
            name:artikelname.value,
            breite:inbreite.value,
            länge:inlänge.value,
            höhe:inhöhe.value,
            gewicht:ingewicht.value,
            stück:instück.value,
            stapel:stapel.value,
            ArtikelNummer:ArtikelNummer.value
        }
        localStorage.setItem("28-08-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("28-08-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=euronull2fach.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b1>euronull2fach.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=euronull2fach.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>euronull2fach.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=euronull2fach.länge){
   
   
    c1.textContent="dast artikel  länge passt  ";
    c1.style.color="green";
    console.log(euronull2fach.länge/2)
    console.log("c1")
}if(vkf4l>euronull2fach.länge){
   
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
} if(inlänge.value<=euronull2fach.DoppelP){
console.log("yessss")
    d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
    console.log(vkf4l)
    d1.style.color="green";
}if(inlänge.value>euronull2fach.DoppelP){
    console.log("yessss")
    d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
    console.log(vkf4l)
    d1.style.color="red";
    }
    
    test3()

    };
   
   
    
   
   
   
}


 //breite vergleishen von 28-01-00 bis 28-01-00
function test1(){
    
    var br11=JSON.parse(localStorage.getItem("28-01-00"));
    var br12=JSON.parse(localStorage.getItem("28-02-00"));
    var br13=JSON.parse(localStorage.getItem("28-03-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(28-01-00 bis 28-03-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(28-01-00 bis 28-03-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
 
//breite vergleishen von 28-04-00 bis 28-06-00
function test2(){
    
    var br11=JSON.parse(localStorage.getItem("28-04-00"));
    var br12=JSON.parse(localStorage.getItem("28-05-00"));
    var br13=JSON.parse(localStorage.getItem("28-06-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(28-04-00 bis 28-06-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(28-04-00 bis 28-06-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//breite vergleishen von 28-07-00 bis 28-08-00 (2 fach)
function test3(){
    
    var br11=JSON.parse(localStorage.getItem("28-07-00"));
    var br12=JSON.parse(localStorage.getItem("28-08-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    if(breite11+breite12<=euronull2fach.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(28-04-00 bis 28-07-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12)
    } else if (breite11+breite12>euronull2fach.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(28-04-00 bis 28-08-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};


/////////////////////////regal 26\\\\\\\\\\\\\\\\\\\\\\\\

 //breite vergleishen von 26-01-00 bis 26-03-00
 function test4(){
    
    var br11=JSON.parse(localStorage.getItem("26-01-00"));
    var br12=JSON.parse(localStorage.getItem("26-02-00"));
    var br13=JSON.parse(localStorage.getItem("26-03-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(26-01-00 bis 26-03-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(26-01-00 bis 26-03-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
 //breite vergleishen von 26-04-00 bis 26-06-00
 function test5(){
    
    var br11=JSON.parse(localStorage.getItem("26-04-00"));
    var br12=JSON.parse(localStorage.getItem("26-05-00"));
    var br13=JSON.parse(localStorage.getItem("26-06-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(26-04-00 bis 26-06-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(26-04-00 bis 26-06-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
 //breite vergleishen von 26-07-00 bis 26-08-00
 function test6(){
    
    var br11=JSON.parse(localStorage.getItem("26-07-00"));
    var br12=JSON.parse(localStorage.getItem("26-08-00"));
   
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
   
    if(breite11+breite12<=euronull2fach.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(26-07-00 bis 26-09-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12)
    } else if (breite11+breite12>euronull2fach.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(26-07-00 bis 26-09-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
 //breite vergleishen von 26-09-00 bis 26-11-00
 function test7(){
    
    var br11=JSON.parse(localStorage.getItem("26-09-00"));
    var br12=JSON.parse(localStorage.getItem("26-10-00"));
    var br13=JSON.parse(localStorage.getItem("26-11-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(26-09-00 bis 26-11-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(26-09-00 bis 26-11-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
 //breite vergleishen von 26-12-00
 function test8(){
    
    var br11=JSON.parse(localStorage.getItem("26-12-00"));
  
    var breite11=parseInt(br11.breite);

    if(breite11<=fach12.breite){
        a0.textContent="Im Vergleich zur Breite der VKF (26-12-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11)
    } else if (breite11>fach12.breite){
        a0.textContent="Im Vergleich zur Breite der VKF (26-12-00  ) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
 //breite vergleishen von 26-13-00 bis 26-15-00
 function test9(){
    
    var br11=JSON.parse(localStorage.getItem("26-13-00"));
    var br12=JSON.parse(localStorage.getItem("26-14-00"));
    var br13=JSON.parse(localStorage.getItem("26-15-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(26-13-00 bis 26-15-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(26-13-00 bis 26-15-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//breite vergleishen von 26-16-00 bis 26-18-00
function test10(){
    
    var br11=JSON.parse(localStorage.getItem("26-16-00"));
    var br12=JSON.parse(localStorage.getItem("26-17-00"));
    var br13=JSON.parse(localStorage.getItem("26-18-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(26-16-00 bis 26-18-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(26-16-00 bis 26-18-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//breite vergleishen von 26-19-00 bis 26-21-00
function test11(){
    
    var br11=JSON.parse(localStorage.getItem("26-19-00"));
    var br12=JSON.parse(localStorage.getItem("26-20-00"));
    var br13=JSON.parse(localStorage.getItem("26-21-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(26-19-00 bis 26-21-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(26-19-00 bis 26-21-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//breite vergleishen von 26-22-00 bis 26-24-00
function test12(){
    
    var br11=JSON.parse(localStorage.getItem("26-22-00"));
    var br12=JSON.parse(localStorage.getItem("26-23-00"));
    var br13=JSON.parse(localStorage.getItem("26-24-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(26-22-00 bis 26-24-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(26-22-00 bis 26-24-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//breite vergleishen von 26-25-00 bis 26-26-00
function test12(){
    
    var br11=JSON.parse(localStorage.getItem("26-25-00"));
    var br12=JSON.parse(localStorage.getItem("26-26-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    
    if(breite11+breite12<=euronull2fach.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(26-25-00 bis 26-26-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12)
    } else if (breite11+breite12>euronull2fach.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(26-25-00 bis 26-26-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};



/////////////////////////regal 24\\\\\\\\\\\\\\\\\\\\\\\\
//breite vergleishen von 24-01-00 bis 24-03-00
function test241(){
    
    var br11=JSON.parse(localStorage.getItem("24-01-00"));
    var br12=JSON.parse(localStorage.getItem("24-02-00"));
    var br13=JSON.parse(localStorage.getItem("24-03-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(24-01-00 bis 24-03-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(24-01-00 bis 24-03-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//breite vergleishen von 24-04-00 bis 24-06-00
function test242(){
    
    var br11=JSON.parse(localStorage.getItem("24-04-00"));
    var br12=JSON.parse(localStorage.getItem("24-05-00"));
    var br13=JSON.parse(localStorage.getItem("24-06-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(24-04-00 bis 24-06-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(24-04-00 bis 24-06-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//breite vergleishen von 24-07-00 bis 24-09-00
function test243(){
    
    var br11=JSON.parse(localStorage.getItem("24-07-00"));
    var br12=JSON.parse(localStorage.getItem("24-08-00"));
    var br13=JSON.parse(localStorage.getItem("24-09-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(24-07-00 bis 24-09-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(24-07-00 bis 24-09-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//breite vergleishen von 24-10-00 bis 24-12-00
function test244(){
    
    var br11=JSON.parse(localStorage.getItem("24-10-00"));
    var br12=JSON.parse(localStorage.getItem("24-11-00"));
    var br13=JSON.parse(localStorage.getItem("24-12-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(24-10-00 bis 24-12-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(24-10-00 bis 24-12-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//breite vergleishen von 24-13-00 bis 24-15-00
function test245(){
    
    var br11=JSON.parse(localStorage.getItem("24-13-00"));
    var br12=JSON.parse(localStorage.getItem("24-14-00"));
    var br13=JSON.parse(localStorage.getItem("24-15-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(24-13-00 bis 24-15-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(24-13-00 bis 24-15-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//breite vergleishen von 24-16-00 bis 24-18-00
function test246(){
    
    var br11=JSON.parse(localStorage.getItem("24-16-00"));
    var br12=JSON.parse(localStorage.getItem("24-17-00"));
    var br13=JSON.parse(localStorage.getItem("24-18-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(24-16-00 bis 24-18-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(24-16-00 bis 24-18-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//breite vergleishen von 24-19-00 bis 24-21-00
function test247(){
    
    var br11=JSON.parse(localStorage.getItem("24-19-00"));
    var br12=JSON.parse(localStorage.getItem("24-20-00"));
    var br13=JSON.parse(localStorage.getItem("24-21-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(24-19-00 bis 24-21-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(24-19-00 bis 24-21-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//breite vergleishen von 24-22-00 bis 24-24-00
function test248(){
    
    var br11=JSON.parse(localStorage.getItem("24-22-00"));
    var br12=JSON.parse(localStorage.getItem("24-23-00"));
    var br13=JSON.parse(localStorage.getItem("24-24-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(24-22-00 bis 24-24-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(24-22-00 bis 24-24-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//breite vergleishen von 24-25-00 bis 24-27-00
function test249(){
    
    var br11=JSON.parse(localStorage.getItem("24-25-00"));
    var br12=JSON.parse(localStorage.getItem("24-26-00"));
    var br13=JSON.parse(localStorage.getItem("24-27-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(24-25-00 bis 24-27-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(24-25-00 bis 24-27-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//breite vergleishen von 24-31-00 bis 24-32-00
function test2410(){
    
    var br11=JSON.parse(localStorage.getItem("24-31-00"));
    var br12=JSON.parse(localStorage.getItem("24-32-00"));
  
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);

    if(breite11+breite12<=euronull2fach.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(24-31-00 bis 24-32-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12)
    } else if (breite11+breite12>euronull2fach.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(24-31-00 bis 24-32-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};

/////////regal 22\\\\\\\\\\\\\\\\
//breite vergleishen von 22-01-00 bis 22-03-00
function test221(){
    var br11=JSON.parse(localStorage.getItem("22-01-00"));
    var br12=JSON.parse(localStorage.getItem("22-02-00"));
    var br13=JSON.parse(localStorage.getItem("22-03-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(22-01-00 bis 22-03-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(22-01-00 bis 22-03-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//breite vergleishen von 22-04-00 bis 22-06-00
function test222(){
    var br11=JSON.parse(localStorage.getItem("22-04-00"));
    var br12=JSON.parse(localStorage.getItem("22-05-00"));
    var br13=JSON.parse(localStorage.getItem("22-06-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(22-04-00 bis 22-06-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(22-04-00 bis 22-06-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//breite vergleishen von 22-07-00 bis 22-09-00
function test223(){
    var br11=JSON.parse(localStorage.getItem("22-07-00"));
    var br12=JSON.parse(localStorage.getItem("22-08-00"));
    var br13=JSON.parse(localStorage.getItem("22-09-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(22-07-00 bis 22-09-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(22-07-00 bis 22-09-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//breite vergleishen von 22-10-00 bis 22-12-00
function test224(){
    var br11=JSON.parse(localStorage.getItem("22-10-00"));
    var br12=JSON.parse(localStorage.getItem("22-11-00"));
    var br13=JSON.parse(localStorage.getItem("22-12-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(22-10-00 bis 22-12-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(22-10-00 bis 22-12-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//breite vergleishen von 22-13-00 bis 22-14-00
function test225(){
    var br11=JSON.parse(localStorage.getItem("22-13-00"));
    var br12=JSON.parse(localStorage.getItem("22-14-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    if(breite11+breite12<=euronull2fach.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(22-13-00 bis 22-14-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12)
    } else if (breite11+breite12>euronull2fach.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(22-13-00 bis 22-14-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//breite vergleishen von 22-15-00 
function test226(){
    var br11=JSON.parse(localStorage.getItem("22-15-00"));
   
    var breite11=parseInt(br11.breite);

    if(breite11<=fach12.breite){
        a0.textContent="Im Vergleich zur Breite der  Verkaufsfach(22-15-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11)
    } else if (breite11>fach12.breite){
        a0.textContent="Im Vergleich zur Breite der  Verkaufsfach(22-15-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//breite vergleishen von 22-16-00 bis 22-03-00
function test227(){
    var br11=JSON.parse(localStorage.getItem("22-16-00"));
    var br12=JSON.parse(localStorage.getItem("22-17-00"));
    var br13=JSON.parse(localStorage.getItem("22-18-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(22-16-00 bis 22-18-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(22-16-00 bis 22-18-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//breite vergleishen von 22-19-00 bis 22-21-00
function test228(){
    var br11=JSON.parse(localStorage.getItem("22-19-00"));
    var br12=JSON.parse(localStorage.getItem("22-20-00"));
    var br13=JSON.parse(localStorage.getItem("22-21-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(22-19-00 bis 22-21-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(22-19-00 bis 22-21-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//breite vergleishen von 22-22-00 bis 22-24-00
function test229(){
    var br11=JSON.parse(localStorage.getItem("22-22-00"));
    var br12=JSON.parse(localStorage.getItem("22-23-00"));
    var br13=JSON.parse(localStorage.getItem("22-24-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(22-22-00 bis 22-24-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(22-22-00 bis 22-24-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//breite vergleishen von 22-25-00 bis 22-27-00
function test2210(){
    var br11=JSON.parse(localStorage.getItem("22-25-00"));
    var br12=JSON.parse(localStorage.getItem("22-26-00"));
    var br13=JSON.parse(localStorage.getItem("22-27-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(22-25-00 bis 22-27-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(22-25-00 bis 22-27-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//breite vergleishen von 22-31-00 bis 22-33-00
function test2211(){
    var br11=JSON.parse(localStorage.getItem("22-31-00"));
    var br12=JSON.parse(localStorage.getItem("22-32-00"));
    var br13=JSON.parse(localStorage.getItem("22-33-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(22-31-00 bis 22-33-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(22-31-00 bis 22-33-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//breite vergleishen von 22-34-00 bis 22-36-00
function test2212(){
    var br11=JSON.parse(localStorage.getItem("22-34-00"));
    var br12=JSON.parse(localStorage.getItem("22-35-00"));
    var br13=JSON.parse(localStorage.getItem("22-36-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(22-34-00 bis 22-36-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(22-34-00 bis 22-36-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//breite vergleishen von 22-37-00 bis 22-36-00
function test2213(){
    var br11=JSON.parse(localStorage.getItem("22-37-00"));
    var br12=JSON.parse(localStorage.getItem("22-38-00"));
    var br13=JSON.parse(localStorage.getItem("22-39-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(22-37-00 bis 22-39-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(22-37-00 bis 22-39-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};






/////////regal 20\\\\\\\\\\\\\\\\
//breite vergleishen von 20-01-00 bis 20-03-00
function test201(){
    var br11=JSON.parse(localStorage.getItem("20-01-00"));
    var br12=JSON.parse(localStorage.getItem("20-02-00"));
    var br13=JSON.parse(localStorage.getItem("20-03-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(20-01-00 bis 20-03-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(20-01-00 bis 20-03-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//breite vergleishen von 20-04-00 bis 20-06-00

function test202(){
    var br11=JSON.parse(localStorage.getItem("20-04-00"));
    var br12=JSON.parse(localStorage.getItem("20-05-00"));
    var br13=JSON.parse(localStorage.getItem("20-06-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(20-04-00 bis 20-06-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(20-04-00 bis 20-06-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//breite vergleishen von 20-07-00 bis 20-06-00

function test203(){
    var br11=JSON.parse(localStorage.getItem("20-07-00"));
    var br12=JSON.parse(localStorage.getItem("20-08-00"));
    var br13=JSON.parse(localStorage.getItem("20-09-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(20-07-00 bis 20-09-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(20-07-00 bis 20-09-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//breite vergleishen von 20-10-00 bis 20-12-00

function test204(){
    var br11=JSON.parse(localStorage.getItem("20-10-00"));
    var br12=JSON.parse(localStorage.getItem("20-11-00"));
    var br13=JSON.parse(localStorage.getItem("20-12-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(20-10-00 bis 20-12-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(20-10-00 bis 20-12-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//breite vergleishen von 20-15-00 

function test205(){
    var br11=JSON.parse(localStorage.getItem("20-15-00"));
    var breite11=parseInt(br11.breite);
    if(breite11<=fach12.breite){
        a0.textContent="Im Vergleich zur Breite der Verkaufsfach(20-15-00 ) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11)
    } else if (breite11>fach12.breite){
        a0.textContent="Im Vergleich zur Breite der Verkaufsfach(20-15-00 ) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//breite vergleishen von 20-16-00 bis 20-18-00
function test206(){
    var br11=JSON.parse(localStorage.getItem("20-16-00"));
    var br12=JSON.parse(localStorage.getItem("20-17-00"));
    var br13=JSON.parse(localStorage.getItem("20-18-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(20-16-00 bis 20-18-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(20-16-00 bis 20-18-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//breite vergleishen von 20-19-00 bis 20-21-00
function test207(){
    var br11=JSON.parse(localStorage.getItem("20-19-00"));
    var br12=JSON.parse(localStorage.getItem("20-20-00"));
    var br13=JSON.parse(localStorage.getItem("20-21-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(20-19-00 bis 20-21-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(20-19-00 bis 20-21-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//breite vergleishen von 20-22-00 bis 20-24-00
function test208(){
    var br11=JSON.parse(localStorage.getItem("20-22-00"));
    var br12=JSON.parse(localStorage.getItem("20-23-00"));
    var br13=JSON.parse(localStorage.getItem("20-24-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(20-22-00 bis 20-24-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(20-22-00 bis 20-24-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//breite vergleishen von 20-25-00 bis 20-27-00
function test209(){
    var br11=JSON.parse(localStorage.getItem("20-25-00"));
    var br12=JSON.parse(localStorage.getItem("20-26-00"));
    var br13=JSON.parse(localStorage.getItem("20-27-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(20-25-00 bis 20-27-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(20-25-00 bis 20-27-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//breite vergleishen von 20-31-00 bis 20-33-00
function test2010(){
    var br11=JSON.parse(localStorage.getItem("20-31-00"));
    var br12=JSON.parse(localStorage.getItem("20-32-00"));
    var br13=JSON.parse(localStorage.getItem("20-33-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(20-31-00 bis 20-33-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(20-31-00 bis 20-33-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//breite vergleishen von 20-34-00 bis 20-36-00
function test2011(){
    var br11=JSON.parse(localStorage.getItem("20-34-00"));
    var br12=JSON.parse(localStorage.getItem("20-35-00"));
    var br13=JSON.parse(localStorage.getItem("20-36-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(20-34-00 bis 20-36-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(20-34-00 bis 20-36-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//breite vergleishen von 20-37-00 bis 20-36-00
function test2012(){
    var br11=JSON.parse(localStorage.getItem("20-37-00"));
    var br12=JSON.parse(localStorage.getItem("20-38-00"));
    var br13=JSON.parse(localStorage.getItem("20-39-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(20-37-00 bis 20-39-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>euronull.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(20-37-00 bis 20-39-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};


//localStorage.clear()