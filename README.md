# Pinterest Scraper Service

This Node.js service uses Playwright to scrape images from Pinterest boards dynamically. It scrolls down the page to load more content if necessary, ensuring that the specified number of images is collected.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed.
- **Playwright**: The service uses Playwright for browser automation. Install Playwright via npm:

  ```bash
  npm install playwright

## USage
### Function Signature

```
scraperService(url: string, pins: number): Promise<Array<{src: string, alt: string}>>
```