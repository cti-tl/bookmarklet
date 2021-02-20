(function (d) {
  let ById = (id) => d.getElementById(id);
  let ByNames = (name, index = 0) => d.getElementsByName(name)[index];
  let q = (selector, index = 0) => d.querySelectorAll(selector)[index];
  alert("test");
})(document);
