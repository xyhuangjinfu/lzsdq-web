// function toast(msg) {
//   var toastDiv = document.createElement("div");
//   var msgDiv = document.createElement("div");
//   msgDiv.appendChild(document.createTextNode(msg));
//   toastDiv.appendChild(msgDiv);

//   toastDiv.setAttribute('class', 'toast');
//   toastDiv.setAttribute('style', 'background-color: red; width: 10rem; height: 3rem; position: fixed; top: 50%; bottom: 50%; left: 50%; right: 50%; padding: 1rem auto;');
//   msgDiv.setAttribute('class', 'msg');
//   msgDiv.setAttribute('style', 'background-color: blue;');

//   var body = document.getElementById("__nuxt");
//   body.appendChild(toastDiv);

//   // div.fadeIn();

//   // setTimeout(function () {
//   //   body.removeChild(toastDiv);
//   // }, 2000);
// }


function toast(msg) {
  var body = document.body;
  var divToastPop = document.createElement("div");
  var divToastInner = document.createElement("div");
  divToastInner.setAttribute('style', 'position: fixed;left:50%;top:50%;width: 100%; transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);text-align: center;');
  var divToastInnerText = document.createElement("div");
  divToastInnerText.setAttribute('style', 'display: inline-block;margin: 0 22px; padding: 19px 21px;font-size: 16px;color: #FFFFFF;letter-spacing: 0;line-height: 22px;background: rgba(0,0,0,0.72);border-radius: 10px;');

  divToastInnerText.appendChild(document.createTextNode(msg));
  divToastInner.appendChild(divToastInnerText);
  divToastPop.appendChild(divToastInner);
  body.appendChild(divToastPop);

  setTimeout(function () {
    body.removeChild(divToastPop);
  }, 2000);
}


export default {
  toast
}