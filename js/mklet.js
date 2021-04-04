class mklet {
  static inTitle = (keyword) => {
    return ~location.title.indexOf(keyword);
  };
  static inUrl = (keyword) => {
    return ~location.href.indexOf(keyword);
  };
  static loadScript(url, func = {}) {
    let script = document.createElement("script");
    script.src = url;
    document.body.appendChild(script);
    script.onload = function () {
      func();
      this.remove();
    };
  }
  static makeWindow = (func) => {
    let win = document.createElement("div");
    win.name = "mklet_window";
    win.style.backgroundColor = "white";
    win.style.position = "fixed";
    win.style.padding = "5px";
    win.style.zIndex = 100;
    win.style.minWidth = "200px";
    win.style.minHeight = "200px";
    win.style.boxShadow = "2px 2px 4px gray";
    let closeBtn = document.createElement("div");
    closeBtn.innerText = "×";
    closeBtn.style.fontSize = "8px";
    closeBtn.style.color = "gray";
    closeBtn.style.margin = "1px";
    closeBtn.style.width = "15px";
    closeBtn.style.height = "15px";
    closeBtn.style.cursor = "pointer";
    closeBtn.onclick = function (e) {
      console.log(e.target.parentNode.remove());
    };
    let panel = document.createElement("div");
    panel.width = "auto";
    panel.height = "auto";
    panel.style.fontSize = "10px;";
    panel.style.padding = "4px";
    win.appendChild(closeBtn);
    win.appendChild(panel);
    document.body.appendChild(win);
    win.onmousedown = function (event) {
      let shiftX = event.clientX - win.getBoundingClientRect().left;
      let shiftY = event.clientY - win.getBoundingClientRect().top;

      win.style.position = "absolute";
      win.style.zIndex = 1000;

      moveAt(event.pageX, event.pageY);

      // ボールを（pageX、pageY）座標の中心に置く
      function moveAt(pageX, pageY) {
        win.style.left = pageX - shiftX + "px";
        win.style.top = pageY - shiftY + "px";
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      }

      // (3) mousemove でボールを移動する
      document.addEventListener("mousemove", onMouseMove);

      // (4) ボールをドロップする。不要なハンドラを削除する
      win.onmouseup = function () {
        document.removeEventListener("mousemove", onMouseMove);
        win.onmouseup = null;
      };
    };

    win.ondragstart = function () {
      return false;
    };
    func(win, panel);
    return panel;
  };
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
  };
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
  };
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
    return arr;
  };
  static imgs = () => {
    let imgsArr = [];
    let imgLinkArr = [];
    this.getWindowDocuments((doc) => {
      doc.querySelectorAll("img").forEach((item, index) => {
        if (item.src && !~imgLinkArr.indexOf(item.src)) {
          imgLinkArr.push(item.src);
          imgsArr.push(item);
        }
      });
    });
    return imgsArr;
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
  static sliceByNumber = (array, number) => {
    const length = Math.ceil(array.length / number);
    return new Array(length)
      .fill()
      .map((_, i) => array.slice(i * number, (i + 1) * number));
  };
  static shuffleArr = (arr) => {
    let length = arr.length;
    for (let i = length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    return arr;
  };
}
