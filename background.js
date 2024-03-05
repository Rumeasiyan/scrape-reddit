chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (
        changeInfo.status === "complete" &&
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
        redditDataArray = redditDataArray.concat(message.redditData);
    }
});

// Function to retrieve the scraped data array
function getRedditDataArray() {
    return redditDataArray;
}
