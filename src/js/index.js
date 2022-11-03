document.addEventListener('DOMContentLoaded', function() {

  // Adding eventListener to the slider to update the pagevews and the cost per month
  document.querySelector('.slider input').addEventListener('change',fetch_value);

});

// No improvements necssary - done!
function fetch_value(e) {
  const slider = e.target;
  console.log(slider.value)
  const progress_bar = document.querySelector('.slider progress');
  progress_bar.value = slider.value;
  console.log(slider_value);
  const slider_value = document.querySelector('.slider-value');
  const amount = document.querySelector('.pricing_cost');
  
  

  const cost = calc_cost(slider.value);
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