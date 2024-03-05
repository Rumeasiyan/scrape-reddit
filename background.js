// background.js

document.addEventListener("DOMContentLoaded", function () {
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
        if (
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
});
