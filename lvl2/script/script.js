    const draggableCircle = document.getElementById('draggableCircle');
    const dropZone = document.getElementById('dropZone');
    const instructions = document.getElementById('instructions');
    const circle1 = document.getElementById('circle1');
    const circle2 = document.getElementById('circle2');

    let isDragging = false;
    let offsetX, offsetY;
    let firstGoal = false;
    let secondGoal = false;
    let thirdGoal = false;

    // Mouse down event to start dragging
    draggableCircle.addEventListener('mousedown', (e) => {
      isDragging = true;
      offsetX = e.offsetX;
      offsetY = e.offsetY;
      draggableCircle.style.cursor = 'grabbing';
    });

    // Mouse move event to drag the circle
    document.addEventListener('mousemove', (e) => {
      if (isDragging) {
        draggableCircle.style.left = `${e.clientX - offsetX}px`;
        draggableCircle.style.top = `${e.clientY - offsetY}px`;
      }
    });

    // Mouse up event to stop dragging and check drop location
    document.addEventListener('mouseup', () => {
      isDragging = false;
      draggableCircle.style.cursor = 'grab';

      // Check if the circle is in the drop zone
      const circleRect = draggableCircle.getBoundingClientRect();
      const dropZoneRect = dropZone.getBoundingClientRect();

      const isInDropZone =
        circleRect.left >= dropZoneRect.left &&
        circleRect.right <= dropZoneRect.right &&
        circleRect.top >= dropZoneRect.top &&
        circleRect.bottom <= dropZoneRect.bottom;

      // Update instructions if the circle is correctly placed
      if (isInDropZone) {
        //instructions.textContent = 'Good job!';
        draggableCircle.style.left = `${dropZoneRect.left + dropZoneRect.width / 2 - circleRect.width / 2}px`;
        draggableCircle.style.top = `${dropZoneRect.top + dropZoneRect.height / 2 - circleRect.height / 2}px`;
        
        if (!firstGoal){
         	instructions.textContent = 'Good job!';
          setTimeout(() => {
  				draggableCircle.style.transition = '2s';
  				draggableCircle.style.left = '50px';
  				instructions.innerHTML = 'Oh no,<br><br>again!';

  				// Wait for the 2s transition to finish, then force reset to 0s with a tiny delay
  				setTimeout(() => {
    					draggableCircle.style.transition = '0s';
  					}, 2100); // Slightly longer than the 2s transition to ensure it’s fully completed
					}, 2000);
					firstGoal = true;
          return;
        } else if (!secondGoal){
        		instructions.textContent = 'Perfect!';
            setTimeout(() => {
            	draggableCircle.style.transition = '2s';
            	draggableCircle.style.left = '70%';
              draggableCircle.style.top = '60%';
            	instructions.innerHTML = 'What??<br><br>Again!';

            // Wait for the 2s transition to finish, then force reset to 0s with a tiny delay
            setTimeout(() => {
                draggableCircle.style.transition = '0s';
              }, 2100); // Slightly longer than the 2s transition to ensure it’s fully completed
            }, 2000);
            secondGoal = true;
            return;
        } else if (!thirdGoal){
		instructions.innerHTML = 'Thank you!<br><br>Now <u>double click</u> the circle';
		dropZone.style.transition = '3s';
		dropZone.style.opacity = '0';
		draggableCircle.style.cursor = 'pointer';

          document.getElementById('draggableCircle').addEventListener('dblclick', function(){
            draggableCircle.style.transition = 'all 2s ease';
            draggableCircle.style.top = '0%';
            draggableCircle.style.left = '30%';
            draggableCircle.style.width = '0px';
            draggableCircle.style.height = '0px';

            /*setTimeout(() => {
          	window.open(window.location.href + 'blue.html', '_blank');
	    }, 2000);*/
        }, false);
          thirdGoal = true;
        } else {
		instructions.innerHTML = 'Well done! 🎉';
	}
	      /*else if (!thirdGoal){
		instructions.innerHTML = 'Thank you!<br><br>Now <u>double click</u> the circle';
		dropZone.style.transition = '3s';
		dropZone.style.opacity = '0';
		draggableCircle.style.cursor = 'pointer';

          document.getElementById('draggableCircle').addEventListener('dblclick', function(){
            draggableCircle.style.transition = 'all 2s ease';
            draggableCircle.style.top = '0%';
            draggableCircle.style.left = '30%';
            draggableCircle.style.width = '0px';
            draggableCircle.style.height = '0px';

            setTimeout(() => {
          	window.open(window.location.href + 'blue.html', '_blank');
	    }, 2000);
        }, false);
          thirdGoal = true;
        }*/
      
       
      }
    });
 
