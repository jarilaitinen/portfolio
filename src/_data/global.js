// Returns a random string. This helps to keep our asset cache fresh 
// Every time Eleventy re-builds, it will be a unique value.

module.exports = {
    random() {
      const segment = () => {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      };
      return `${segment()}-${segment()}-${segment()}`;
    }
  };