const circle = document.getElementById('circle');
const buffer = document.getElementById('buffer');
const step1 = document.getElementById('step1');
const step2= document.getElementById('step2');
const step3 = document.getElementById('step3');
const step4 = document.getElementById('step4');
const step5 = document.getElementById('step5');
const step6 = document.getElementById('step6');
const step7 = document.getElementById('step7');

let circleClicked1 = false;
let circleClicked2 = false;
let circleClicked3 = false;
let circleClicked4 = false;
    
// Circle click event
circle.addEventListener('click', () => {
  if (!circleClicked1) {
		//Shift the circle to the right
		circle.style.left = '75%';
    circle.style.top = '20%';
    step1.style.display = 'none';
    step2.style.display = 'block';
      
    circleClicked1 = true;
  } else if (!circleClicked2) {
    // Move the circle down to the bottom of the page
    circle.style.top = '180%';
    circle.style.left = '50%';
    buffer.style.top = '220%';
    step2.style.display = 'none';
    step3.style.display = 'block';
    step4.style.display = 'block';
    
    circleClicked2 = true;
  } else if (!circleClicked3){
  	circle.style.top = '50%';
    circle.style.left = '50%';
    step3.style.display = 'none';
    step4.style.display = 'none';
    step5.style.display = 'block';
    step6.style.display = 'block';
    
    circleClicked3 = true;
  } else if (!circleClicked4){
  	step5.style.display = 'none';
    step6.style.display = 'none';
    circle.style.transition = 'all 2s ease';
    circle.style.top = '0%';
    circle.style.left = '20%';
    circle.style.width = '0px';
    circle.style.height = '0px';
    setTimeout(() => {
    	//window.location.href
	window.open(window.location.href + '2.html', '_blank');
      
      step7.style.display = 'block';

	//step7.textContent = window.location.href + "2.html";

      circle.style.top = '50%';
      circle.style.left = '50%';
      circle.style.width = '100px';
      circle.style.height = '100px';
    }, 2000);

	setTimeout(() => {
		document.title = "Click here!";
	}, 15000);
     circleClicked4 = true;

    } else{
    	circle.style.transition = 'all 1s ease';
      circle.style.top = '45%';
      setTimeout(() => {
      	circle.style.top = '50%';
      }, 500);
    }
  
});
