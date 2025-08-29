import requests
from bs4 import BeautifulSoup

def scrape_site(url):
    response = requests.get(url)
    if response.status_code != 200:
        raise Exception(f"Failed to retrieve site: {response.status_code}")
    soup = BeautifulSoup(response.text, "html.parser")
    paragraphs = soup.find_all("p")
    return [p.get_text(strip=True) for p in paragraphs]