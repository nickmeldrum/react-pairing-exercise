export default () => new Promise((resolve, reject) => {
  setTimeout(() => resolve({
    products: [
      {id: '604659-319594-319595', name: 'Waitrose Christmas French Brie Strength 3', displayPrice: '£4.50', thumbnail: 'https://d25hqtnqp5nl24.cloudfront.net/images/products/9/LN_604659_BP_9.jpg'},
      {id: '420195-156487-156488', name: 'Waitrose Christmas cave aged West Country Cheddar', displayPrice: '£5.00', thumbnail: 'https://duetogsaij514.cloudfront.net/images/products/9/LN_420195_BP_9.jpg'},
      {id: '041558-20585-20585', name: 'Waitrose Christmas Continental Cheese Selection', displayPrice: '£7.00', thumbnail: 'https://duetogsaij514.cloudfront.net/images/products/9/LN_041558_BP_9.jpg'},
      {id: '503578-319564-319565', name: 'Waitrose Christmas Cheddar with Port', displayPrice: '£2.50', thumbnail: 'https://d25hqtnqp5nl24.cloudfront.net/images/products/9/LN_503578_BP_9.jpg'},
    ]
  }), 2000);
});
