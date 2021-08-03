// Get bitcoin price using Fetch

const btnBitcoinFetchBtn = document.querySelector("#btn-bitcoin-fetch");
const usdFetch = document.querySelector("#usd-fetch");
const euroFetch = document.querySelector("#euro-fetch");

btnBitcoinFetchBtn.addEventListener("click", function () {
  fetch(bitcoinUrl)
    .then(handleErrors)
    .then(function (data) {
      console.log(data);
      usdFetch.innerHTML = "USD: " + "$" + data.bpi.USD.rate;
      euroFetch.innerHTML = "EURO: " + "€" + data.bpi.EUR.rate;
    })
    .catch(function (error) {
      console.log(error);
    });
});

function handleErrors(request) {
  if (!request.ok) {
    throw Error(request.status);
  }
  return request;
}
