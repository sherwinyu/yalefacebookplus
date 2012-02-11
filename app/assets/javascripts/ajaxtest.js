var count = 0;
var outer;


$(document).ready( function() {
  $('input#ajax_input').val("hello");
  $('#frame').attr('height', 1000);
  $('#frame').attr('width', 1000);


  $('input#ajax_input').keyup( function(e) {
    e.preventDefault();
    var $q = $(this);
    $('#mirror').text($q.val());
    setIFrame(get_url($q.val()));
    var $frame = $('#frame');
    $frame.contents().find('tr').each( function(i) {
      $(this).insertAfter('#mirror');
      });
    //for (i in frame[0].contents().find('tr')) { }
    });

  function dbg(val) {console.log(val)};

  function ajax_get(url) {
    $.get(url, setDivCallback);
    count++;
    dbg("ajax_get" + count);
  }

  function ajax_jsonp(url) {
    $.ajax({type:"GET",
        url: url,
        dataType:"jsonp",
        success: setDivCallback});
    //.success(function() { alert("second success"); })
    //.error(function(test, errStr) { alert("error"); dbg("error: " + errStr + "test: " + test.responseText + this.responseTxt);})
    //.complete(function() { alert("complete"); });
    count++;
    dbg("ajax_jsonp" + count);
  }

  function ajax_jsonp_text(url) {
    $.ajax({type:"GET",
        url: url,
        dataType:"jsonp text",
        success: setDivCallback});
    count++;
    dbg("ajax_jsonp_text" + count);
  }


  function ajax_text_xhfr(url) {
    $.ajax({type:"GET",
        url: url,
        dataType:"text",
        xhrFields: { withCredentials: true},
        success: setDivCallback});
    count++;
    dbg("text" + count);
  }

  function ajax_text(url) {
    $.ajax({type:"GET",
        url: url,
        dataType:"text",
        success: setDivCallback});
    count++;
    dbg("text" + count);
  }

  function setDivCallback(data) {
    str = data.slice(0, 100);
    $('div#content').text(str);
    dbg("...ajax " + str );
  }
function setIFrame(url) {
  $('#frame').attr('src', url);
    dbg("...iframe " );
}

  function get_url(q) {
    // return 'http://gdata.youtube.com/feeds/api/videos?q='+q;
    return 'https://students.yale.edu/facebook/Search?searchTerm='+q+'&searchType=lastname&searchResult=true';
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
