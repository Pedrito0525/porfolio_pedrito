# Pedrito Parrilla — Portfolio

Modern, responsive single-page portfolio.

## Run locally

Open `index.html` in your browser, or use a simple server:

```bash
npx serve .
```

## Add your photo

1. Save your image as `assets/images/profile.JPG` (or `.jpg` / `.png`)
2. The site loads `profile.JPG` by default in `index.html`

Or set the `src` on the profile `<img>` in `index.html`:

```html
<img src="assets/images/profile.jpg" ... />
```

## Add Facebook link

In `index.html`, find the Facebook contact card and replace the disabled `<span>` with:

```html
<a href="https://facebook.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" class="contact-card">
  ...
</a>
```

## Deploy

Upload the folder to GitHub Pages, Netlify, or Vercel (static site).
