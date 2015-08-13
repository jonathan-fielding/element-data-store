(function (window, document, undefined, factory) {
  if (typeof define === 'function' && define.amd) {
    define(function() {
        return factory(window, document, undefined);
    });
  }
  else if (typeof exports === 'object') {
    module.exports = factory;
  }
  else {
    window.elementDataStore = factory(window, document, undefined);
  }
})(window, document, undefined, function (window, document, undefined) {
    function ElementDataStore() {
        this.dict = {};
    }

    ElementDataStore.prototype = {

    }

    return new ElementDataStore();
});