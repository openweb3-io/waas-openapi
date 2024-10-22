/**
 * WaaS OpenAPI Documentation
 * This is a custody wallet service openapi server.
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.WaaSOpenApiDocumentation);
  }
}(this, function(expect, WaaSOpenApiDocumentation) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new WaaSOpenApiDocumentation.CursorPageToken();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CursorPageToken', function() {
    it('should create an instance of CursorPageToken', function() {
      // uncomment below and update the code to test CursorPageToken
      //var instane = new WaaSOpenApiDocumentation.CursorPageToken();
      //expect(instance).to.be.a(WaaSOpenApiDocumentation.CursorPageToken);
    });

    it('should have the property hasNext (base name: "has_next")', function() {
      // uncomment below and update the code to test the property hasNext
      //var instance = new WaaSOpenApiDocumentation.CursorPageToken();
      //expect(instance).to.be();
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instance = new WaaSOpenApiDocumentation.CursorPageToken();
      //expect(instance).to.be();
    });

    it('should have the property nextCursor (base name: "next_cursor")', function() {
      // uncomment below and update the code to test the property nextCursor
      //var instance = new WaaSOpenApiDocumentation.CursorPageToken();
      //expect(instance).to.be();
    });

    it('should have the property prevCursor (base name: "prev_cursor")', function() {
      // uncomment below and update the code to test the property prevCursor
      //var instance = new WaaSOpenApiDocumentation.CursorPageToken();
      //expect(instance).to.be();
    });

  });

}));
