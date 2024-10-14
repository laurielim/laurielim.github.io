import { DateTime } from 'luxon'

export default {
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

    if (itemUrl.length > 1 && pageUrl && pageUrl.indexOf(itemUrl) === 0) {
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
   * Filters out the passed item from the passed collection
   * and randomises and limits them based on flags
   *
   * @param {Array} collection The 11ty collection we want to take from
   * @param {Object} item The item we want to exclude (often current page)
   * @param {Number} limit=2 How many items we want back
   * @param {Boolean} random=true Whether or not this should be randomised
   * @returns {Array} The resulting collection
   */
   getSiblingContent(collection, item, limit = 2, random = true) {
    let filteredItems = collection.filter(x => x.url !== item.url);

    if (random) {
      let counter = filteredItems.length;

      while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        counter--;

        let temp = filteredItems[counter];

        // Swap the last element with the random one
        filteredItems[counter] = filteredItems[index];
        filteredItems[index] = temp;
      }
    }

    // Lastly, trim to length
    if (limit > 0) {
      filteredItems = filteredItems.slice(0, limit);
    }

    return filteredItems;
  },

  getReadableDate(dateObj) {
    return DateTime.fromJSDate(dateObj).toFormat("LLLL dd, yyyy");
  },

  getISODate(dateObj) {
    return DateTime.fromJSDate(dateObj).toISODate();
  },
};
