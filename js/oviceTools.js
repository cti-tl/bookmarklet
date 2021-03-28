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
  me: () => {
    return ovice.webrtc.getUser(ovice.userId());
  },
  usersdata: () => {
    return ovice.webrtc.users().filter((item) => {
      return item.name && item;
    });
  },
  usersdata: () => {
    return ovice.webrtc.users().filter((item) => {
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
  newUserCheck: function () {
    let data = [];
    axios
      .get("https://cti1650.xsrv.jp/ovice/api_test.php?key=itkingdom")
      .then(function (res) {
        data = res.data;
      });
    console.log(data);
    /*
    let arr = [];
    let users = ovice.webrtc.getUsers();
    let elements = document.querySelectorAll(
      "div#workspace-participants span[id*=user-]"
    );
    let dataArr = [...elements];
    console.log(dataArr);
    dataArr.forEach((item, index) => {
      console.log(item);
      let id = item.id.replace("user-", "");
      console.log(id);
      let name = item.innerText.trim();
      let userId = users.filter((item) => {
        return item.id == id && item;
      });
      console.log(userId);
      let user = ovice.webrtc.getUser(userId.userId);
      let objId = data.login_users[user.userId].user_id;
      let counter = data.login_counter[objId];
      if (counter) {
        item.innerHTML = user.name + "(" + counter.counter + ")";
      }
    });
    */
    return data;
  },
};
