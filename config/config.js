/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
        port: 8080,

        language: 'en',
        timeFormat: 24,
        units: 'imperial',

        modules: [
                {
                        module: 'alert',
                },
                {
                        module: 'clock',
                        position: 'top_left',
                        config: {
                                timeFormat: 12,
                                displaySeconds: false,
                                showPeriodUpper: true
                        }
                },
                {
                        module: 'calendar',
                        header: 'US Holidays',
                        position: 'top_left',
                        config: {
                                calendars: [
                                        {
                                                symbol: 'calendar-check-o ',
                                                url: 'webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics'
                                        }
                                ]
                        }
                },
                {
                        module: 'compliments',
                        position: 'lower_third',
                        config: {
                                compliments: {
                                    morning: [
                                        'I love you!',
                                        'Good morning? It\'s almost afternoon!',
                                        'Good morning sleepyhead!'
                                    ],
                                    afternoon: [
                                        'I miss you',
                                        'Looking pretty as always!',
                                        'Love you sweetie!'
                                    ],
                                    evening: [
                                        'You\'re making me cry'
                                    ]
                                }
                        }
                },
                {
                        module: 'currentweather',
                        position: 'top_right',
                        config: {
                                location: 'Stamford',
                                locationID: '4843564',  //ID from bulk.openweather.org/sample/
                                appid: 'd3b5893f2cb55a1905c4eddb7594e060',
                                timeFormat: 12,
                                showPeriod: true,
                                showPeriodUpper: true,
                                showWindDirection: false
                        }
                },
                {
                        module: 'weatherforecast',
                        position: 'top_right',
                        header: 'Weather Forecast',
                        config: {
                                location: 'Stamford',
                                locationID: '4843564',  //ID from http://www.openweathermap.org
                                appid: 'd3b5893f2cb55a1905c4eddb7594e060',
                        }
                },
                {
                        module: 'newsfeed',
                        position: 'bottom_bar',
                        config: {
                                feeds: [
                                        {
                                                title: "New York Times",
                                                url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
                                        }
                                ],
                                showSourceTitle: true,
                                showPublishDate: true
                        }
                },
        ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
