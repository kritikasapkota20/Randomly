// import randomParagraph from "@random-paragraph"

import { faker } from "https://cdn.skypack.dev/@faker-js/faker";
const dropdown = document.getElementById("para")
for (let i = 1; i <= 10; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i; 
    dropdown.appendChild(option)
}

var text = "";
const generatetext = () => {
    text = faker.lorem.paragraph();
    return text
}
var getcontent = () => {
    document.getElementById("textarea").value = "";

    var fullpara = "";
    var words = document.getElementById("words").value;
    var para = document.getElementById("para").value;
    var aligntext = document.getElementById("txt").value;
    var fontsize = document.getElementById("font").value;
    var copyicon=document.getElementById("copy")
    console.log(fontsize)

    var fontf = document.getElementById("fontfamily").value;
    var textarea = document.getElementById("textarea");

    console.log(words)
    while (countword(fullpara) < words) {
        text = generatetext();
        fullpara += text;
    }
    const final = splitParagraph(fullpara, para)
    console.log(final.length);
    for (let i = 0; i < final.length; i++) {
        textarea.value += final[i] + "\n" + "\n";
    }
    textarea.style.textAlign = aligntext;
    //    textarea.style.fontsize=fontsize;
    textarea.style.fontSize = parseInt(fontsize)+"px";
    textarea.style.fontFamily=fontf;

    copyicon.addEventListener("click",()=>{
        textarea.select();
        document.execCommand("copy");
    })


}
function splitParagraph(paragraph, numParagraphs) {
    // First, split the paragraph into an array of words
    const words = paragraph.trim().split(/\s+/);

    // Calculate the number of words per paragraph
    const wordsPerParagraph = Math.ceil(words.length / numParagraphs);

    // Create an array to hold the paragraphs
    let paragraphs = [];

    for (let i = 0; i < numParagraphs; i++) {
        // Get the slice of words for the current paragraph
        const start = i * wordsPerParagraph;
        const end = start + wordsPerParagraph;

        // Join the slice of words into a paragraph and add it to the array
        paragraphs.push(words.slice(start, end).join(' '));
    }

    // Return the array of paragraphs
    return paragraphs;
}
const countword = (paragraph) => {
    const words = paragraph.trim().split(/\s+/).filter(word => word.length > 0);
    return words.length;
}
const refresh = () => {
     document.getElementById("words").value="50"
    document.getElementById("para").value="3"
 document.getElementById("txt").value="Left"
document.getElementById("font").value="13"
document.getElementById("textarea").value=""
 document.getElementById("fontfamily").value="Arial"
 textarea.style.fontSize = 16 + "px"; 
 textarea.style.textAlign="left"

}
window.getcontent = getcontent;
window.refresh = refresh;

