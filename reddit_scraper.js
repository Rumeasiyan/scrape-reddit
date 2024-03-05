// Contents of reddit_scraper.js
// This script will be injected into Reddit pages

function scrapeRedditHomepage() {
    const articles = document.querySelectorAll('article[aria-label]');

    const data = [];

    articles.forEach(article => {
        const ariaLabel = article.getAttribute('aria-label');
        const images = article.querySelectorAll('img[src]');
        const imageUrls = Array.from(images).map(img => img.getAttribute('src'));

        data.push({
            ariaLabel: ariaLabel,
            imageUrls: imageUrls.length > 0 ? imageUrls : null
        });
    });

    return data;
}

// Store the scraped data into a variable
const redditData = scrapeRedditHomepage();

// Send the scraped data to the background script
chrome.runtime.sendMessage({ redditData: redditData });
