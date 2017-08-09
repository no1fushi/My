//http://mmmmofu.hatenablog.com/entry/2016/07/11/191039より
$(function(){
  $.getJSON(
    'http://ajax.googleapis.com/ajax/services/feed/load?callback=?',
    {
      q: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCuSUY9LQ8yOdBPSTjiEQeqQ',
      v: '1.0',
      num: 2
     },
    function (data) {
      $.each(data.responseData.feed.entries, function(i, item){
        var _url = item.mediaGroups[0].contents[0].url.split("version=3")[0].replace( "v" , "embed" );
        setTimeout( function(){
          $('#video ul').append('<iframe height="360" src="'+
            _url +'rel=0" frameborder="0" allowfullscreen></iframe>');
        },1000);
      });
    }

  );
});