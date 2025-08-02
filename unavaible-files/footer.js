document.addEventListener("DOMContentLoaded",()=>{
  document.querySelector('.ezs-footer').innerHTML = `
©${new Date().getFullYear()} <span onclick="location.href='https://ezora.pages.dev'" style="cursor:pointer;">Ezora™</span> – <a href="https://github.com/4614s/Ezora/tree/main/LICENSE.md" style="color: white;">Ezora Halk Lisansı v1</a>
`;

document.querySelector('.ezs-footer').style.textAlign="center";
document.querySelector('.ezs-footer').style.marginBlock="20px";
document.querySelector('.ezs-footer').style.color="white";
});
