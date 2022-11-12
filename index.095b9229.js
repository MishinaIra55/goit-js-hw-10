function e(){fetch("https://restcountries.com/v3.1/all").then((e=>e.json())).then((e=>console.log(e)))}e();({searchInput:document.querySelector("#search-box")}).searchInput.addEventListener("input",(function(e){e.preventDefault();const t=e.target.value;console.log(t)}));
//# sourceMappingURL=index.095b9229.js.map
