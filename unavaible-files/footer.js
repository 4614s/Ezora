document.addEventListener("DOMContentLoaded",()=>{
let lang = navigator.language;
let licenseName = lang.startsWith("tr") ? "Ezora Halk Lisansı v1" : lang.startsWith("az") ? "Ezora İctimai Lisenziyası v1" : "Ezora Public License v1";
  
document.querySelector('.ezs-footer').innerHTML = `
©${new Date().getFullYear()} <span onclick="location.href='https://ezora.pages.dev'" style="cursor:pointer;">Ezora™</span> – <a href="https://github.com/4614s/Ezora/tree/main/LICENSE.md" style="color: white; text-decoration: none;">${licenseName}</a>
`;

document.querySelector('.ezs-footer').style.textAlign="center";
document.querySelector('.ezs-footer').style.marginBlock="20px";
document.querySelector('.ezs-footer').style.color="white";
});
