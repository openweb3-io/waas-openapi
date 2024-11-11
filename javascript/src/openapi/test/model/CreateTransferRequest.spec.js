/**
 * WaaS OpenAPI Documentation
 * This is a WaaS OpenAPI Server.
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
    instance = new WaaSOpenApiDocumentation.CreateTransferRequest();
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

  describe('CreateTransferRequest', function() {
    it('should create an instance of CreateTransferRequest', function() {
      // uncomment below and update the code to test CreateTransferRequest
      //var instance = new WaaSOpenApiDocumentation.CreateTransferRequest();
      //expect(instance).to.be.a(WaaSOpenApiDocumentation.CreateTransferRequest);
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new WaaSOpenApiDocumentation.CreateTransferRequest();
      //expect(instance).to.be();
    });

    it('should have the property destination (base name: "destination")', function() {
      // uncomment below and update the code to test the property destination
      //var instance = new WaaSOpenApiDocumentation.CreateTransferRequest();
      //expect(instance).to.be();
    });

    it('should have the property extra (base name: "extra")', function() {
      // uncomment below and update the code to test the property extra
      //var instance = new WaaSOpenApiDocumentation.CreateTransferRequest();
      //expect(instance).to.be();
    });

    it('should have the property fee (base name: "fee")', function() {
      // uncomment below and update the code to test the property fee
      //var instance = new WaaSOpenApiDocumentation.CreateTransferRequest();
      //expect(instance).to.be();
    });

    it('should have the property memo (base name: "memo")', function() {
      // uncomment below and update the code to test the property memo
      //var instance = new WaaSOpenApiDocumentation.CreateTransferRequest();
      //expect(instance).to.be();
    });

    it('should have the property source (base name: "source")', function() {
      // uncomment below and update the code to test the property source
      //var instance = new WaaSOpenApiDocumentation.CreateTransferRequest();
      //expect(instance).to.be();
    });

    it('should have the property tokenId (base name: "token_id")', function() {
      // uncomment below and update the code to test the property tokenId
      //var instance = new WaaSOpenApiDocumentation.CreateTransferRequest();
      //expect(instance).to.be();
    });

    it('should have the property uid (base name: "uid")', function() {
      // uncomment below and update the code to test the property uid
      //var instance = new WaaSOpenApiDocumentation.CreateTransferRequest();
      //expect(instance).to.be();
    });

  });

}));
