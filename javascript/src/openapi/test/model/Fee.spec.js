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
    instance = new WaaSOpenApiDocumentation.Fee();
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

  describe('Fee', function() {
    it('should create an instance of Fee', function() {
      // uncomment below and update the code to test Fee
      //var instane = new WaaSOpenApiDocumentation.Fee();
      //expect(instance).to.be.a(WaaSOpenApiDocumentation.Fee);
    });

    it('should have the property maxFeeAmount (base name: "maxFeeAmount")', function() {
      // uncomment below and update the code to test the property maxFeeAmount
      //var instance = new WaaSOpenApiDocumentation.Fee();
      //expect(instance).to.be();
    });

    it('should have the property tokenId (base name: "tokenId")', function() {
      // uncomment below and update the code to test the property tokenId
      //var instance = new WaaSOpenApiDocumentation.Fee();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new WaaSOpenApiDocumentation.Fee();
      //expect(instance).to.be();
    });

  });

}));
