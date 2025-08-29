import os
from flask import Flask, render_template, request
from webscraper import scrape_site

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get("SECRET_KEY", "supersecretkey")

@app.route("/signup", methods=["GET", "POST"])
def signup():
    return render_template("signup.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    return render_template("login.html")

@app.route("/logout")
def logout():
    return render_template("login.html")

@app.route("/app", methods=["GET"])
def app_main():
    return render_template("model.html")

@app.route("/", methods=["GET", "POST"])
def index():
    scraped_data = None
    error = None
    if request.method == "POST":
        url = request.form.get("url")
        if url:
            try:
                scraped_data = scrape_site(url)
            except Exception as e:
                error = str(e)
        else:
            error = "Please enter a valid URL."
    return render_template("index.html", scraped_data=scraped_data, error=error)

if __name__ == "__main__":
    app.run(debug=True)