
//Velger alle knappene i kategorinavnet.
const Buttons = document.querySelectorAll("#categories button");
//Velger området der innholdet skal vises.
const Sections = document.getElementById("content");

//Funksjon for å oppdatere innholdet på siden, basert på valgt kategori.
//Bruker .filter() ressursene for å finne den som matcher valgt kategori.
function contentUpdate(category) {
    const selectResource = resources.filter(res => res.category === category)[0];
    
    if (selectResource) {
//Hvis ressursen er funnet, oppdaterer vi innholdet på siden.
        Sections.innerHTML = 
        `<h2>${selectResource.category}</h2>
        <p>${selectResource.text}</p>
            <ul> 
                ${selectResource.sources.map(source => `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`).join('')}
            </ul>
        `;
    }
}

//Henter ut alle knappene og setter opp event listeners for dem.
Buttons.forEach(button => {
    button.addEventListener("click", function () {
//Fjerner 'active' klasse fra alle knapper og legger den til på den klikkede.
        Buttons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
//Oppdaterer innholdet for valgt kategori.
        contentUpdate(this.dataset.category);
    });
});

//Kaller updateContent med "HTML" som standardkategori når siden lastes.
contentUpdate("HTML");
