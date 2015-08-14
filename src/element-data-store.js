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
        this.uuid =  1;
        this.namespace = 'DataStore';
    }

    ElementDataStore.prototype = {
        get: function(element, key) {
            if (typeof key === 'undefined') {
                return this.retrieveStore(element);
            }

            return this.retrieveStore(element)[key] || null;
        },

        set: function(element, key, value) {
            this.retrieveStore(element)[key] = value;
            return value;
        },

        remove: function(element, key) {
            if (typeof key !== 'undefined') {
                var store = this.retrieveStore(element);

                if (store[key]) {
                    delete store[key];
                }
            }
            else {
                var elementId = element[this.namespace];

                if (elementId) {
                    delete this.dict[elementId];
                    element[this.namespace] = null;
                }
            }
        },

        retrieveStore: function(element) {
            var namespace = this.namespace;
            var elementId = element[namespace];

            if(!elementId) {
                elementId = element[namespace] = this.uuid++;
                this.dict[elementId] = {};
            }

            return this.dict[elementId] || {};
        }
    };

    return new ElementDataStore();
});