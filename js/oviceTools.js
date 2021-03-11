let oviceTools = {
  writeBoard: (str = "") => {
    if (~location.href.indexOf("ovice.in")) {
      document.querySelector(
        "div.ve-design iframe"
      ).contentDocument.body.innerHTML = str;
    }
  },
  readBoard: () => {
    let req = "";
    if (~location.href.indexOf("ovice.in")) {
      req = document.querySelector("div.ve-design iframe").contentDocument.body
        .innerHTML;
    }
    return req;
  },
  micOn: () => {
    ovice.setMic(true);
  },
  micOff: () => {
    ovice.setMic(false);
  },
};
