const step1 = document.getElementById('step1');
const hand = document.getElementById('hand');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const step4 = document.getElementById('step4');
let circleClicked1 = false;

document.addEventListener('DOMContentLoaded', function() {
    circle.style.left = '75%';
    circle1.style.left = '25%';
}, false);

circle.addEventListener('click', () => {
  if (!circleClicked1) {
    // Circle click event
    circle1.style.display = 'none';
    circle2.style.display = 'none';
      
    circle.style.transition = 'all 3s ease';
    circle.style.top = '50%';
    circle.style.left = '50%';
    step1.style.display = 'none';
    hand.style.display = 'none';
    step2.style.display = 'block';
    //step3.style.display = 'block';
    setTimeout(() => {
    		step2.style.display = 'none';
        step3.style.display = 'block';
        circle.style.transition = 'all 2s ease';
        circle.style.top = '0%';
        circle.style.left = '20%';
        circle.style.width = '0px';
        circle.style.height = '0px';
    }, 5000);
  }   
});
