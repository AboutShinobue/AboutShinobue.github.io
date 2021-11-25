$(function(){
/*    $("#button").click(function(event){
      $.ajax({
        type: "GET",
        url: "https://gist.githubusercontent.com/panyulive/a15a17acb252bb3c520f4d8aca8b941a/raw/aee9a88d8138d2fd3f05cd2fb898139d09001bd6/scale.csv",
        dataType : "text"
      })
      // Ajaxリクエストが成功した場合
      .done(function(data){
        var csv = $.csv.toObjects(data)
        console.log(csv)
        $("#result").html(data);
      })
      // Ajaxリクエストが失敗した場合
      .fail(function(XMLHttpRequest, textStatus, errorThrown){
        alert(errorThrown);
      });
    });*/
    function readCsv(data){
      return data;
    }

    $("#button").click(function(event){
      $(function(){ 
        var tone = {
          type:"GET",
          url:"https://gist.githubusercontent.com/panyulive/a15a17acb252bb3c520f4d8aca8b941a/raw/aee9a88d8138d2fd3f05cd2fb898139d09001bd6/scale.csv",
          dataType:"text"
        };

        var tyoshi = {
          type:"GET",
          url:"https://gist.githubusercontent.com/panyulive/a15a17acb252bb3c520f4d8aca8b941a/raw/aee9a88d8138d2fd3f05cd2fb898139d09001bd6/scale.csv",
          dataType:"text"
        };

        $.when(
          $.ajax(tone),
          $.ajax(tyoshi),

        ).done(function(res1,res2){
          console.log(res1);
          console.log(res2);
        });
      });
    });
  });