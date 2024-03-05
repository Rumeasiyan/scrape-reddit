const axios = require("axios");
const cheerio = require("cheerio");

async function scrapeRedditHomepage() {
    const url = "https://www.reddit.com/";
    const headers = {
        "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
    };

    try {
        // Sending a GET request to the URL
        const response = await axios.get(url, { headers });

        // Loading the HTML content
        const $ = cheerio.load(response.data);

        // Finding all article tags with aria-label attribute
        const articles = $("article[aria-label]");

        articles.each((index, element) => {
            const ariaLabel = $(element).attr("aria-label");
            console.log("Aria Label:", ariaLabel);

            // Finding image URLs if present
            const images = $(element).find("img[src]");
            const imageUrls = images
                .map((index, img) => $(img).attr("src"))
                .get();
            if (imageUrls.length > 0) {
                console.log("Image URLs:", imageUrls);
            } else {
                console.log("No Image URLs found");
            }
        });
    } catch (error) {
        console.error("Error occurred:", error);
    }
}

scrapeRedditHomepage();
