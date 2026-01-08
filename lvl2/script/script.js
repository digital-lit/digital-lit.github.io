const dropZone = document.getElementById('dropZone');
const instructions = document.getElementById('instructions');

const circles = [
  document.getElementById('draggableCircle1'),
  document.getElementById('draggableCircle2'),
  document.getElementById('draggableCircle3'),
];

const placed = new Set();

let activeCircle = null;
let offsetX = 0;
let offsetY = 0;

circles.forEach((c) => {
  c.style.position = 'absolute';
  c.style.cursor = 'grab';
});

function setStartPositions() {
  circles[0].style.left = '8%';   // lower left
  circles[0].style.top  = '75%';

  circles[1].style.left = '78%';  // upper right
  circles[1].style.top  = '10%';

  circles[2].style.left = '78%';  // lower right
  circles[2].style.top  = '75%';
}
setStartPositions();

function isFullyInside(circleEl, zoneEl) {
  const circleRect = circleEl.getBoundingClientRect();
  const zoneRect = zoneEl.getBoundingClientRect();

  return (
    circleRect.left >= zoneRect.left &&
    circleRect.right <= zoneRect.right &&
    circleRect.top >= zoneRect.top &&
    circleRect.bottom <= zoneRect.bottom
  );
}

function snapToCenter(circleEl, zoneEl) {
  const circleRect = circleEl.getBoundingClientRect();
  const zoneRect = zoneEl.getBoundingClientRect();

  circleEl.style.left = `${zoneRect.left + zoneRect.width / 2 - circleRect.width / 2}px`;
  circleEl.style.top  = `${zoneRect.top + zoneRect.height / 2 - circleRect.height / 2}px`;
}

circles.forEach((circle) => {
  circle.addEventListener('mousedown', (e) => {
    if (placed.has(circle.id)) return;

    activeCircle = circle;

    const rect = circle.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    circle.style.cursor = 'grabbing';

    // Prevent text selection while dragging
    e.preventDefault();
  });
});

document.addEventListener('mousemove', (e) => {
  if (!activeCircle) return;

  activeCircle.style.left = `${e.clientX - offsetX}px`;
  activeCircle.style.top  = `${e.clientY - offsetY}px`;
});

function endDrag() {
  if (!activeCircle) return;
  activeCircle.style.cursor = 'grab';
  activeCircle = null;
}

document.addEventListener('mouseup', () => {
  if (!activeCircle) return;

  try {
    if (isFullyInside(activeCircle, dropZone)) {
      snapToCenter(activeCircle, dropZone);
      placed.add(activeCircle.id);
      activeCircle.style.cursor = 'default';

      const remaining = 3 - placed.size;
      if (remaining > 0) {
        instructions.textContent = `Nice! ${remaining} more to go.`;
      } else {
        instructions.textContent =
          'Awesome! You dragged all 3 circles into the center!';

        const newTab = window.open(
          'https://digital-lit.github.io/lvl2/blue.html',
          '_blank'
        );
        if (newTab) newTab.focus();
      }
    }
  } finally {
    endDrag();
  }
});

// Safety: stop dragging if window loses focus / mouse leaves page
window.addEventListener('blur', endDrag);
document.addEventListener('mouseleave', endDrag);
