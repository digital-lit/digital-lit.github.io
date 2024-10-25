    const draggableCircle = document.getElementById('draggableCircle');
    const dropZone = document.getElementById('dropZone');
    const instructions = document.getElementById('instructions');

    let isDragging = false;
    let offsetX, offsetY;

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
        instructions.textContent = 'Good job!';
        draggableCircle.style.left = `${dropZoneRect.left + dropZoneRect.width / 2 - circleRect.width / 2}px`;
        draggableCircle.style.top = `${dropZoneRect.top + dropZoneRect.height / 2 - circleRect.height / 2}px`;
      }
    });
 
