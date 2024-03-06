document.addEventListener("DOMContentLoaded", function () {
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
        if (
            changeInfo.status === "complete" &&
            tab &&
            tab.url &&
            /^https:\/\/www\.reddit\.com\//.test(tab.url)
        ) {
            chrome.scripting.executeScript({
                target: { tabId: tabId },
                files: ["content.js"],
            });
        }
    });
});
