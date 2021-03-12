mklet = {
  test: (f, d, e, a, s1, s2, flg) => {
    if (~location.href.indexOf('RakWF21')) {
      f = document.getElementsByName('fr_main')[0].contentWindow;
      d = f.document;
      if (d.querySelector('table.RakWFHierarchy tbody')) {
        ele = document.createElement('tr');
        ele.innerHTML = `<td><button onClick="(function(){d=document;e=d.querySelectorAll('tr.SeiTR,tr.SeiTR2');a=Array.prototype.slice.call(e);a.forEach(function(item){item.hidden=false;});})()">クリア</button><button onClick="(function(){d=document;e=d.querySelectorAll('tr.SeiTR,tr.SeiTR2');a=Array.prototype.slice.call(e);a.forEach(function(item){item.hidden=item.querySelectorAll('td')[29].innerText!=='on';});})()">完了</button><button onClick="(function(){d=document;e=d.querySelectorAll('tr.SeiTR,tr.SeiTR2');a=Array.prototype.slice.call(e);a.forEach(function(item){item.hidden=item.querySelectorAll('td')[29].innerText==='on';});})()">未完</button><input type="text" value="" onkeyup="(function(e){let val=e.target.value.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
   return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
}).toLowerCase();d=document;e=d.querySelectorAll('tr.SeiTR,tr.SeiTR2');a=Array.prototype.slice.call(e);a.forEach(function(item){item.hidden=!~item.innerText.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
   return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
}).toLowerCase().indexOf(val);});})(event)"></input></td>`;
        d.querySelector('table.RakWFHierarchy tbody').appendChild(ele);
      }
    }
  },
  strToAscLower: (str) => {
    return str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
      return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    }).toLowerCase();
  },
  ok: (str) => {
    return str;
    console.log(str);
  },
  links: () => {
    let arr = [];
    document.links.forEach((item,index)=>{
      arr.push({
        title:item.innerText.trim(),
        url:item.href,
      });
    });
    console.log(arr);
    return arr;
  },
  jsonToTable:(json) => {
    // table要素を生成
      let table = document.createElement('table');

      // ヘッダーを作成
      let tr = document.createElement('tr');
      for (key in json[0]) {
            // th要素を生成
            let th = document.createElement('th');
            // th要素内にテキストを追加
            th.textContent = key;
            // th要素をtr要素の子要素に追加
            tr.appendChild(th);
            }
        // tr要素をtable要素の子要素に追加
        table.appendChild(tr);

      // テーブル本体を作成
      for (let i = 0; i < json.length; i++) {
        // tr要素を生成
        let tr = document.createElement('tr');
        // th・td部分のループ
        for (key in json[0]) {
              // td要素を生成
              let td = document.createElement('td');
              // td要素内にテキストを追加
              td.textContent = json[i][key];
              // td要素をtr要素の子要素に追加
              tr.appendChild(td);
            }
        // tr要素をtable要素の子要素に追加
        table.appendChild(tr);
        }
      // 生成したtable要素を追加する
      return table;
  },
  sample: (url) => {
    return `
javascript: (function(d, j, s) {
  s = d.createElement('script');
  s.src = j;
  d.body.appendChild(s);
})(document, '${url}') /*__mklet_title:Linkbklet__*/
`;
  },
}
