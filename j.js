document.addEventListener("DOMContentLoaded", () =>
{
    const searchBox = document.getElementById("searchBox");
    const searchButton = document.getElementById("searchButton");
    const imageCards = document.querySelectorAll(".image-card");
    
    searchButton.addEventListener("click", () => {
        const query = searchBox.value.toLowerCase();
        imageCards.forEach(card => {
            const name = card.getAttribute("data-name").toLowerCase();
        if(name.includes(query)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
   imageCards.forEach(card => {
    const img = card.querySelector("img");
    img.addEventListener("click", () => {
        window.open(img.src, "_blank");
    });
   });
});