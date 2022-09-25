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
    let response = "";

    if (itemUrl === pageUrl) {
      response = ' aria-current="page"';
    }

    if (itemUrl.length > 1 && pageUrl.indexOf(itemUrl) === 0) {
      response += ' data-state="active"';
    }

    return response;
  },
  /**
   * Returns back some attributes based on whether the
   * link is internal or external
   *
   * @param {String} itemUrl The link in question
   * @returns {String} The attributes or empty
   */
  isInternal(itemUrl) {
    let response = "";

    if (!itemUrl.includes('//')) {
      response += ' data-is-internal="internal"';
    }

    return response;
  },

  /**
   * Returns the current year
   *
   * @returns {String} The attributes or empty
   */
  getCurrentYear() {
    return /\d{4}/.exec(Date())[0];
  },

  /**
   * Take an array of keys and return back items that match.
   * Note: items in the collection must have a key attribute in
   * Front Matter
   *
   * @param {Array} collection 11ty   collection
   * @param {Array} keys collection of keys
   * @returns {Array} result collection or   empty
   */
  filterCollectionByKeys(collection, keys) {
    return collection.filter(x => keys.  includes(x.data.key));
  },
};
