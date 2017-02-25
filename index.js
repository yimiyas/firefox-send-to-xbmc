var self = require("sdk/self");

// a dummy function, to show how tests work.
// to see how to test this function, look at test/test-index.js
function dummy(text, callback) {
  console.log('eror text');
  callback(text);
  console.log('eror text2');
}

exports.dummy = dummy;
