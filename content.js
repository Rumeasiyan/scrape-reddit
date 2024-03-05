// Define a function to inject the Python script
function injectScript() {
    const script = document.createElement("script");
    script.src = chrome.runtime.getURL("reddit_scraper.js");
    script.onload = () => {
        script.remove();
    };
    (document.head || document.documentElement).appendChild(script);
}

// Execute the script when the document is ready
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectScript);
} else {
    injectScript();
}
