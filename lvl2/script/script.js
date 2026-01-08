const dropZone = document.getElementById('dropZone');
const instructions = document.getElementById('instructions');

const circles = [
  document.getElementById('draggableCircle1'),
  document.getElementById('draggableCircle2'),
  document.getElementById('draggableCircle3'),
];

// Track which circles are completed
const placed = new Set();

// Drag state
let activeCircle = null;
let offsetX = 0;
let offsetY = 0;

// Optional: make sure circles are absolutely positioned
circles.forEach((c) => {
  c.style.position = 'absolute';
  c.style.cursor = 'grab';
});

// Starting positions (spread out)
function setStartPositions() {
  // Use viewport-based positions so it scales with screen size
  circles[0].style.left = '8%';   // lower left
  circles[0].style.top  = '75%';

  circles[1].style.left = '78%';  // upper right
  circles[1].style.top  = '10%';

  circles[2].style.left = '78%';  // lower right
  circles[2].style.top  = '75%';
}

setStartPositions();

// Helper: check if a circle is fully inside drop zone
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

// Helper: snap to center of drop zone
function snapToCenter(circleEl, zoneEl) {
  const circleRect = circleEl.getBoundingClientRect();
  const zoneRect = zoneEl.getBoundingClientRect();

  // set left/top in viewport coords
  circleEl.style.left = `${zoneRect.left + zoneRect.width / 2 - circleRect.width / 2}px`;
  circleEl.style.top = `${zoneRect.top + zoneRect.height / 2 - circleRect.height / 2}px`;
}

// Attach mousedown to each circle
circles.forEach((circle) => {
  circle.addEventListener('mousedown', (e) => {
    // If already placed, don't let it move again (optional)
    if (placed.has(circle.id)) return;

    activeCircle = circle;

    // Offset within the element where mouse grabbed it
    const rect = circle.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    circle.style.cursor = 'grabbing';
  });
});

// Drag move
document.addEventListener('mousemove', (e) => {
  if (!activeCircle) return;

  activeCircle.style.left = `${e.clientX - offsetX}px`;
  activeCircle.style.top = `${e.clientY - offsetY}px`;
});

// Drop
document.addEventListener('mouseup', () => {
  if (!activeCircle) return;

  activeCircle.style.cursor = 'grab';

  if (isFullyInside(activeCircle, dropZone)) {
    snapToCenter(activeCircle, dropZone);

    // Mark placed
    placed.add(activeCircle.id);

    // Optionally "lock" it visually/behaviorally
    activeCircle.style.cursor = 'default';

    const remaining = 3 - placed.size;
    if (remaining > 0) {
      instructions.textContent = `Nice! ${remaining} more to go.`;
    } else {
      instructions.textContent = 'Awesome! You dragged all 3 circles into the center!';
      window.open(url, 'https://digital-lit.github.io/lvl2/blue.html').focus();
    }
  }

  activeCircle = null;
});
