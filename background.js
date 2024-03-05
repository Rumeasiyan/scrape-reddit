chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (
        changeInfo &&
        changeInfo.status === "complete" &&
        tab &&
        tab.url &&
        tab.url.startsWith("https://www.reddit.com/")
    ) {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ["content.js"],
        });
    }
});

let redditDataArray = [];

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.redditData) {
        // Convert the array to JSON string
        const jsonData = JSON.stringify(message.redditData, null, 2);

        // Create a Blob containing the JSON data
        const blob = new Blob([jsonData], { type: "application/json" });

        // Create a URL for the Blob
        const blobUrl = URL.createObjectURL(blob);

        // Open the URL in a new tab
        chrome.tabs.create({ url: blobUrl });

        // Note: The Blob URL will be automatically revoked once the tab is closed
        console.log("redditData");
    }
});

// Function to retrieve the scraped data array
function getRedditDataArray() {
    return redditDataArray;
}
