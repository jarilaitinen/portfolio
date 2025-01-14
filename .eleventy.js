module.exports = config => {

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