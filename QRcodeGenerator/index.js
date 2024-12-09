const urlicon=document.getElementById("urlicon");
const texticon=document.getElementById("texticon");
const vcardicon=document.getElementById("vcardicon");
const phoneicon=document.getElementById("phoneicon");
const divurl=document.getElementById("url");
const divtext=document.getElementById("text");
const divvcard=document.getElementById("vcard")
const divphone=document.getElementById("phonenum");
const qrdiv=document.getElementById("qrd");



urlicon.addEventListener("click",function(){
    qrdiv.style.display="none";
divurl.style.display="block";
divtext.style.display="none";
divvcard.style.display="none";
divphone.style.display="none";
})
texticon.addEventListener("click",function(){
    qrdiv.style.display="none";

    divtext.style.display="block";
    divvcard.style.display="none";
divphone.style.display="none";
divurl.style.display="none";


})
vcardicon.addEventListener("click",function(){
    qrdiv.style.display="none";

divurl.style.display="none";
divtext.style.display="none";
divphone.style.display="none";
divvcard.style.display="block";
btn1.style.display="none"
})
phoneicon.addEventListener("click",function(){
    qrdiv.style.display="none";

    divurl.style.display="none";
    divtext.style.display="none";
    divphone.style.display="block";
    divvcard.style.display="none";
    })
    

function generateQR(){
    let qrData;
qrdiv.innerHTML="";
    const url=document.getElementById("urls").value;
    const text=document.getElementById("txt").value;
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const mobile = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;
    const country = document.getElementById("country").value;
    const city = document.getElementById("city").value;
    if(text){
qrData=text;
    }
   else if(url){
        qrData=url;
    } else if(fname||lname||mobile||email||country||city){
        qrData=`
        Firstname:${fname}
        Lastname:${lname}
        Contact Number:${mobile}
        Email:${email}
        Country:${country}
        City:${city}

        `
    }
    if(qrData){
new QRCode(qrdiv,{
    text:qrData,
    width:256,
    height:256
})
qrdiv.style.display="block"
    }
document.getElementById("vcardform").addEventListener("submit", function (event) {
    event.preventDefault(); 

    generateQR();
});
}

window.generateQR=generateQR