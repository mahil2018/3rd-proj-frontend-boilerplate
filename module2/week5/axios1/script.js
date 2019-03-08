let errDiv;
const stockInfo  = axios.create({
    baseURL: 'https://api.iextrading.com/1.0/stock/',
  });
function getstockTicket(stockName){  
    stockInfo.get(`${stockName}/chart`)
    .then(response => {
        console.log(response.data)
      printTheChart(response.data);
    })
    .catch( error => {
      console.log(error);
    });
}
// function getstockTicket(stockName){
//       stockInfo.get(stockName)
//       .then(responseFromAPI =>{
//         //   removeErrDiv();
//           const stockUser = responseFromAPI.data;
//             // stockInfo.get(`${stockTicket}/chart`)
//           console.log(stockUser);
//           document.getElementById("stockUser").innerHTML = stockUser;
//       })
//       .catch(err =>{
//         //   if(err.response.status === 404){
//         //       removeStockInfo();
//         //       createDiv();
//         //       const theErr = document.createTextNode(`What the heck is ${stockName}? 🤭`);
//         //       errDiv.appendChild(theErr);
//         //   } else {
//               console.log('err => ', err)
//         //   }
//       })
//   }
 //FFFFFFFFFFFFFFFFFFFFFFFFFFunctionFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
//   function createDiv(){
//       errDiv = document.createElement("div");
//       errDiv.setAttribute("id", "error");
//       document.body.appendChild(errDiv);
//   }
//   function removeErrDiv(){
//     if(document.getElementById("error")){
//         const error = document.getElementById("error");
//         error.parentNode.removeChild(error);
//     }
// }
// function removeStockInfo(){
//     document.getElementById("stockUser").innerHTML = "";
// }
//FFFFFFFFFFFFFFFFFFFFFFFFFFunctionFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
document.getElementById("theButton").onclick = function(){
    // removeErrDiv();
    const stockTicket = document.getElementById("theInput").value;
    getstockTicket(stockTicket);
}


const printTheChart = (stockData => {
  const stockLabels = stockData.map( element => element.date);
  const stockPrice = stockData.map( element => element.close);
  const ctx = document.getElementById('myChart').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: stockLabels,
      datasets: [{
        label: "Stock Chart",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: stockPrice,
      }]
    }
  });
});
