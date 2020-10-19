const ethereumButton = document.querySelector('.enableEthereumButton');
const showAccount = document.querySelector('.showAccount');
const showTdts = document.getElementById('tdtArea');
const showBond = document.getElementById('bond');
const axios = require('axios').default;
import './style.css';

ethereumButton.addEventListener('click', () => {
  getAccount();
});

async function getAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  showAccount.innerHTML = account;
  getBond(account);
  getTdts(account);
}

async function getTdts(addr) {
  let url = `https://backendfortbtc.azurewebsites.net/api/getTdts?wallet=${addr}`
  try {
    await axios.get(url)
      .then(function (response) {
        let allTdts = []
        response.data.forEach(element => allTdts.push(element))
        showTdts.innerText = allTdts.toString();
      });
  } catch (err) {
    console.log(err);
  }
}

async function getBond(addr) {
  let url = `https://backendfortbtc.azurewebsites.net/api/getBond?wallet=${addr}`
  try {
    await axios.get(url)
      .then(function (response) {
        showBond.innerText = response.data
      });
  } catch (err) {
    console.log(err);
  }
}