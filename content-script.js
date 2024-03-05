// CSS styles
const style = document.createElement("style");
style.textContent = `
.marvel-article {
    position: relative;
}

.marvel-article::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 1); /* Black overlay with 50% opacity */
    z-index: 1; /* Ensure the overlay is above the article content */
}
`;

// Append the style to the document head
document.head.appendChild(style);

function checkForMarvelPosts() {
    const articles = document.querySelectorAll("article");

    articles.forEach((article) => {
        console.log(article.getAttribute("aria-label"));

        const articleText = article.textContent.toLowerCase();
        const containsMarvel = articleText.includes("marvel");

        if (containsMarvel) {
            article.classList.add("marvel-article"); // Add class to the article
        }
    });
}

// Run the function when the page loads
checkForMarvelPosts();

// Run the function when the user scrolls the page
window.addEventListener("scroll", checkForMarvelPosts);
