document.getElementById('profitForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const listingPrice = parseFloat(document.getElementById('listingPrice').value);
  const sellPrice = parseFloat(document.getElementById('sellPrice').value);
  
  if (isNaN(listingPrice) || isNaN(sellPrice)) {
    alert('Please enter valid numbers');
    return;
  }

  const feePercentage = 10; // Assuming a 10% marketplace fee
  const fee = (listingPrice * feePercentage) / 100;
  const netProfit = sellPrice - listingPrice - fee;

  document.getElementById('result').innerHTML = `
    <p>Listing Price: $${listingPrice.toFixed(2)}</p>
    <p>Sell Price: $${sellPrice.toFixed(2)}</p>
    <p>Marketplace Fee (10%): $${fee.toFixed(2)}</p>
    <p><strong>Net Profit: $${netProfit.toFixed(2)}</strong></p>
  `;
});
