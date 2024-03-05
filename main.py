import requests
from bs4 import BeautifulSoup


def scrape_reddit_homepage():
    url = 'https://www.reddit.com/'
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'}

    # Sending a GET request to the URL
    response = requests.get(url, headers=headers)

    # Parsing the HTML content
    soup = BeautifulSoup(response.text, 'html.parser')

    # Finding all article tags with aria-label attribute
    articles = soup.find_all('article', {'aria-label': True})

    for article in articles:
        aria_label = article['aria-label']
        print("Aria Label:", aria_label)

        # Finding image URLs if present
        images = article.find_all('img', {'src': True})
        image_urls = [img['src'] for img in images]
        if image_urls:
            print("Image URLs:", image_urls)
        else:
            print("No Image URLs found")


if __name__ == "__main__":
    scrape_reddit_homepage()
