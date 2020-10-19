const ethereumButton = document.querySelector('.enableEthereumButton');
const showAccount = document.querySelector('.showAccount');
const showTdts = document.getElementById('tdtArea');
//const axios = require('axios').default;

ethereumButton.addEventListener('click', () => {
  getAccount();
});

// async function getAccount() {
//   const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
//   const account = accounts[0];
//   showAccount.innerHTML = account;
//   getTdts(account);
// }

async function getAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  showAccount.innerHTML = account;
  let url = `https://backendfortbtc.azurewebsites.net/api/getTdts?wallet=${account}`
  fetch(url)
    .then(response => response.json())
    .then(function (data) {
      let allTdts = []
      data.forEach(element => allTdts.push(element));
      let aString = allTdts.toString();
      showTdts.innerText = aString;
    })
}

// async function getTdts(addr) {
//   let url = `https://backendfortbtc.azurewebsites.net/api/getTdts?wallet=${addr}`
//   try {
//     await axios.get(url).then(function (response) {
//       showTdts.innerText(response.data)
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

