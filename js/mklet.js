class mklet {
  static inTitle = (keyword) => {
    return ~location.title.indexOf(keyword);
  };
  static inUrl = (keyword) => {
    return ~location.href.indexOf(keyword);
  };
  static makeWindow = () => {
    let win = document.createElement('div');
    win.name = "mklet_window";
    win.style.backgroundColor = "white";
    win.style.position = "fixed";
    win.style.right = "5px";
    win.style.top = "5px";
    win.style.padding = "5px";
    win.style.border = "solid";
    win.style.zIndex = 100;
    win.style.width = "200px";
    win.style.height = "200px";
    win.style.boxShadow = "2px 2px 4px -2px gray inset";
    let closeBtn = document.createElement('button');
    closeBtn.innerText = "×";
    closeBtn.style.fontSize = "8px";
    closeBtn.style.width = "20px";
    closeBtn.style.height = "20px";
    closeBtn.onclick = function(e) {
      console.log(e.target.parentNode.remove());
    };
    win.appendChild(closeBtn);
    document.body.appendChild(win);
  }
  static getWindows = (func = () => {}) => {
    let winArr = [];
    let frameItems = document.querySelectorAll("iframe");
    winArr.push(window);
    func(window);
    frameItems.forEach((item) => {
      try {
        url = item.contentWindow.location.href;
        winArr.push(item.contentWindow);
        func(item.contentWindow);
      } catch (e) {
        // console.log(e);
      }
    });
    return winArr;
  }
  static getWindowDocuments = (func = () => {}) => {
    let docArr = [];
    this.getWindows((win) => {
      try {
        docArr.push(win.document);
        func(win.document);
      } catch (e) {
        console.log(e);
      }
    });
    return docArr;
  }
  static test = (f, d, e, a, s1, s2, flg) => {
    if (~location.href.indexOf("RakWF21")) {
      f = document.getElementsByName("fr_main")[0].contentWindow;
      d = f.document;
      if (d.querySelector("table.RakWFHierarchy tbody")) {
        ele = document.createElement("tr");
        ele.innerHTML = `<td><button onClick="(function(){d=document;e=d.querySelectorAll('tr.SeiTR,tr.SeiTR2');a=Array.prototype.slice.call(e);a.forEach(function(item){item.hidden=false;});})()">クリア</button><button onClick="(function(){d=document;e=d.querySelectorAll('tr.SeiTR,tr.SeiTR2');a=Array.prototype.slice.call(e);a.forEach(function(item){item.hidden=item.querySelectorAll('td')[29].innerText!=='on';});})()">完了</button><button onClick="(function(){d=document;e=d.querySelectorAll('tr.SeiTR,tr.SeiTR2');a=Array.prototype.slice.call(e);a.forEach(function(item){item.hidden=item.querySelectorAll('td')[29].innerText==='on';});})()">未完</button><input type="text" value="" onkeyup="(function(e){let val=e.target.value.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
   return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
}).toLowerCase();d=document;e=d.querySelectorAll('tr.SeiTR,tr.SeiTR2');a=Array.prototype.slice.call(e);a.forEach(function(item){item.hidden=!~item.innerText.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
   return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
}).toLowerCase().indexOf(val);});})(event)"></input></td>`;
        d.querySelector("table.RakWFHierarchy tbody").appendChild(ele);
      }
    }
  };
  static strToAscLower = (str) => {
    return str
      .replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
      })
      .toLowerCase();
  };
  static ok = (str) => {
    console.log(str);
    return str;
  };
  static links = (filter = {}) => {
    let arr = [];
    this.getWindowDocuments((doc) => {
      if (doc.links.length === 0) return arr;
      doc.links.forEach((item, index) => {
        if (
          filter === {} ||
          ~item.innerText.trim().indexOf(filter["title"]) ||
          ~item.href.indexOf(filter["url"])
        ) {
          arr.push({
            title: item.innerText.trim(),
            url: item.href,
          });
        }
      });
    });
    console.log(arr);
    return arr;
  };
  static jsonToTable = (json) => {
    let table = document.createElement("table");

    let tr = document.createElement("tr");
    for (key in json[0]) {
      let th = document.createElement("th");
      th.textContent = key;
      tr.appendChild(th);
    }
    table.appendChild(tr);

    for (let i = 0; i < json.length; i++) {
      let tr = document.createElement("tr");
      for (key in json[0]) {
        let td = document.createElement("td");
        td.textContent = json[i][key];
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
    return table;
  };
  static teststr = () => {
    return this.ok("test ok");
  };
  static sample = (url) => {
    return `
javascript: (function(d, j, s) {
  s = d.createElement('script');
  s.src = j;
  d.body.appendChild(s);
})(document, '${url}') /*__mklet_title:Linkbklet__*/
`;
  };
}
