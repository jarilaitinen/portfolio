module.exports = {
    /**
     * Change the
     *
     * @param {number} index The current index value
     * @param {number} length The length of the data array
     * @returns {number} The new index
     */
    goForth(index,length) {
        if (index < length-1) {
            index += 1;
        } 
        else if (index === length-1) {
            index = 0;
        };
        return index;
    },
    goBack(index,length) {
        if (index > 0) {
            index -= 1;
        } 
        else if (index === 0) {
            index = length-1;
        };
        return index;
    }

}
