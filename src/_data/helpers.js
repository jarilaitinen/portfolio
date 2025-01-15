
module.exports = {
    /**
     * Returns back some attributes based on whether the
     * link is active or a parent of an active item
     *
     * @param {String} itemUrl The link in question
     * @param {String} pageUrl The page context
     * @returns {String} The attributes or empty
     */
    getLinkActiveState(itemUrl, pageUrl) {
      let response = '';
  
      if (itemUrl === pageUrl) {
        response = ' aria-current="page"';
      }
  
      if (itemUrl.length > 1 && pageUrl.indexOf(itemUrl) === 0) {
        response += ' data-state="active"'; // css hook for a currently active nav item
      }
  
      return response;
    },
    /**
     * Returns back a longer text string from front matter with an embedded link
     * converted into a HTML link
     *
     * @param {String} fullString The entire text
     * @param {String} linkText The piece of the text to display as a link
     * @param {String} url The URL
     * @returns {Object} The full text with formatted link
     */
    splitUrlFromText(fullString, linkText, url) {
      const indexed = fullString.indexOf(linkText)

      this.startText = fullString.slice(0,indexed);
      this.linkInner = linkText;
      this.linkURL = url;
      this.endText = fullString.slice(indexed+linkText.length, fullString.length);

      return this; 
    }
    
  };