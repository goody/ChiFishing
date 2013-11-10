'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1');

//weather underground API
angular.module('myApp.services')
	.factory('WunderService', ['$http', function($http){
		var weather = [];
		var url = "http://api.wunderground.com/api/23ee21fd286888f4/forecast/q/CA/San_Francisco.json";
		var getForecast = function(){
			var promise = $http.get(url).then(function(result) {
          	weather = result;
          	console.log("in http", weather);
		});
		return promise;
	};

	//testing
	weather = 
{
  "response": {
  "version":"0.1",
  "termsofService":"http://www.wunderground.com/weather/api/d/terms.html",
  "features": {
  "forecast": 1
  }
	}
		,
	"forecast":{
		"txt_forecast": {
		"date":"7:00 AM PST",
		"forecastday": [
		{
		"period":0,
		"icon":"partlycloudy",
		"icon_url":"http://icons-ak.wxug.com/i/c/k/partlycloudy.gif",
		"title":"Sunday",
		"fcttext":"Partly cloudy. High of 68F. Winds from the WSW at 5 to 10 mph.",
		"fcttext_metric":"Partly cloudy. High of 20C. Winds from the WSW at 5 to 20 km/h.",
		"pop":"0"
		}
		,
		{
		"period":1,
		"icon":"partlycloudy",
		"icon_url":"http://icons-ak.wxug.com/i/c/k/partlycloudy.gif",
		"title":"Sunday Night",
		"fcttext":"Partly cloudy. Fog overnight. Low of 46F. Winds less than 5 mph.",
		"fcttext_metric":"Partly cloudy. Fog overnight. Low of 8C. Winds less than 5 km/h.",
		"pop":"0"
		}
		,
		{
		"period":2,
		"icon":"mostlycloudy",
		"icon_url":"http://icons-ak.wxug.com/i/c/k/mostlycloudy.gif",
		"title":"Monday",
		"fcttext":"Mostly cloudy. Fog early. High of 70F. Winds less than 5 mph.",
		"fcttext_metric":"Mostly cloudy. Fog early. High of 21C. Winds less than 5 km/h.",
		"pop":"10"
		}
		,
		{
		"period":3,
		"icon":"mostlycloudy",
		"icon_url":"http://icons-ak.wxug.com/i/c/k/mostlycloudy.gif",
		"title":"Monday Night",
		"fcttext":"Mostly cloudy with a chance of rain after midnight. Low of 52F. Winds less than 5 mph. Chance of rain 20%.",
		"fcttext_metric":"Mostly cloudy with a chance of rain after midnight. Low of 11C. Winds less than 5 km/h.",
		"pop":"20"
		}
		,
		{
		"period":4,
		"icon":"partlycloudy",
		"icon_url":"http://icons-ak.wxug.com/i/c/k/partlycloudy.gif",
		"title":"Tuesday",
		"fcttext":"Clear with a chance of rain. High of 70F. Winds from the NNW at 5 to 10 mph shifting to the West in the afternoon. Chance of rain 20%.",
		"fcttext_metric":"Clear with a chance of rain. High of 21C. Winds from the NNW at 10 to 15 km/h shifting to the West in the afternoon.",
		"pop":"20"
		}
		,
		{
		"period":5,
		"icon":"partlycloudy",
		"icon_url":"http://icons-ak.wxug.com/i/c/k/partlycloudy.gif",
		"title":"Tuesday Night",
		"fcttext":"Clear in the evening, then overcast. Low of 52F. Winds from the NNW at 5 to 10 mph.",
		"fcttext_metric":"Clear in the evening, then overcast. Low of 11C. Winds from the NNW at 10 to 15 km/h.",
		"pop":"0"
		}
		,
		{
		"period":6,
		"icon":"partlycloudy",
		"icon_url":"http://icons-ak.wxug.com/i/c/k/partlycloudy.gif",
		"title":"Wednesday",
		"fcttext":"Overcast. High of 70F. Winds from the NNW at 5 to 10 mph.",
		"fcttext_metric":"Overcast. High of 21C. Winds from the NNW at 5 to 15 km/h.",
		"pop":"0"
		}
		,
		{
		"period":7,
		"icon":"mostlycloudy",
		"icon_url":"http://icons-ak.wxug.com/i/c/k/mostlycloudy.gif",
		"title":"Wednesday Night",
		"fcttext":"Overcast. Low of 54F. Winds from the NW at 5 to 10 mph.",
		"fcttext_metric":"Overcast. Low of 12C. Winds from the NW at 10 to 15 km/h.",
		"pop":"0"
		}
		]
		},
		"simpleforecast": {
		"forecastday": [
		{"date":{
	"epoch":"1384149600",
	"pretty":"10:00 PM PST on November 10, 2013",
	"day":10,
	"month":11,
	"year":2013,
	"yday":313,
	"hour":22,
	"min":"00",
	"sec":0,
	"isdst":"0",
	"monthname":"November",
	"monthname_short":"Nov",
	"weekday_short":"Sun",
	"weekday":"Sunday",
	"ampm":"PM",
	"tz_short":"PST",
	"tz_long":"America/Los_Angeles"
},
		"period":1,
		"high": {
		"fahrenheit":"68",
		"celsius":"20"
		},
		"low": {
		"fahrenheit":"46",
		"celsius":"8"
		},
		"conditions":"Partly Cloudy",
		"icon":"partlycloudy",
		"icon_url":"http://icons-ak.wxug.com/i/c/k/partlycloudy.gif",
		"skyicon":"partlycloudy",
		"pop":0,
		"qpf_allday": {
		"in": 0.00,
		"mm": 0.0
		},
		"qpf_day": {
		"in": 0.00,
		"mm": 0.0
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0.0
		},
		"snow_allday": {
		"in": 0,
		"cm": 0
		},
		"snow_day": {
		"in": 0,
		"cm": 0
		},
		"snow_night": {
		"in": 0,
		"cm": 0
		},
		"maxwind": {
		"mph": 10,
		"kph": 16,
		"dir": "WSW",
		"degrees": 253
		},
		"avewind": {
		"mph": 6,
		"kph": 10,
		"dir": "WSW",
		"degrees": 258
		},
		"avehumidity": 85,
		"maxhumidity": 93,
		"minhumidity": 70
		}
		,
		{"date":{
	"epoch":"1384236000",
	"pretty":"10:00 PM PST on November 11, 2013",
	"day":11,
	"month":11,
	"year":2013,
	"yday":314,
	"hour":22,
	"min":"00",
	"sec":0,
	"isdst":"0",
	"monthname":"November",
	"monthname_short":"Nov",
	"weekday_short":"Mon",
	"weekday":"Monday",
	"ampm":"PM",
	"tz_short":"PST",
	"tz_long":"America/Los_Angeles"
},
		"period":2,
		"high": {
		"fahrenheit":"70",
		"celsius":"21"
		},
		"low": {
		"fahrenheit":"52",
		"celsius":"11"
		},
		"conditions":"Mostly Cloudy",
		"icon":"mostlycloudy",
		"icon_url":"http://icons-ak.wxug.com/i/c/k/mostlycloudy.gif",
		"skyicon":"mostlycloudy",
		"pop":10,
		"qpf_allday": {
		"in": 0.00,
		"mm": 0.0
		},
		"qpf_day": {
		"in": 0.00,
		"mm": 0.0
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0.0
		},
		"snow_allday": {
		"in": 0,
		"cm": 0
		},
		"snow_day": {
		"in": 0,
		"cm": 0
		},
		"snow_night": {
		"in": 0,
		"cm": 0
		},
		"maxwind": {
		"mph": 5,
		"kph": 8,
		"dir": "West",
		"degrees": 267
		},
		"avewind": {
		"mph": 4,
		"kph": 6,
		"dir": "West",
		"degrees": 268
		},
		"avehumidity": 75,
		"maxhumidity": 100,
		"minhumidity": 63
		}
		,
		{"date":{
	"epoch":"1384322400",
	"pretty":"10:00 PM PST on November 12, 2013",
	"day":12,
	"month":11,
	"year":2013,
	"yday":315,
	"hour":22,
	"min":"00",
	"sec":0,
	"isdst":"0",
	"monthname":"November",
	"monthname_short":"Nov",
	"weekday_short":"Tue",
	"weekday":"Tuesday",
	"ampm":"PM",
	"tz_short":"PST",
	"tz_long":"America/Los_Angeles"
},
		"period":3,
		"high": {
		"fahrenheit":"70",
		"celsius":"21"
		},
		"low": {
		"fahrenheit":"52",
		"celsius":"11"
		},
		"conditions":"Chance of Rain",
		"icon":"partlycloudy",
		"icon_url":"http://icons-ak.wxug.com/i/c/k/partlycloudy.gif",
		"skyicon":"mostlysunny",
		"pop":20,
		"qpf_allday": {
		"in": 0.00,
		"mm": 0.0
		},
		"qpf_day": {
		"in": 0.00,
		"mm": 0.0
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0.0
		},
		"snow_allday": {
		"in": 0,
		"cm": 0
		},
		"snow_day": {
		"in": 0,
		"cm": 0
		},
		"snow_night": {
		"in": 0,
		"cm": 0
		},
		"maxwind": {
		"mph": 9,
		"kph": 14,
		"dir": "NW",
		"degrees": 318
		},
		"avewind": {
		"mph": 7,
		"kph": 11,
		"dir": "West",
		"degrees": 280
		},
		"avehumidity": 77,
		"maxhumidity": 88,
		"minhumidity": 61
		}
		,
		{"date":{
	"epoch":"1384408800",
	"pretty":"10:00 PM PST on November 13, 2013",
	"day":13,
	"month":11,
	"year":2013,
	"yday":316,
	"hour":22,
	"min":"00",
	"sec":0,
	"isdst":"0",
	"monthname":"November",
	"monthname_short":"Nov",
	"weekday_short":"Wed",
	"weekday":"Wednesday",
	"ampm":"PM",
	"tz_short":"PST",
	"tz_long":"America/Los_Angeles"
},
		"period":4,
		"high": {
		"fahrenheit":"70",
		"celsius":"21"
		},
		"low": {
		"fahrenheit":"54",
		"celsius":"12"
		},
		"conditions":"Partly Cloudy",
		"icon":"partlycloudy",
		"icon_url":"http://icons-ak.wxug.com/i/c/k/partlycloudy.gif",
		"skyicon":"partlycloudy",
		"pop":0,
		"qpf_allday": {
		"in": 0.00,
		"mm": 0.0
		},
		"qpf_day": {
		"in": 0.00,
		"mm": 0.0
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0.0
		},
		"snow_allday": {
		"in": 0,
		"cm": 0
		},
		"snow_day": {
		"in": 0,
		"cm": 0
		},
		"snow_night": {
		"in": 0,
		"cm": 0
		},
		"maxwind": {
		"mph": 9,
		"kph": 14,
		"dir": "WNW",
		"degrees": 294
		},
		"avewind": {
		"mph": 7,
		"kph": 11,
		"dir": "WNW",
		"degrees": 284
		},
		"avehumidity": 62,
		"maxhumidity": 79,
		"minhumidity": 42
		}
		]
		}
	}
}
		return{
			weather: weather,
			getForecast: getForecast
		}

	}]);
	