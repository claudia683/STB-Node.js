'use strict';
 
var request = require('request');
var arrandom = require('arrandom');
 
var data = [
	{
		"course_id": 102,
		"badge_id": "https://d1ffx7ull4987f.cloudfront.net/images/courses/large_badge/11/anatomy-of-backbone-js-9856061c43aad32b00081bcc3bad4c19.png"
	},
	{
		"course_id": 104,
		"badge_id": "https://d1ffx7ull4987f.cloudfront.net/images/courses/large_badge/26/anatomy-of-backbone-js-part-2-0e88a63959ce35c5a7511004f4f4be7d.png"
	},
	{
		"course_id": 111,
		"badge_id": "https://d1ffx7ull4987f.cloudfront.net/images/courses/large_badge/25/try-r-a0fcb9f1893a2a771b287df5c086e0e4.png"
	},
	{
		"course_id": 112,
		"badge_id": "https://d1ffx7ull4987f.cloudfront.net/images/courses/large_badge/14/testing-with-rspec-28aac9e9dc98d373f4bce659214c5b3a.png"
	},
	{
		"course_id": 105,
		"badge_id": "https://d1ffx7ull4987f.cloudfront.net/images/courses/large_badge/2/rails-best-practices-b9e75f3638fce8cca1eec6b6c221d2f5.png"
	},
	{
		"course_id": 97,
		"badge_id": "https://d1ffx7ull4987f.cloudfront.net/images/courses/large_badge/4/functional-html5-css3-f88add668640fd2b172fc2ff418c1cf3.png"
	},
	{
		"course_id": 98,
		"badge_id": "https://d1ffx7ull4987f.cloudfront.net/images/courses/large_badge/3/jquery-air-first-flight-6072ff35bda50090240523d8bf034f45.png"
	},
	{
		"course_id": 101,
		"badge_id": "https://d1ffx7ull4987f.cloudfront.net/images/courses/large_badge/102/javascript-road-trip-part-2-d4fd45ae7ecb6601fe4a0c8d506ca306.png"
	},
	{
		"course_id": 28,
		"badge_id": "https://d1ffx7ull4987f.cloudfront.net/images/courses/large_badge/22/ruby-bits-part-2-59098ceb97c12ac640eebadf6a4da58a.png"
	},
	{
		"course_id": 22,
		"badge_id": "https://d1ffx7ull4987f.cloudfront.net/images/courses/large_badge/97/ios-operation-mapkit-1de49437d7999696885179345c443692.png"
	},
	{
		"course_id": 108,
		"badge_id": "https://d1ffx7ull4987f.cloudfront.net/images/courses/large_badge/30/git-real-2-68156caf5a53879b3d214f3b921e359f.png"
	}
];
 
var requestObj = {
	json: data,
	method: 'POST',
	url: 'http://localhost:8000'
};
 
(function _request () {
	requestObj.json = [arrandom(data)[0]];
	request(requestObj, function(err){
		if (err) console.log(err);
		setTimeout(_request, 1900);
	});
})();

