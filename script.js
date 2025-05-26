const scrollWrapper = document.getElementById('scrollWrapper');

// Optional: auto-scroll effect
setInterval(() => {
  scrollWrapper.scrollLeft += 1;
  
  // Reset to beginning for loop
  if (scrollWrapper.scrollLeft >= scrollWrapper.scrollWidth - scrollWrapper.clientWidth) {
    scrollWrapper.scrollLeft = 0;
  }
}, 20);







// -------------------------email----------------------



const slotTrack = document.querySelector('.slot-track');
const items = slotTrack.children;
const slotWrapper = document.querySelector('.slot-wrapper');
let index = 0;

// Get height of one line
const itemHeight = Math.ceil(items[0].getBoundingClientRect().height);
slotWrapper.style.height = `${itemHeight}px`;

const scroll = () => {
  index++;
  slotTrack.style.transition = 'transform 0.5s ease-in-out';
  slotTrack.style.transform = `translateY(-${index * itemHeight}px)`;

  // When it reaches the duplicate (last one), reset back to first
  if (index === items.length - 1) {
    setTimeout(() => {
      slotTrack.style.transition = 'none'; // no animation
      slotTrack.style.transform = 'translateY(0)';
      index = 0;
    }, 500); // wait for transition to finish
  }
};

setInterval(scroll, 2000);





// ------------------------- questions ------------------------

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  question.addEventListener('click', () => {
    const isOpen = answer.classList.contains('open');

    // Close all
    document.querySelectorAll('.faq-answer').forEach(a => {
      a.classList.remove('open');
      a.style.maxHeight = null;
    });

    // Open clicked one
    if (!isOpen) {
      answer.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});
