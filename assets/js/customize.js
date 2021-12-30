function viewPrintTone(tone,unshi){
  const DEFAULT_KEY = 37;
  const NEXT = 2;
  const SELECT = document.getElementById("select-key").value;

  toneArray = tone.split(/\n/).map(function(row){
    return row.split(',');
  });

  unshiArray = unshi.split(/\n/).map(function(row){
    return row.split(',');
  });

  var head = unshiArray.shift();
  var table = [];

  var key = DEFAULT_KEY + parseInt(SELECT);

  for (let step = 0; step < unshiArray.length; step++){
    //console.log(unshiArray[step]); //運指表より順番に出力
    //console.log(toneArray[key]);   //選択されたキーより順番に出力

    table[step] = toneArray[key];
    key = parseInt(key) + parseInt(unshiArray[step][2]);
  }

  var hash = createHashFromAry(head,table);
  var html = createTbl_hash(hash);

  $("#table").html(html);
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
        }).fail(function(){
          alert("エラーが発生しました。しばらくお待ち下さい");
        });
      });
    });
  });

  /**
 * 2次元配列とキー配列から連想配列オブジェクト（エンティティリスト）を作成する。
 * @param keys キー配列
 * @param ary  2次元配列
 * @returns 連想配列オブジェクト
 */
function createHashFromAry(keys,ary){
	var obj={};
	var x_cnt=ary[0].length;
	for(var y=0;y<ary.length;y++){
		var ent={};
		for(var x=0;x<x_cnt;x++){

			ent[keys[x]]=ary[y][x];
		}
		obj[y]=ent;
	}

	return obj;
}


/**
 * 連想配列オブジェクトからテーブルHTMLを生成する。
 * キーをヘッダーの名前に利用する。
 * @param hash 連想配列オブジェクト
 * @return テーブルHTML
 */
function createTbl_hash(hash){


	//1行目のエンティティからヘッダー部分を組み立て
	var html="<table border='1'><thead><tr>"
	for(var k in hash[0]){
		html+="<th>" + k + "</th>";
	}
	html+="</th></thead>\n";
	html+="<tbody>\n";



	//連想配列をループ。
	for(var i in hash){
		html+="<tr>";
		var ent=hash[i];
		for(var k in ent){
			var v=ent[k];
			html+="<td>" + v + "</td>";
		}
		html+="</tr>\n";
	}

	html+="</tbody></table>\n";

	return html;
}