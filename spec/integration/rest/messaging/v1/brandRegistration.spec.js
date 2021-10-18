'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('BrandRegistration', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.messaging.v1.brandRegistrations('BNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'BNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://messaging.twilio.com/v1/a2p/BrandRegistrations/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'sid': 'BN0044409f7e067e279523808d267e2d85',
          'account_sid': 'AC78e8e67fc0246521490fb9907fd0c165',
          'customer_profile_bundle_sid': 'BU3344409f7e067e279523808d267e2d85',
          'a2p_profile_bundle_sid': 'BU3344409f7e067e279523808d267e2d85',
          'date_created': '2021-01-27T14:18:35Z',
          'date_updated': '2021-01-27T14:18:36Z',
          'brand_type': 'STANDARD',
          'status': 'PENDING',
          'tcr_id': 'BXXXXXX',
          'failure_reason': 'Registration error',
          'url': 'https://messaging.twilio.com/v1/a2p/BrandRegistrations/BN0044409f7e067e279523808d267e2d85',
          'brand_score': 42,
          'brand_feedback': [
              'TAX_ID',
              'NONPROFIT'
          ],
          'identity_status': 'VERIFIED',
          'russell_3000': true,
          'tax_exempt_status': '501c3',
          'skip_automatic_sec_vet': false,
          'mock': false,
          'links': {
              'brand_vettings': 'https://messaging.twilio.com/v1/a2p/BrandRegistrations/BN0044409f7e067e279523808d267e2d85/Vettings'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.messaging.v1.brandRegistrations('BNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
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
              'first_page_url': 'https://messaging.twilio.com/v1/a2p/BrandRegistrations?PageSize=50&Page=0',
              'previous_page_url': null,
              'next_page_url': null,
              'key': 'data',
              'url': 'https://messaging.twilio.com/v1/a2p/BrandRegistrations?PageSize=50&Page=0'
          },
          'data': [
              {
                  'sid': 'BN0044409f7e067e279523808d267e2d85',
                  'account_sid': 'AC78e8e67fc0246521490fb9907fd0c165',
                  'customer_profile_bundle_sid': 'BU3344409f7e067e279523808d267e2d85',
                  'a2p_profile_bundle_sid': 'BU3344409f7e067e279523808d267e2d85',
                  'date_created': '2021-01-27T14:18:35Z',
                  'date_updated': '2021-01-27T14:18:36Z',
                  'brand_type': 'STANDARD',
                  'status': 'APPROVED',
                  'tcr_id': 'BXXXXXX',
                  'failure_reason': 'Registration error',
                  'url': 'https://messaging.twilio.com/v1/a2p/BrandRegistrations/BN0044409f7e067e279523808d267e2d85',
                  'brand_score': 42,
                  'brand_feedback': [
                      'TAX_ID',
                      'NONPROFIT'
                  ],
                  'identity_status': 'VERIFIED',
                  'russell_3000': true,
                  'tax_exempt_status': '501c3',
                  'skip_automatic_sec_vet': false,
                  'mock': false,
                  'links': {
                      'brand_vettings': 'https://messaging.twilio.com/v1/a2p/BrandRegistrations/BN0044409f7e067e279523808d267e2d85/Vettings'
                  }
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.messaging.v1.brandRegistrations.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://messaging.twilio.com/v1/a2p/BrandRegistrations?PageSize=50&Page=0',
              'previous_page_url': null,
              'next_page_url': null,
              'key': 'data',
              'url': 'https://messaging.twilio.com/v1/a2p/BrandRegistrations?PageSize=50&Page=0'
          },
          'data': [
              {
                  'sid': 'BN0044409f7e067e279523808d267e2d85',
                  'account_sid': 'AC78e8e67fc0246521490fb9907fd0c165',
                  'customer_profile_bundle_sid': 'BU3344409f7e067e279523808d267e2d85',
                  'a2p_profile_bundle_sid': 'BU3344409f7e067e279523808d267e2d85',
                  'date_created': '2021-01-27T14:18:35Z',
                  'date_updated': '2021-01-27T14:18:36Z',
                  'brand_type': 'STANDARD',
                  'status': 'APPROVED',
                  'tcr_id': 'BXXXXXX',
                  'failure_reason': 'Registration error',
                  'url': 'https://messaging.twilio.com/v1/a2p/BrandRegistrations/BN0044409f7e067e279523808d267e2d85',
                  'brand_score': 42,
                  'brand_feedback': [
                      'TAX_ID',
                      'NONPROFIT'
                  ],
                  'identity_status': 'VERIFIED',
                  'russell_3000': true,
                  'tax_exempt_status': '501c3',
                  'skip_automatic_sec_vet': false,
                  'mock': false,
                  'links': {
                      'brand_vettings': 'https://messaging.twilio.com/v1/a2p/BrandRegistrations/BN0044409f7e067e279523808d267e2d85/Vettings'
                  }
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.messaging.v1.brandRegistrations.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://messaging.twilio.com/v1/a2p/BrandRegistrations',
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
              'first_page_url': 'https://messaging.twilio.com/v1/a2p/BrandRegistrations?PageSize=50&Page=0',
              'previous_page_url': null,
              'next_page_url': null,
              'key': 'data',
              'url': 'https://messaging.twilio.com/v1/a2p/BrandRegistrations?PageSize=50&Page=0'
          },
          'data': [
              {
                  'sid': 'BN0044409f7e067e279523808d267e2d85',
                  'account_sid': 'AC78e8e67fc0246521490fb9907fd0c165',
                  'customer_profile_bundle_sid': 'BU3344409f7e067e279523808d267e2d85',
                  'a2p_profile_bundle_sid': 'BU3344409f7e067e279523808d267e2d85',
                  'date_created': '2021-01-27T14:18:35Z',
                  'date_updated': '2021-01-27T14:18:36Z',
                  'brand_type': 'STANDARD',
                  'status': 'APPROVED',
                  'tcr_id': 'BXXXXXX',
                  'failure_reason': 'Registration error',
                  'url': 'https://messaging.twilio.com/v1/a2p/BrandRegistrations/BN0044409f7e067e279523808d267e2d85',
                  'brand_score': 42,
                  'brand_feedback': [
                      'TAX_ID',
                      'NONPROFIT'
                  ],
                  'identity_status': 'VERIFIED',
                  'russell_3000': true,
                  'tax_exempt_status': '501c3',
                  'skip_automatic_sec_vet': false,
                  'mock': false,
                  'links': {
                      'brand_vettings': 'https://messaging.twilio.com/v1/a2p/BrandRegistrations/BN0044409f7e067e279523808d267e2d85/Vettings'
                  }
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.messaging.v1.brandRegistrations.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.messaging.v1.brandRegistrations.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://messaging.twilio.com/v1/a2p/BrandRegistrations';

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
              'first_page_url': 'https://messaging.twilio.com/v1/a2p/BrandRegistrations?PageSize=50&Page=0',
              'previous_page_url': null,
              'next_page_url': null,
              'key': 'data',
              'url': 'https://messaging.twilio.com/v1/a2p/BrandRegistrations?PageSize=50&Page=0'
          },
          'data': [
              {
                  'sid': 'BN0044409f7e067e279523808d267e2d85',
                  'account_sid': 'AC78e8e67fc0246521490fb9907fd0c165',
                  'customer_profile_bundle_sid': 'BU3344409f7e067e279523808d267e2d85',
                  'a2p_profile_bundle_sid': 'BU3344409f7e067e279523808d267e2d85',
                  'date_created': '2021-01-27T14:18:35Z',
                  'date_updated': '2021-01-27T14:18:36Z',
                  'brand_type': 'STANDARD',
                  'status': 'APPROVED',
                  'tcr_id': 'BXXXXXX',
                  'failure_reason': 'Registration error',
                  'url': 'https://messaging.twilio.com/v1/a2p/BrandRegistrations/BN0044409f7e067e279523808d267e2d85',
                  'brand_score': 42,
                  'brand_feedback': [
                      'TAX_ID',
                      'NONPROFIT'
                  ],
                  'identity_status': 'VERIFIED',
                  'russell_3000': true,
                  'tax_exempt_status': '501c3',
                  'skip_automatic_sec_vet': false,
                  'mock': false,
                  'links': {
                      'brand_vettings': 'https://messaging.twilio.com/v1/a2p/BrandRegistrations/BN0044409f7e067e279523808d267e2d85/Vettings'
                  }
              }
          ]
      };

      holodeck.mock(new Response(200, body));

      var promise = client.messaging.v1.brandRegistrations.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var opts = {
        customerProfileBundleSid: 'BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        a2PProfileBundleSid: 'BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var promise = client.messaging.v1.brandRegistrations.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://messaging.twilio.com/v1/a2p/BrandRegistrations';

      var values = {
        CustomerProfileBundleSid: 'BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        A2PProfileBundleSid: 'BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      };
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
          'sid': 'BN0044409f7e067e279523808d267e2d85',
          'account_sid': 'AC78e8e67fc0246521490fb9907fd0c165',
          'customer_profile_bundle_sid': 'BU0000009f7e067e279523808d267e2d90',
          'a2p_profile_bundle_sid': 'BU1111109f7e067e279523808d267e2d85',
          'date_created': '2021-01-28T10:45:51Z',
          'date_updated': '2021-01-28T10:45:51Z',
          'brand_type': 'STANDARD',
          'status': 'PENDING',
          'tcr_id': 'BXXXXXX',
          'failure_reason': 'Registration error',
          'url': 'https://messaging.twilio.com/v1/a2p/BrandRegistrations/BN0044409f7e067e279523808d267e2d85',
          'brand_score': 42,
          'brand_feedback': [
              'TAX_ID',
              'NONPROFIT'
          ],
          'identity_status': 'VERIFIED',
          'russell_3000': true,
          'tax_exempt_status': '501c3',
          'skip_automatic_sec_vet': false,
          'mock': false,
          'links': {
              'brand_vettings': 'https://messaging.twilio.com/v1/a2p/BrandRegistrations/BN0044409f7e067e279523808d267e2d85/Vettings'
          }
      };

      holodeck.mock(new Response(201, body));

      var opts = {
        customerProfileBundleSid: 'BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        a2PProfileBundleSid: 'BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var promise = client.messaging.v1.brandRegistrations.create(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
