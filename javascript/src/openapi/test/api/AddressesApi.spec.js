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
    instance = new WaaSOpenApiDocumentation.AddressesApi();
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

  describe('AddressesApi', function() {
    describe('v1AddressesList', function() {
      it('should call v1AddressesList successfully', function(done) {
        //uncomment below and update the code to test v1AddressesList
        //instance.v1AddressesList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1WalletsGetDepositAddress', function() {
      it('should call v1WalletsGetDepositAddress successfully', function(done) {
        //uncomment below and update the code to test v1WalletsGetDepositAddress
        //instance.v1WalletsGetDepositAddress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1WalletsListDepositAddresses', function() {
      it('should call v1WalletsListDepositAddresses successfully', function(done) {
        //uncomment below and update the code to test v1WalletsListDepositAddresses
        //instance.v1WalletsListDepositAddresses(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
