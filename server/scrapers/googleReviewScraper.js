const puppeteer = require('puppeteer');

//Function to scrape google reviews
let scrape = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://www.google.com/maps/place/MX+Technologies,+Inc./@40.4296933,-111.8942771,17z/data=!4m7!3m6!1s0x874d900620024653:0x8e2dbb890d30bbfa!8m2!3d40.4296892!4d-111.8920884!9m1!1b1');
    await page.waitFor(1000);

    const result = await page.evaluate(() => {
        let fullName = document.querySelector('.section-review-title').innerText; //Save Full Name
        let postDate = document.querySelector('.section-review-publish-date').innerText;
        let starRating = document.querySelector('.section-review-stars').getAttribute('aria-label');
        let postReview = document.querySelector('.section-review-text').innerText;

        return {
            fullName: fullName,
            postDate: postDate,
            starRating: starRating,
            postReview: postReview
        }
    });

    browser.close();
    return result;
};


//Export Scraper
module.exports = {
    scrape
}