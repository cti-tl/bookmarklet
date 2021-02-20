var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
  lineWrapping: true,
  lineNumbers: true,
  mode: "javascript",
  direction: "ltr",
  matchBrackets: true,
  continueComments: "Enter",
  extraKeys: { "Ctrl-Q": "toggleComment" },
});
editor.setSize("100%", "100%");
var doc = editor.getDoc();
var reader = new FileReader(); // FileReaderオブジェクトの生成
reader.readAsText("../sample/sample.js"); // 選択されたファイル(fileの先頭要素）を文字列として読み込む

// 読み込みが完了した際に実行される処理
reader.onload = function (e) {
  //document.getElementById("text").innerHTML = reader.result;
  doc.setValue("javascript:" + reader.result);
};

window.onload = function () {
  jscompCM();
};
editor.on("blur", function () {
  jscompCM();
});
editor.on("drop", function (e) {
  // e.preventDefault();
  // 移動された要素の id を取得して、その要素を target の DOM に追加する
  var dt = event.dataTransfer;
  var files = dt.files;
  var count = files.length;
  for (var i = 0; i < files.length; i++) {
    alert("Drop File : " + files[i].name);
  }
});
