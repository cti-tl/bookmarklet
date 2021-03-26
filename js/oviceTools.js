var oviceTools = {
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
  usersdata: () => {
    ovice.webrtc.users().filter((item) => {
      return item.name && item;
    });
  },
  users: () => {
    let arr = [];
    document
      .querySelectorAll("div#workspace-participants ul li span[id*=user]")
      .forEach((item, index) => {
        let name = item.innerText.trim();
        if (!~arr.indexOf(name)) {
          arr.push(name);
        }
      });
    return arr;
  },
  randomUser: () => {
    let usersArr = [];
    document
      .querySelectorAll("div#workspace-participants ul li span[id*=user]")
      .forEach((item, index) => {
        let name = item.innerText.trim();
        if (!~usersArr.indexOf(name)) {
          usersArr.push(name);
        }
      });
    return usersArr[Math.floor(Math.random() * usersArr.length)];
  },
};
