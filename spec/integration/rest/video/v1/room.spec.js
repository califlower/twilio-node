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

describe('Room', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.video.v1.rooms('RMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'RMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://video.twilio.com/v1/Rooms/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'status': 'in-progress',
          'type': 'peer-to-peer',
          'sid': 'RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'enable_turn': true,
          'unique_name': 'unique_name',
          'max_participants': 10,
          'max_concurrent_published_tracks': 0,
          'duration': 0,
          'status_callback_method': 'POST',
          'status_callback': null,
          'record_participants_on_connect': false,
          'video_codecs': [
              'VP8'
          ],
          'audio_only': false,
          'media_region': 'us1',
          'end_time': '2015-07-30T20:00:00Z',
          'url': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'participants': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants',
              'recordings': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings',
              'recording_rules': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/RecordingRules'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.video.v1.rooms('RMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
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

      var promise = client.video.v1.rooms.create();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://video.twilio.com/v1/Rooms';

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid create response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'status': 'in-progress',
          'type': 'peer-to-peer',
          'sid': 'RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'enable_turn': true,
          'unique_name': 'RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'max_concurrent_published_tracks': 0,
          'max_participants': 10,
          'duration': 0,
          'status_callback_method': 'POST',
          'status_callback': null,
          'record_participants_on_connect': false,
          'video_codecs': [
              'VP8'
          ],
          'media_region': 'us1',
          'audio_only': false,
          'end_time': '2015-07-30T20:00:00Z',
          'url': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'participants': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants',
              'recordings': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings',
              'recording_rules': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/RecordingRules'
          }
      };

      holodeck.mock(new Response(201, body));

      var promise = client.video.v1.rooms.create();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create_webrtc_go response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'status': 'in-progress',
          'type': 'go',
          'sid': 'RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'enable_turn': true,
          'unique_name': 'room1',
          'max_participants': 10,
          'max_concurrent_published_tracks': 0,
          'duration': 0,
          'status_callback_method': 'POST',
          'status_callback': null,
          'record_participants_on_connect': false,
          'video_codecs': [
              'VP8'
          ],
          'media_region': 'us1',
          'audio_only': false,
          'end_time': '2015-07-30T20:00:00Z',
          'url': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'participants': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants',
              'recordings': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings',
              'recording_rules': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/RecordingRules'
          }
      };

      holodeck.mock(new Response(201, body));

      var promise = client.video.v1.rooms.create();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create_group_rooms response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'status': 'in-progress',
          'type': 'group',
          'sid': 'RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'enable_turn': true,
          'unique_name': 'grouproom',
          'max_participants': 50,
          'max_concurrent_published_tracks': 170,
          'duration': 0,
          'status_callback_method': 'POST',
          'status_callback': null,
          'record_participants_on_connect': false,
          'video_codecs': [
              'VP8'
          ],
          'media_region': 'us1',
          'audio_only': false,
          'end_time': '2015-07-30T20:00:00Z',
          'url': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'participants': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants',
              'recordings': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings',
              'recording_rules': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/RecordingRules'
          }
      };

      holodeck.mock(new Response(201, body));

      var promise = client.video.v1.rooms.create();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create_group_rooms_with_audio_only_enabled response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'status': 'in-progress',
          'type': 'group',
          'sid': 'RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'enable_turn': true,
          'unique_name': 'grouproom',
          'max_participants': 50,
          'max_concurrent_published_tracks': 170,
          'duration': 0,
          'status_callback_method': 'POST',
          'status_callback': null,
          'record_participants_on_connect': false,
          'video_codecs': [],
          'media_region': 'us1',
          'audio_only': true,
          'end_time': '2015-07-30T20:00:00Z',
          'url': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'participants': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants',
              'recordings': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings',
              'recording_rules': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/RecordingRules'
          }
      };

      holodeck.mock(new Response(201, body));

      var promise = client.video.v1.rooms.create();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create_small_group_rooms response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'status': 'in-progress',
          'type': 'group-small',
          'sid': 'RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'enable_turn': true,
          'unique_name': 'SmallDailyStandup',
          'max_participants': 4,
          'max_concurrent_published_tracks': 170,
          'duration': 0,
          'status_callback_method': 'POST',
          'status_callback': null,
          'record_participants_on_connect': false,
          'video_codecs': [
              'VP8'
          ],
          'media_region': 'us1',
          'audio_only': false,
          'end_time': '2015-07-30T20:00:00Z',
          'url': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'participants': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants',
              'recordings': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings',
              'recording_rules': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/RecordingRules'
          }
      };

      holodeck.mock(new Response(201, body));

      var promise = client.video.v1.rooms.create();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create_large_group_rooms response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'status': 'in-progress',
          'type': 'group',
          'sid': 'RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'enable_turn': true,
          'unique_name': 'MyWebinar',
          'max_participants': 50,
          'max_concurrent_published_tracks': 16,
          'duration': 0,
          'status_callback_method': 'POST',
          'status_callback': null,
          'record_participants_on_connect': false,
          'video_codecs': [
              'VP8'
          ],
          'media_region': 'us1',
          'audio_only': false,
          'end_time': '2015-07-30T20:00:00Z',
          'url': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'participants': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants',
              'recordings': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings',
              'recording_rules': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/RecordingRules'
          }
      };

      holodeck.mock(new Response(201, body));

      var promise = client.video.v1.rooms.create();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create_large_group_rooms_with_audio_only_enabled response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'status': 'in-progress',
          'type': 'group',
          'sid': 'RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'enable_turn': true,
          'unique_name': 'MyWebinar',
          'max_participants': 50,
          'max_concurrent_published_tracks': 16,
          'duration': 0,
          'status_callback_method': 'POST',
          'status_callback': null,
          'record_participants_on_connect': false,
          'video_codecs': [],
          'media_region': 'us1',
          'audio_only': true,
          'end_time': '2015-07-30T20:00:00Z',
          'url': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'participants': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants',
              'recordings': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings',
              'recording_rules': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/RecordingRules'
          }
      };

      holodeck.mock(new Response(201, body));

      var promise = client.video.v1.rooms.create();
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
          'rooms': [
              {
                  'sid': 'RM4070b618362c1682b2385b1f9982833c',
                  'status': 'completed',
                  'date_created': '2017-04-03T22:21:49Z',
                  'date_updated': '2017-04-03T22:21:51Z',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'type': 'peer-to-peer',
                  'enable_turn': true,
                  'unique_name': 'RM4070b618362c1682b2385b1f9982833c',
                  'status_callback': null,
                  'status_callback_method': 'POST',
                  'end_time': '2017-04-03T22:21:51Z',
                  'duration': 2,
                  'max_participants': 10,
                  'max_concurrent_published_tracks': 10,
                  'record_participants_on_connect': false,
                  'video_codecs': [
                      'VP8'
                  ],
                  'media_region': 'us1',
                  'audio_only': false,
                  'url': 'https://video.twilio.com/v1/Rooms/RM4070b618362c1682b2385b1f9982833c',
                  'links': {
                      'participants': 'https://video.twilio.com/v1/Rooms/RM4070b618362c1682b2385b1f9982833c/Participants',
                      'recordings': 'https://video.twilio.com/v1/Rooms/RM4070b618362c1682b2385b1f9982833c/Recordings',
                      'recording_rules': 'https://video.twilio.com/v1/Rooms/RM4070b618362c1682b2385b1f9982833c/RecordingRules'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://video.twilio.com/v1/Rooms?Status=completed&PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://video.twilio.com/v1/Rooms?Status=completed&PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'rooms'
          }
      };
      holodeck.mock(new Response(200, body));
      client.video.v1.rooms.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'rooms': [
              {
                  'sid': 'RM4070b618362c1682b2385b1f9982833c',
                  'status': 'completed',
                  'date_created': '2017-04-03T22:21:49Z',
                  'date_updated': '2017-04-03T22:21:51Z',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'type': 'peer-to-peer',
                  'enable_turn': true,
                  'unique_name': 'RM4070b618362c1682b2385b1f9982833c',
                  'status_callback': null,
                  'status_callback_method': 'POST',
                  'end_time': '2017-04-03T22:21:51Z',
                  'duration': 2,
                  'max_participants': 10,
                  'max_concurrent_published_tracks': 10,
                  'record_participants_on_connect': false,
                  'video_codecs': [
                      'VP8'
                  ],
                  'media_region': 'us1',
                  'audio_only': false,
                  'url': 'https://video.twilio.com/v1/Rooms/RM4070b618362c1682b2385b1f9982833c',
                  'links': {
                      'participants': 'https://video.twilio.com/v1/Rooms/RM4070b618362c1682b2385b1f9982833c/Participants',
                      'recordings': 'https://video.twilio.com/v1/Rooms/RM4070b618362c1682b2385b1f9982833c/Recordings',
                      'recording_rules': 'https://video.twilio.com/v1/Rooms/RM4070b618362c1682b2385b1f9982833c/RecordingRules'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://video.twilio.com/v1/Rooms?Status=completed&PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://video.twilio.com/v1/Rooms?Status=completed&PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'rooms'
          }
      };
      holodeck.mock(new Response(200, body));
      client.video.v1.rooms.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://video.twilio.com/v1/Rooms',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'rooms': [
              {
                  'sid': 'RM4070b618362c1682b2385b1f9982833c',
                  'status': 'completed',
                  'date_created': '2017-04-03T22:21:49Z',
                  'date_updated': '2017-04-03T22:21:51Z',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'type': 'peer-to-peer',
                  'enable_turn': true,
                  'unique_name': 'RM4070b618362c1682b2385b1f9982833c',
                  'status_callback': null,
                  'status_callback_method': 'POST',
                  'end_time': '2017-04-03T22:21:51Z',
                  'duration': 2,
                  'max_participants': 10,
                  'max_concurrent_published_tracks': 10,
                  'record_participants_on_connect': false,
                  'video_codecs': [
                      'VP8'
                  ],
                  'media_region': 'us1',
                  'audio_only': false,
                  'url': 'https://video.twilio.com/v1/Rooms/RM4070b618362c1682b2385b1f9982833c',
                  'links': {
                      'participants': 'https://video.twilio.com/v1/Rooms/RM4070b618362c1682b2385b1f9982833c/Participants',
                      'recordings': 'https://video.twilio.com/v1/Rooms/RM4070b618362c1682b2385b1f9982833c/Recordings',
                      'recording_rules': 'https://video.twilio.com/v1/Rooms/RM4070b618362c1682b2385b1f9982833c/RecordingRules'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://video.twilio.com/v1/Rooms?Status=completed&PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://video.twilio.com/v1/Rooms?Status=completed&PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'rooms'
          }
      };
      holodeck.mock(new Response(200, body));
      client.video.v1.rooms.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.video.v1.rooms.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://video.twilio.com/v1/Rooms';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = {
          'rooms': [],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://video.twilio.com/v1/Rooms?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://video.twilio.com/v1/Rooms?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'rooms'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.video.v1.rooms.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_with_status response',
    function(done) {
      var body = {
          'rooms': [
              {
                  'sid': 'RM4070b618362c1682b2385b1f9982833c',
                  'status': 'completed',
                  'date_created': '2017-04-03T22:21:49Z',
                  'date_updated': '2017-04-03T22:21:51Z',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'type': 'peer-to-peer',
                  'enable_turn': true,
                  'unique_name': 'RM4070b618362c1682b2385b1f9982833c',
                  'status_callback': null,
                  'status_callback_method': 'POST',
                  'end_time': '2017-04-03T22:21:51Z',
                  'duration': 2,
                  'max_participants': 10,
                  'max_concurrent_published_tracks': 10,
                  'record_participants_on_connect': false,
                  'video_codecs': [
                      'VP8'
                  ],
                  'media_region': 'us1',
                  'audio_only': false,
                  'url': 'https://video.twilio.com/v1/Rooms/RM4070b618362c1682b2385b1f9982833c',
                  'links': {
                      'participants': 'https://video.twilio.com/v1/Rooms/RM4070b618362c1682b2385b1f9982833c/Participants',
                      'recordings': 'https://video.twilio.com/v1/Rooms/RM4070b618362c1682b2385b1f9982833c/Recordings',
                      'recording_rules': 'https://video.twilio.com/v1/Rooms/RM4070b618362c1682b2385b1f9982833c/RecordingRules'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://video.twilio.com/v1/Rooms?Status=completed&PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://video.twilio.com/v1/Rooms?Status=completed&PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'rooms'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.video.v1.rooms.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid update request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var opts = {status: 'in-progress'};
      var promise = client.video.v1.rooms('RMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'RMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://video.twilio.com/v1/Rooms/${sid}`;

      var values = {Status: 'in-progress', };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid update response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'status': 'completed',
          'type': 'peer-to-peer',
          'sid': 'RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'enable_turn': true,
          'unique_name': 'unique_name',
          'max_participants': 10,
          'max_concurrent_published_tracks': 10,
          'status_callback_method': 'POST',
          'status_callback': null,
          'record_participants_on_connect': false,
          'video_codecs': [
              'VP8'
          ],
          'media_region': 'us1',
          'audio_only': false,
          'end_time': '2015-07-30T20:00:00Z',
          'duration': 10,
          'url': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'participants': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants',
              'recordings': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings',
              'recording_rules': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/RecordingRules'
          }
      };

      holodeck.mock(new Response(200, body));

      var opts = {status: 'in-progress'};
      var promise = client.video.v1.rooms('RMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
