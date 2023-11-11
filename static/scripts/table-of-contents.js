window.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const li = document.querySelector(`#TableOfContents li a[href="${id}"]`).parentElement;
      if (entry.intersectionRatio > 0) {
        li.classList.add('active');
      } else {
        li.classList.remove('active');
      }
    });
  });
  document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]').forEach((section) => {
    observer.observe(section);
  });
});