$(document).ready(function(){
  $("#search-term").submit(function(event){
    event.preventDefault();
    var searchTerm = $("#query").val();
    console.log(searchTerm);
    $.getJSON("https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=AIzaSyCjsb8T_FH9H9WPXrjFMFLMlJuZeHEn8ck&q=" + searchTerm, function(data){
      showResults(data.items);
    });
  });
})

function showResults(results){
  var html = "";
  // var type = "";
  $.each(results, function(index,value){
    html += "<a href='http://www.youtube.com/watch?v=_'" + value.id.videoId + ">" + "<img src=" + value.snippet.thumbnails.default.url + ">" + "</a>";
    html += "<p>" + value.snippet.title + "</p>";
    console.log(value.id.kind);
  });
    // type += value.id.kind;
  // $console.log(type);
  $("#search-results").html(html);
  $("h1").fadeIn(1200);
  $("#search-results").fadeIn(1200);
}