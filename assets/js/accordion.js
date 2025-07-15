document.addEventListener('DOMContentLoaded', function() {
  const headers = document.querySelectorAll('.accordion-header');
  headers.forEach(header => {
    header.addEventListener('click', function() {
      const item = this.parentElement;
      const open = item.classList.contains('active');
      document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
      if (!open) {
        item.classList.add('active');
      }
    });
  });
});