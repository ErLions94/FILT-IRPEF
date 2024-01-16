const pages = document.querySelectorAll('.page');
let currentPage = 0;

document.addEventListener('wheel', (event) => {
  if (event.deltaY > 0 && currentPage < pages.length - 1) {
    currentPage++;
  } else if (event.deltaY < 0 && currentPage > 0) {
    currentPage--;
  }

  scrollToPage(currentPage);
});

function scrollToPage(pageIndex) {
  const yOffset = window.innerHeight * pageIndex;
  window.scrollTo({ top: yOffset, behavior: 'smooth' });
}
