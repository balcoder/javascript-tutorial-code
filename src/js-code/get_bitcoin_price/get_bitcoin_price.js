// Get bitcoin price
var usd = document.querySelector("#usd");
var euro = document.querySelector("#euro");
const btnBitcoin = document.querySelector("#btn-bitcoin");

btnBitcoin.addEventListener("click", function () {
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function () {
    console.log(XHR.readyState);
    if (XHR.readyState == 4 && XHR.status == 200) {
      const data = JSON.parse(XHR.responseText);
      usd.innerHTML = "USD: " + data.bpi.USD.rate;
      euro.innerHTML = "EURO: " + data.bpi.EUR.rate;
    }
  };

  XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
  XHR.send();
});
