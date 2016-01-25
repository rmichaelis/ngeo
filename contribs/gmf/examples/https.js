/*
 * Redirect to https
 */
if (window.location.protocol == 'http:' &&
    window.location.hostname != 'localhost') {
  var restOfUrl = window.location.href.substr(5);
  /** @type {string|WindowLocation} */
  window.location = 'https:' + restOfUrl;
}
