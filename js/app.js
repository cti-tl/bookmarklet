function jscompCM() {
  const tn = document.querySelector("#title_name");
  let doc = editor.getDoc();
  const e = document.querySelector("#code");
  doc.setValue(
    js_beautify(decodeURI(doc.getValue()), {
      indent_size: 2,
    })
  );
  editor.clearHistory();
  let code = doc.getValue();
  let data = getTitle(tn.value,code);
  tn.value = data['title'];
  doc.setValue(data['code']);
  mkLink(data['title'], data['code']);
  sampleReset();
}

function change() {
  const tn = document.querySelector("#title_name");
  const e = document.querySelector("#code");
  mkLink(tn.value, e.value);
}

function getTitle(title,code){
  if(code){
  let result = /\/\*__mklet_title:(.*?)__\*\//.exec(code);
  if(result){
    if(title !== result[1]){
      title = result[1];
      code = code.replace(result[0],'/*__mklet_title:' + title + '__*/');
    }
  }else{
    code = code + '/*__mklet_title:' + title + '__*/';
  }
  }
  return {
   title:title,
    code:code,
  };
}

function mkLink(title, url) {
  const bk = document.querySelector("#bk");
  let t = url.replace(/\s+/g, " ");
  t = t.replace(/^ ?(\S.*)/, "$1").replace(/(.*\S) ?$/, "$1");
  t = t.indexOf("javascript:") < 0 ? "javascript:" + t : t;
  // t = t.replace(/\"/g, "\\x22");
  t = t.replace(/(\W) /g, "$1").replace(/(\w) (\W)/g, "$1$2");
  //	link.href = t;
  //	count.innerHTML = ' ('+ t.length + ' chars)';
  bk.href = t;
  bk.innerHTML = title;
}
function sampleReset() {
  document.getElementById("sample").innerHTML = "";
}

const dragoverData = function (event) {
  alert("test");
  if (event.preventDefault) {
    event.preventDefault();
  }
};

const dropData = function (event) {
  alert("test");
  const tn = document.querySelector("#title_name");
  var f = event.dataTransfer.files[0];
  tn.value = f.name;
  if (event.preventDefault) {
    event.preventDefault();
  }
};
