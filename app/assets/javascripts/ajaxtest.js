var count = 0;
var outer;

$.ajaxSetup({ jsonp: null, jsonpCallback: null });

$(document).ready( function() {
  $('input#ajax_input').val("hello");
  $('input#ajax_input').keyup( function(e) {
    e.preventDefault();
    var $q = $(this);
    // $('div#content').html($q.val());
    // $.get('http://suggestqueries.google.com/complete/search?hl=en&ds=yt&client=youtube&hjson=t&jsonp=window.yt.www.suggest.handleResponse&q='+ $q.val()+'&cp=1', function(data) {$('div#content').html(data) });

    query = $q.val();
    the_url = 'http://gdata.youtube.com/feeds/api/videos?q='+query;
    the_url = 'https://students.yale.edu/facebook/?searchTerm='+query+'&searchType=lastname';
    var jqxhr = $.ajax({type:"GET",
    url:the_url,
    dataType:"jsonp text",
    xhrFields: { withCredentials: true},
    success:function(responseData) {

        $('div#content').text( responseData[0]);
      // dbg(responseData.slice(0,100));
      outer=responseData;
      dbg("here");
    }});
    //.success(function() { alert("second success"); })
    //.error(function(test, errStr) { alert("error"); dbg("error: " + errStr + "test: " + test.responseText + this.responseTxt);})
    //.complete(function() { alert("complete"); });


    count++;
    dbg("count=" + count);
    });


  dbg("hello");

  $('#frame').attr('src', get_url($('input#ajax_input').val()));
  function dbg(val) {console.log(val)};

  function get_url(q) {
    // return 'http://gdata.youtube.com/feeds/api/videos?q='+q;
    return 'https://students.yale.edu/facebook/?searchTerm='+q+'&searchType=lastname';
  }
});


/*
 *
 *
 *
 * Cookie:JSESSIONID=0B8C3ED8DBAC5A576253A9054F76BF2B.frieda8-lb; __utma=123288963.1736226474.1321089732.1328928775.1328932563.4; __utmc=123288963;
 * __utmz=123288963.1328928775.3.2.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=yale.edu
 *
  if(responseData.data.items){
  var videos=responseData.data.items;
  playlistArr=[];
  playlistArr.push(videos);
  updateVideoDisplay(videos);
  pendingDoneWorking=true;
  }
  else{
  updateSuggestedKeyword('No results for "'+keyword+'"');
  doneWorking();}
*/
