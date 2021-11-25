$(function(){
    $("#button").click(function(event){
      $.ajax({
        type: "GET",
        url: "https://script.google.com/macros/s/AKfycbxCTRjMrCIap1A9OGwrAjLBWARnEhO3Z4rbz5z9KAAQgTGtR7zcAcLq6gqiMuWJ5Wf0/exec",
        dataType : "html"
      })
      // Ajaxリクエストが成功した場合
      .done(function(data){
        $("#result").html(data);
      })
      // Ajaxリクエストが失敗した場合
      .fail(function(XMLHttpRequest, textStatus, errorThrown){
        alert(errorThrown);
      });
    });
  });