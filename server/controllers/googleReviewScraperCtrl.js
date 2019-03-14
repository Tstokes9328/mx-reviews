const googleReviewScraper = require('../scrapers/googleReviewScraper');

//Controller Functions
function scrapeGoogleReviews(req, res){
    googleReviewScraper.scrape()
        .then(response => console.log(response)).catch(err => console.log(err));
};

//Export Controller Functions
module.exports = {
    scrapeGoogleReviews
};