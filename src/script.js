const ethereumButton = document.querySelector('.enableEthereumButton');
const showAccount = document.querySelector('.showAccount');
const showTdts = document.querySelector('.showTdts');
const axios = require('axios').default;

ethereumButton.addEventListener('click', () => {
  getAccount();
});

async function getAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  showAccount.innerHTML = account;
  getTdts(account);
}

async function getTdts(addr) {
  let url = `https://backendfortbtc.azurewebsites.net/api/getTdts?wallet=${addr}`
  try {
    await axios.get(url).then(function (response) {
      showTdts.appendChild(response.data)
    });
  } catch (err) {
    console.log(err);
  }
}