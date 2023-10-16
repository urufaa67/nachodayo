const headerElement = document.getElementById('header');

document.addEventListener('scroll', function() {
  // const scrollY = window.pageYOffset;

  // if (scrollY > 0) {
  //   headerElement.classList.add('active');
  // } else {
  //   headerElement.classList.remove('active');
  // }

  if (document.getElementById('move').getBoundingClientRect().bottom < 0) {
    headerElement.classList.add('active');
  } else {
    headerElement.classList.remove('active');
  }
});