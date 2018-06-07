// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

const interval = document.getElementById('interval');
const foreground = document.getElementById('foreground');

document.getElementById('save_lincoln').addEventListener("click", (event) => {
  saveLincoln(parseInt(interval.value));
});

function saveLincoln(ourinterval) {
  foreground.style.opacity = 1;

  if (isNaN(ourinterval)) {
    ourinterval = 1000;
  }

  setInterval(function () {
    foreground.style.opacity -= 0.01;
  }, (ourinterval/50));
}
