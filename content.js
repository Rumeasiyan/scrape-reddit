// content.js

document.addEventListener("DOMContentLoaded", function () {
    function scrapeRedditHomepage() {
        const articles = document.querySelectorAll("article[aria-label]");
        articles.forEach((article) => {
            const ariaLabel = article.getAttribute("aria-label");
            console.log("Aria Label:", ariaLabel);

            const images = article.querySelectorAll("img[src]");
            const imageUrls = Array.from(images).map((img) =>
                img.getAttribute("src")
            );
            if (imageUrls.length > 0) {
                console.log("Image URLs:", imageUrls);
            } else {
                console.log("No Image URLs found");
            }
        });
    }

    scrapeRedditHomepage();
});
