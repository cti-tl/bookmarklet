function(f, d, e, a, s1, s2, flg) {
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
}

function ok(str){
 console.log(str);
}

export default () => {  
    let title = document.title;
    let href = document.location.href;
    let canonical = get_canonical();
    console.log('ページタイトル=%s \n href=%s \n カノニカルURL=%s', title, href, canonical);
    alert('ページタイトル：'+title +"\n現在のURL："+href + "\nカノニカルURL：" + canonical);

    function get_canonical(){
      let links = document.getElementsByTagName("link");
      for ( let i in links) {
        if (links[i].rel) {
          if (links[i].rel.toLowerCase() == "canonical") {
            return links[i].href;
          }
        }
      }
      return "";
    }
}
