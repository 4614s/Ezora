document.addEventListener("DOMContentLoaded",()=>{
let lang = navigator.language;
let licenseName = lang.startsWith("tr") ? "MIT Lisansı" : lang.startsWith("az") ? "MIT Lisenziyası" : "MIT License";
  
document.querySelector('.ezs-footer').innerHTML = `
©${new Date().getFullYear()} <span onclick="location.href='https://ezora.pages.dev'" style="cursor:pointer;">Ezora™</span> – ${licenseName}
`;

document.querySelector('.ezs-footer').style.textAlign="center";
document.querySelector('.ezs-footer').style.marginBlock="20px";
document.querySelector('.ezs-footer').style.color="white";
});
