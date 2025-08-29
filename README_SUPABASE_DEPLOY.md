# Flask Web Scraper with Supabase Authentication & Deployment

## Supabase Authentication Setup
1. Your app now uses Supabase for user authentication (sign-up, login, session management).
2. The Supabase project URL and API key are set in `app.py`.
3. For production, store your Supabase API key and URL in environment variables for security:
   - `SUPABASE_URL`
   - `SUPABASE_API_KEY`

## Local Development
1. Install dependencies:
   ```bash
   pip install flask flask-wtf flask-login requests
   ```
2. Run the Flask app:
   ```bash
   python app.py
   ```
3. Access the app at `http://localhost:5000`.

## Deployment & Hosting
- **Recommended platforms:**
  - [Render](https://render.com/), [Heroku](https://heroku.com/), [Vercel](https://vercel.com/) (with Python backend), or [Fly.io](https://fly.io/).
- **Steps:**
  1. Push your code to GitHub.
  2. Create a new web service on your chosen platform.
  3. Set environment variables for `SUPABASE_URL`, `SUPABASE_API_KEY`, and `SECRET_KEY`.
  4. Ensure `requirements.txt` includes all dependencies.
  5. Configure build/start command: `python app.py`.

## Notes
- Supabase handles user authentication, password reset, and email confirmation workflows.
- For custom domains, SSL, and scaling, follow your platform's documentation.
- For advanced features (OAuth, social login, etc.), see [Supabase Auth Docs](https://supabase.com/docs/guides/auth).

## Security
- Never commit your Supabase API key or secret keys to public repositories.
- Always use HTTPS in production.

---
For more details, see your platform's deployment documentation and [Supabase Auth API Reference](https://supabase.com/docs/reference/auth/api).