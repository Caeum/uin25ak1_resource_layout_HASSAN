const categoryButtons = document.querySelectorAll("#categories button");
const contentSection = document.getElementById("content");

function updateContent(category) {
    const selectedResource = resources.filter(res => res.category === category)[0];
    
    if (selectedResource) {
        contentSection.innerHTML = `
            <h2>${selectedResource.category}</h2>
            <p>${selectedResource.text}</p>
            <ul>
                ${selectedResource.sources.map(source => 
                    `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`
                ).join('')}
            </ul>
        `;
    }
}

categoryButtons.forEach(button => {
    button.addEventListener("click", function () {
        categoryButtons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
        updateContent(this.dataset.category);
    });
});

updateContent("HTML");
