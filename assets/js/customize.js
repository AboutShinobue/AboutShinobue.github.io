function viewPrintTone(tone,unshi){
  toneArray = tone.split(/\n/).map(function(row){
    return row.split(',');
  });

  unshiArray = unshi.split(/\n/).map(function(row){
    return row.split(',');
  });

  console.log(toneArray);

  return null;
}

$(function(){
    $("#button").click(function(event){
      $(function(){ 
        var tone = {
          type:"GET",
          url:"https://gist.githubusercontent.com/panyulive/a15a17acb252bb3c520f4d8aca8b941a/raw/aee9a88d8138d2fd3f05cd2fb898139d09001bd6/scale.csv",
          dataType:"text"
        };

        var unshi = {
          type:"GET",
          url:"https://gist.githubusercontent.com/panyulive/f60a887e74f089e7fabd5a755e6a47e1/raw/56e902f0cd51680b86381f4ff72c5827e0400b93/unshi.csv",
          dataType:"text"
        };

        $.when(
          $.ajax(tone),
          $.ajax(unshi),
        ).done(function(res1,res2){
          viewPrintTone(res1[0],res2[0]);
          console.log(res1[0]);
          console.log(res2[0]);
        }).fail(function(){
          alert("エラーが発生しました。しばらくお待ち下さい");
        });
      });
    });
  });