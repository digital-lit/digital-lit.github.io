const textbox = document.getElementById('real_textbox');
const step1 = document.getElementById('step1');
const fake1 = document.getElementById('fake1');
const fake2 = document.getElementById('fake2');

let textboxClicked = false;

textbox.addEventListener('click', () => {
	if (!textboxClicked){
    step1.style.display = 'none';
    
    fake1.style.left = '0%';
    fake2.style.left = '0%';
    textbox.style.left = '0%';

    fake1.style.height = '0px';
    fake2.style.height = '0px';
    textbox.style.height = '0px';
    
    fake1.style.padding = '0';
    fake2.style.padding = '0';
    textbox.style.padding = '0';
    
    setTimeout(() => {
  		fake1.style.display = 'none';
      fake2.style.display = 'none';
      textbox.style.display = 'none';
  	},900);
    
    step2.style.display = 'block';
    textboxClicked = true;
    }
});

fake1.addEventListener('click', () => {
	step1.textContent ="Not that one...";
  setTimeout(() => {
  	step1.textContent = "Which box can you type in?";
  },3000);
});

fake2.addEventListener('click', () => {
	step1.textContent ="Not that one...";
  setTimeout(() => {
  	step1.textContent = "Which box can you type in?";
  },3000);
});
  
  
