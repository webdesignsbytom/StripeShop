const path = require('path');
const { Sitemap } = require('react-router-sitemap');
const fs = require('fs');

// Import your AppRoutes component
const routes = require('./src/AppRoutes').default;

// Define the paths for dynamic routes
const paramsConfig = {
  '/portfolio-item/:itemId': [
    { itemId: '0' },
    { itemId: '1' },
  ],
};

// Generate the sitemap
const generateSitemap = () =>
  new Sitemap(routes)
    .applyParams(paramsConfig)
    .build('https://www.example.com')
    .save(path.resolve(__dirname, 'public', 'sitemap.xml'));

generateSitemap();
