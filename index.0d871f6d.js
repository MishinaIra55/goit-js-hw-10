!function(){function n(){fetch("https://restcountries.com/v3.1/all").then((function(n){return n.json()})).then((function(n){return console.log(n)}))}n();({searchInput:document.querySelector("#search-box")}).searchInput.addEventListener("input",(function(n){n.preventDefault();var t=n.target.value;console.log(t)}))}();
//# sourceMappingURL=index.0d871f6d.js.map
