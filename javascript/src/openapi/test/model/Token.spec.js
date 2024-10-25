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
    instance = new WaaSOpenApiDocumentation.Token();
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

  describe('Token', function() {
    it('should create an instance of Token', function() {
      // uncomment below and update the code to test Token
      //var instane = new WaaSOpenApiDocumentation.Token();
      //expect(instance).to.be.a(WaaSOpenApiDocumentation.Token);
    });

    it('should have the property canDeposit (base name: "can_deposit")', function() {
      // uncomment below and update the code to test the property canDeposit
      //var instance = new WaaSOpenApiDocumentation.Token();
      //expect(instance).to.be();
    });

    it('should have the property canWithdraw (base name: "can_withdraw")', function() {
      // uncomment below and update the code to test the property canWithdraw
      //var instance = new WaaSOpenApiDocumentation.Token();
      //expect(instance).to.be();
    });

    it('should have the property contractAddress (base name: "contract_address")', function() {
      // uncomment below and update the code to test the property contractAddress
      //var instance = new WaaSOpenApiDocumentation.Token();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new WaaSOpenApiDocumentation.Token();
      //expect(instance).to.be();
    });

    it('should have the property decimals (base name: "decimals")', function() {
      // uncomment below and update the code to test the property decimals
      //var instance = new WaaSOpenApiDocumentation.Token();
      //expect(instance).to.be();
    });

    it('should have the property iconUrl (base name: "icon_url")', function() {
      // uncomment below and update the code to test the property iconUrl
      //var instance = new WaaSOpenApiDocumentation.Token();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new WaaSOpenApiDocumentation.Token();
      //expect(instance).to.be();
    });

    it('should have the property maxWithdrawAmount (base name: "max_withdraw_amount")', function() {
      // uncomment below and update the code to test the property maxWithdrawAmount
      //var instance = new WaaSOpenApiDocumentation.Token();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new WaaSOpenApiDocumentation.Token();
      //expect(instance).to.be();
    });

    it('should have the property minDepositAmount (base name: "min_deposit_amount")', function() {
      // uncomment below and update the code to test the property minDepositAmount
      //var instance = new WaaSOpenApiDocumentation.Token();
      //expect(instance).to.be();
    });

    it('should have the property minWithdrawAmount (base name: "min_withdraw_amount")', function() {
      // uncomment below and update the code to test the property minWithdrawAmount
      //var instance = new WaaSOpenApiDocumentation.Token();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new WaaSOpenApiDocumentation.Token();
      //expect(instance).to.be();
    });

    it('should have the property needMemo (base name: "need_memo")', function() {
      // uncomment below and update the code to test the property needMemo
      //var instance = new WaaSOpenApiDocumentation.Token();
      //expect(instance).to.be();
    });

    it('should have the property precision (base name: "precision")', function() {
      // uncomment below and update the code to test the property precision
      //var instance = new WaaSOpenApiDocumentation.Token();
      //expect(instance).to.be();
    });

    it('should have the property symbol (base name: "symbol")', function() {
      // uncomment below and update the code to test the property symbol
      //var instance = new WaaSOpenApiDocumentation.Token();
      //expect(instance).to.be();
    });

    it('should have the property totalSupply (base name: "total_supply")', function() {
      // uncomment below and update the code to test the property totalSupply
      //var instance = new WaaSOpenApiDocumentation.Token();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new WaaSOpenApiDocumentation.Token();
      //expect(instance).to.be();
    });

  });

}));
