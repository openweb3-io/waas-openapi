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
    instance = new WaaSOpenApiDocumentation.TokensApi();
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

  describe('TokensApi', function() {
    describe('v1TokensCreate', function() {
      it('should call v1TokensCreate successfully', function(done) {
        //uncomment below and update the code to test v1TokensCreate
        //instance.v1TokensCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1TokensList', function() {
      it('should call v1TokensList successfully', function(done) {
        //uncomment below and update the code to test v1TokensList
        //instance.v1TokensList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1TokensRetrieve', function() {
      it('should call v1TokensRetrieve successfully', function(done) {
        //uncomment below and update the code to test v1TokensRetrieve
        //instance.v1TokensRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1TokensUpdate', function() {
      it('should call v1TokensUpdate successfully', function(done) {
        //uncomment below and update the code to test v1TokensUpdate
        //instance.v1TokensUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
