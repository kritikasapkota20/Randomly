const urlicon = document.getElementById("urlicon");
const texticon = document.getElementById("texticon");
const vcardicon = document.getElementById("vcardicon");
const phoneicon = document.getElementById("phoneicon");
const divurl = document.getElementById("url");
const divtext = document.getElementById("text");
const divvcard = document.getElementById("vcard")
const divphone = document.getElementById("phonenums");
const qrdiv = document.getElementById("qrd");
const qrdivs = document.getElementById("qrv");
const qrdivdefault = document.getElementById("qrdefault");



let qrd="Hello This is qr";
new QRCode(qrdivdefault, {
    text: qrd,
    width: 256,
    height: 256
})
qrdivdefault.style.opacity=0.5;

urlicon.addEventListener("click", function () {
    document.getElementById("txt").value = "";
     document.getElementById("phonenum").value="";
    qrdiv.style.display = "none";
    divurl.style.display = "block";
    divtext.style.display = "none";
    divvcard.style.display = "none";
    divphone.style.display = "none";
    qrdivs.style.display = "none"
    qrdivdefault.style.display="block";




})
texticon.addEventListener("click", function () {
    document.getElementById("urls").value=""
    document.getElementById("phonenum").value="";


    qrdiv.style.display = "none";

    divtext.style.display = "block";
    divvcard.style.display = "none";
    divphone.style.display = "none";
    divurl.style.display = "none";
    qrdivs.style.display = "none";
    qrdivdefault.style.display="block";
    




})
vcardicon.addEventListener("click", function () {
    document.getElementById("urls").value=""
    document.getElementById("phonenum").value="";
    document.getElementById("txt").value = "";

    divurl.style.display = "none";
    divtext.style.display = "none";
    divphone.style.display = "none";
    divvcard.style.display = "block";
    btn1.style.display = "none";
    qrdiv.style.display = "none";
    qrdivs.style.display = "none"
    qrdivdefault.style.display="none";
        // qrdiv.style.marginRight = "200px";
        
})
phoneicon.addEventListener("click", function () {
    document.getElementById("urls").value=""
    document.getElementById("phonenum").value="";

    qrdivdefault.style.display="block";

    qrdiv.style.display = "none";

    divurl.style.display = "none";
    divtext.style.display = "none";
    divphone.style.display = "block";
    divvcard.style.display = "none";
    qrdivs.style.display = "none"

})


function generateQR() {
    let qrData = "";
    qrdiv.innerHTML = "";
    const url = document.getElementById("urls").value;
    const text = document.getElementById("txt").value;
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const mobile = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;
    const country = document.getElementById("country").value;
    const city = document.getElementById("city").value;
    const phone = document.getElementById("phonenum").value;
    let qrDat;
    if (text) {
        qrData = text;
    }
    else if (url) {
        let urls = "";
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            urls = "http://" + url;
            qrData = urls;
            // Automatically add "http://" if missing
        } else {
            qrData = url;
        }
        document.getElementById("txt").value = ""


    } 
     else if (phone) {
        qrData = `tel:${phone}`;
    }else if (fname || lname || mobile || email || country || city) {
        qrDat = `BEGIN:VCARD\nVERSION:3.0\nFN:${fname} ${lname}\nTEL;CELL:${mobile}\nEMAIL:${email}\nADR;HOME:;;${city};${country};;\nEND:VCARD`;}

    if (qrData) {
        new QRCode(qrdiv, {
            text: qrData,
            width: 256,
            height: 256
        })
        qrdiv.style.display = "block"
    }else if(qrDat){
            new QRCode(qrdivs, {
                text: qrDat,
                width: 256,
                height: 256
            })
            qrdivs.style.display = "block"
        }
        qrdiv.style.opacity=1;
        qrdivdefault.style.display="none"

  
    document.getElementById("vcardform").addEventListener("submit", function (event) {
        event.preventDefault();

        generateQR();
    });
}

window.generateQR = generateQR