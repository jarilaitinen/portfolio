module.exports = config => {

    const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');
    
    // EN Work - Returns portfolio items, sorted by display order
    config.addCollection("work_en", (collection) => {
      return sortByDisplayOrder(
          collection.getFilteredByGlob("./src/en/work/*.md")
      );
    });

    // FI Work - Returns portfolio items, sorted by display order
    config.addCollection("work_fi", (collection) => {
      return sortByDisplayOrder(
          collection.getFilteredByGlob("./src/fi/work/*.md")
      );
    });

    // Set directories to pass through to the dist folder
    config.addPassthroughCopy('./src/images/');
  
    // Create a helpful production flag
    const isProduction = process.env.NODE_ENV === 'production';
  
  
    // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
    config.setUseGitIgnore(false);

  
      return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
          input: 'src',
          output: 'dist',
        }
      };
    };