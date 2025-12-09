# animations

## Contact Form Setup (Netlify Forms)

The contact form uses **Netlify Forms** - a built-in feature that requires zero configuration for basic functionality.

### How it Works

1. The form in `contact.html` includes the `data-netlify="true"` attribute
2. When deployed to Netlify, forms are automatically detected and submissions are captured
3. Netlify stores all submissions in your site's admin panel under **Forms**

### Email Notifications

To receive email notifications when someone submits the form:

1. Go to your Netlify site dashboard
2. Navigate to **Site settings > Forms > Form notifications**
3. Click **Add notification**
4. Choose **Email notification**
5. Enter the email address where you want to receive submissions (e.g., `founder.auctusventures@gmail.com`)

### Spam Protection

Netlify includes built-in spam filtering. For additional protection, you can enable:
- **reCAPTCHA** - in Site settings > Forms > Form detection
- **Akismet** - Connect your Akismet API key in the same settings

### Local Testing

To test the form locally with Netlify CLI:

```bash
npm install -g netlify-cli
netlify dev
```

This starts a local dev server with Netlify Forms emulation.

### Previous Setup (Deprecated)

The site previously used Resend.com via the `/api/submit-contact.js` serverless function. This has been replaced with Netlify Forms for simplicity. The API directory and Neon database integration are no longer needed for contact form functionality

7. **Deploy** – Ensure the same environment variables exist in your hosting provider before deploying (`npm run deploy`).

The serverless function in `api/submit-contact.js` will log a warning if `DATABASE_URL` is missing so you can verify that Neon is wired up correctly.