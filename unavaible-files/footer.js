document.addEventListener("DOMContentLoaded",()=>{
const footer = document.querySelector('.ezs-footer');

if(footer === null) return;

const lang = navigator.language;
const licenseName = lang.startsWith("tr") ? "MIT Lisansı" : lang.startsWith("az") ? "MIT Lisenziyası" : "MIT License";
  
footer.innerHTML = `
©${new Date().getFullYear()} <span onclick="location.href='https://ezora.pages.dev'" style="cursor:pointer;">Ezora™</span> – ${licenseName}
`;

footer.style.textAlign="center";
footer.style.marginBlock="20px";
footer.style.color="white";
});
