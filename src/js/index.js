document.addEventListener('DOMContentLoaded', function() {

  // Adding eventListener to the slider to update the pagevews and the cost per month
  document.querySelector('.slider input').addEventListener('input',fetch_value);
  //Update price when the discount toggle is changed
  document.getElementById('check').addEventListener('click', fetch_value);

});


function fetch_value() {
  //Get the slider elemeny to fetch value of views
  //Had to different functions but not worth it - just get slider here
  // const slider = e.target;
  const slider = document.querySelector('.slider input');
  // console.log(slider.value)
  //Keep the progrss bbar in sync with the slider
  const progress_bar = document.querySelector('.slider progress');
  progress_bar.value = slider.value;

  // console.log(slider_value);
  //Next two so it can update the innerhtml
  const slider_value = document.querySelector('.slider-value');
  const amount = document.querySelector('.pricing_cost');
  
  

  var cost = calc_cost(slider.value);
  var add_discount = document.getElementById('check').checked;
  console.log(add_discount);
  if (add_discount) {
    const discount_price = (cost * .76)
    cost = discount_price.toFixed(2);
  }

  amount.innerHTML = '$' + cost;
  slider_value.innerHTML = slider.value;
}


function calc_cost(pageviews) {

  if (pageviews <= 10) {
    return 8;
  } else if (pageviews <= 50) {
    return 12;
  } else if (pageviews <= 100) {
    return 16;
  } else if (pageviews < 1000) {
    return 24;
  } else if (pageviews >= 1000) {
    return 36;
  }

}
// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month