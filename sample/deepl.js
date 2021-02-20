(function () {
  let str = window.getSelection() + "";
  let w = window.open(
    "https://www.deepl.com/translator#en/ja/" + str,
    null,
    "top=50,left=50,width=700,height=500"
  );
  w.document
    .querySelector("div.lmt__sides_container")
    .setAttribute("style", "min-height:400px;");
})();
