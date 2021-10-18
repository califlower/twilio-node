'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('BrandVetting', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var opts = {vettingProvider: 'campaign-verify'};
      var promise = client.messaging.v1.brandRegistrations('BNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .brandVettings.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var brandSid = 'BNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://messaging.twilio.com/v1/a2p/BrandRegistrations/${brandSid}/Vettings`;

      var values = {VettingProvider: 'campaign-verify', };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create response',
    function(done) {
      var body = {
          'account_sid': 'AC78e8e67fc0246521490fb9907fd0c165',
          'brand_sid': 'BN0044409f7e067e279523808d267e2d85',
          'brand_vetting_sid': 'VT12445353',
          'vetting_provider': 'CAMPAIGN_VERIFY',
          'vetting_id': 'cv|1.0|10DLC|NHDHBD',
          'vetting_class': 'POLITICAL',
          'vetting_status': 'PENDING',
          'date_created': '2021-01-27T14:18:35Z',
          'date_updated': '2021-01-27T14:18:35Z',
          'url': 'https://messaging.twilio.com/v1/a2p/BrandRegistrations/BN0044409f7e067e279523808d267e2d85/Vettings/VT12445353'
      };

      holodeck.mock(new Response(201, body));

      var opts = {vettingProvider: 'campaign-verify'};
      var promise = client.messaging.v1.brandRegistrations('BNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .brandVettings.create(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should treat the first each arg as a callback',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://messaging.twilio.com/v1/a2p/BrandRegistrations/BN0044409f7e067e279523808d267e2d85/Vettings?PageSize=50&Page=0',
              'previous_page_url': null,
              'next_page_url': null,
              'key': 'data',
              'url': 'https://messaging.twilio.com/v1/a2p/BrandRegistrations/BN0044409f7e067e279523808d267e2d85/Vettings?PageSize=50&Page=0'
          },
          'data': [
              {
                  'account_sid': 'AC78e8e67fc0246521490fb9907fd0c165',
                  'brand_sid': 'BN0044409f7e067e279523808d267e2d85',
                  'brand_vetting_sid': 'VT12445353',
                  'vetting_provider': 'CAMPAIGN_VERIFY',
                  'vetting_id': 'cv|1.0|10DLC|NHDHBD',
                  'vetting_class': 'POLITICAL',
                  'vetting_status': 'PENDING',
                  'date_created': '2021-01-27T14:18:35Z',
                  'date_updated': '2021-01-27T14:18:35Z',
                  'url': 'https://messaging.twilio.com/v1/a2p/BrandRegistrations/BN0044409f7e067e279523808d267e2d85/Vettings/VT12445353'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.messaging.v1.brandRegistrations('BNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                         .brandVettings.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://messaging.twilio.com/v1/a2p/BrandRegistrations/BN0044409f7e067e279523808d267e2d85/Vettings?PageSize=50&Page=0',
              'previous_page_url': null,
              'next_page_url': null,
              'key': 'data',
              'url': 'https://messaging.twilio.com/v1/a2p/BrandRegistrations/BN0044409f7e067e279523808d267e2d85/Vettings?PageSize=50&Page=0'
          },
          'data': [
              {
                  'account_sid': 'AC78e8e67fc0246521490fb9907fd0c165',
                  'brand_sid': 'BN0044409f7e067e279523808d267e2d85',
                  'brand_vetting_sid': 'VT12445353',
                  'vetting_provider': 'CAMPAIGN_VERIFY',
                  'vetting_id': 'cv|1.0|10DLC|NHDHBD',
                  'vetting_class': 'POLITICAL',
                  'vetting_status': 'PENDING',
                  'date_created': '2021-01-27T14:18:35Z',
                  'date_updated': '2021-01-27T14:18:35Z',
                  'url': 'https://messaging.twilio.com/v1/a2p/BrandRegistrations/BN0044409f7e067e279523808d267e2d85/Vettings/VT12445353'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.messaging.v1.brandRegistrations('BNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                         .brandVettings.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://messaging.twilio.com/v1/a2p/BrandRegistrations/${brandSid}/Vettings',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://messaging.twilio.com/v1/a2p/BrandRegistrations/BN0044409f7e067e279523808d267e2d85/Vettings?PageSize=50&Page=0',
              'previous_page_url': null,
              'next_page_url': null,
              'key': 'data',
              'url': 'https://messaging.twilio.com/v1/a2p/BrandRegistrations/BN0044409f7e067e279523808d267e2d85/Vettings?PageSize=50&Page=0'
          },
          'data': [
              {
                  'account_sid': 'AC78e8e67fc0246521490fb9907fd0c165',
                  'brand_sid': 'BN0044409f7e067e279523808d267e2d85',
                  'brand_vetting_sid': 'VT12445353',
                  'vetting_provider': 'CAMPAIGN_VERIFY',
                  'vetting_id': 'cv|1.0|10DLC|NHDHBD',
                  'vetting_class': 'POLITICAL',
                  'vetting_status': 'PENDING',
                  'date_created': '2021-01-27T14:18:35Z',
                  'date_updated': '2021-01-27T14:18:35Z',
                  'url': 'https://messaging.twilio.com/v1/a2p/BrandRegistrations/BN0044409f7e067e279523808d267e2d85/Vettings/VT12445353'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.messaging.v1.brandRegistrations('BNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                         .brandVettings.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.messaging.v1.brandRegistrations('BNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .brandVettings.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var brandSid = 'BNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://messaging.twilio.com/v1/a2p/BrandRegistrations/${brandSid}/Vettings`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read response',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://messaging.twilio.com/v1/a2p/BrandRegistrations/BN0044409f7e067e279523808d267e2d85/Vettings?PageSize=50&Page=0',
              'previous_page_url': null,
              'next_page_url': null,
              'key': 'data',
              'url': 'https://messaging.twilio.com/v1/a2p/BrandRegistrations/BN0044409f7e067e279523808d267e2d85/Vettings?PageSize=50&Page=0'
          },
          'data': [
              {
                  'account_sid': 'AC78e8e67fc0246521490fb9907fd0c165',
                  'brand_sid': 'BN0044409f7e067e279523808d267e2d85',
                  'brand_vetting_sid': 'VT12445353',
                  'vetting_provider': 'CAMPAIGN_VERIFY',
                  'vetting_id': 'cv|1.0|10DLC|NHDHBD',
                  'vetting_class': 'POLITICAL',
                  'vetting_status': 'PENDING',
                  'date_created': '2021-01-27T14:18:35Z',
                  'date_updated': '2021-01-27T14:18:35Z',
                  'url': 'https://messaging.twilio.com/v1/a2p/BrandRegistrations/BN0044409f7e067e279523808d267e2d85/Vettings/VT12445353'
              }
          ]
      };

      holodeck.mock(new Response(200, body));

      var promise = client.messaging.v1.brandRegistrations('BNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .brandVettings.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
