const prevArrow = document.querySelectorAll('.prev-arrow'),
      nextArrow = document.querySelectorAll('.next-arrow'),
      tanya = document.getElementById('tanya'),
      john = document.getElementById('john'),
      tanyaPrevArrow = document.getElementById('tanya-prev-arrow');

let testimonials = [tanya, john];


// Previous Arrow Event Listener

prevArrow.forEach(arrow => {
  arrow.addEventListener('click', () => {
    if(arrow.parentElement.parentElement.id.includes('tanya')) {
      return null;
    } else if(arrow.parentElement.parentElement.id.includes('john')) {
      arrow.parentElement.parentElement.classList.toggle('active');
      arrow.parentElement.parentElement.previousElementSibling.classList.toggle('active');
    }
  });   
})

// Next Arrow Event Listener

nextArrow.forEach(arrow => {
  arrow.addEventListener('click', () => {
    if(arrow.parentElement.parentElement.id.includes('john')) {
      return null;
    } else if(arrow.parentElement.parentElement.id.includes('tanya')) {
      arrow.parentElement.parentElement.classList.toggle('active');
      arrow.parentElement.parentElement.nextElementSibling.classList.toggle('active');
    }
  });
})



