const scrollWrapper = document.getElementById('scrollWrapper');

// Optional: auto-scroll effect
setInterval(() => {
  scrollWrapper.scrollLeft += 1;
  
  // Reset to beginning for loop
  if (scrollWrapper.scrollLeft >= scrollWrapper.scrollWidth - scrollWrapper.clientWidth) {
    scrollWrapper.scrollLeft = 0;
  }
}, 20);