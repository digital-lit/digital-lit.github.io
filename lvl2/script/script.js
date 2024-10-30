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
  				instructions.innerHTML = 'Oh no!<br>Drag the circle to the center again';

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
            	instructions.innerHTML = 'What?!<br>Drag the circle to the center again, please';

            // Wait for the 2s transition to finish, then force reset to 0s with a tiny delay
            setTimeout(() => {
                draggableCircle.style.transition = '0s';
              }, 2100); // Slightly longer than the 2s transition to ensure it’s fully completed
            }, 2000);
            secondGoal = true;
            return;
        } else if (!thirdGoal){
        	instructions.textContent = 'Thank you!';
          dropZone.style.transition = '3s';
          dropZone.style.opacity = '0';
          
          var greenRect = draggableCircle.getBoundingClientRect();
          var greenLeft = greenRect.left.toFixed();
          var greenTop = greenRect.top.toFixed();
          
          circle1.style.left = greenLeft + "px";
          circle1.style.top = greenTop + "px";
          circle2.style.left = greenLeft + "px";
          circle2.style.top = greenTop + "px";
          
          
          setTimeout(() => {
          	circle1.style.display = 'inline';
            circle2.style.display = 'inline';
          	setTimeout(() => {
              circle1.style.left = greenLeft/2 + "px";
              circle2.style.left = greenLeft*1.5 + "px";
          	}, 1000);
          }, 2000);
          
          setTimeout(() => {
            draggableCircle.style.transition = 'all 2s ease';
            draggableCircle.style.top = '0%';
            draggableCircle.style.left = '30%';
            draggableCircle.style.width = '0px';
            draggableCircle.style.height = '0px';
            
            circle1.style.top = '0%';
            circle1.style.left = '40%';
            circle1.style.width = '0px';
            circle1.style.height = '0px';
            
            circle2.style.top = '0%';
            circle2.style.left = '20%';
            circle2.style.width = '0px';
            circle2.style.height = '0px';
            setTimeout(() => {
              //window.location.href
          window.open(window.location.href + 'blue.html', '_blank');
          window.open(window.location.href + 'green.html', '_blank');
          window.open(window.location.href + 'red.html', '_blank');
          window.open(window.location.href + 'instructions.html', '_blank');
	    }, 2100);
          }, 8000);
          
          thirdGoal = true;
        }
      
       
      }
    });
 
