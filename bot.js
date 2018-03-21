var stdin = process.openStdin();
var Twit = require('twit');
var T = new Twit({
    consumer_key:         'FiQBiqWJezW1hitVshkS94Dk2',
    consumer_secret:      'I7NfB7IJv7pz5zsgGce1tcqpeTHGPIpkZoAf5MdUWozh5PfvEg',
    access_token:         '214477414-TRjstz6L4Ix9oNGf6JGKHGjmg8GfaaDiruJsfA8R',
    access_token_secret:  't7tsJjMdZ3fZ47GUkc9biLQNHIYU1qI9PgX89VPROyQ14',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests. 
  });

console.log('input your search query: ');

stdin.addListener("data", function(input) {
    streamTweet(input.toString());
  });

function streamTweet(input){
  var stream = T.stream('statuses/filter', { track: input})
  stream.on('tweet', function (data) {
    if(data.user.followers_count>5000) {
      console.log(data.text);
    }
  });
}