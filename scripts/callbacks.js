$(document).ready(function(){
  $.ajax({
    type: 'GET',
    dataType: "json",
    contentType: 'text/plain',
    xhrFields: {
      withCredentials: false
    },
    url: "http://hunger.feedmejefferson.com:9000/hunger.json" + location.search,
    crossDomain: true,
    success: function(choice) {
      $.choice=choice;
      $("#img-a").attr("src","images/" + choice.a); 
      $("#img-b").attr("src","images/" + choice.b); 
      $("#want-a").attr("href","success.html?searchSession=" + choice.searchSession + "&chosen=" + choice.a + "&notChosen=" + choice.b); 
      $("#prefer-a").attr("href","index.html?searchSession=" + choice.searchSession + "&chosen=" + choice.a + "&notChosen=" + choice.b); 
      $("#want-b").attr("href","success.html?searchSession=" + choice.searchSession + "&chosen=" + choice.b + "&notChosen=" + choice.a); 
      $("#prefer-b").attr("href","index.html?searchSession=" + choice.searchSession + "&chosen=" + choice.b + "&notChosen=" + choice.a); 
    }
  });
});
