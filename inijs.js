const menuLinks = document.querySelectorAll('.link-menu a');

menuLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const target = this.getAttribute('href');
    const section = document.querySelector(target);

    section.scrollIntoView({ behavior: 'smooth' });

    menuLinks.forEach(item => item.classList.remove('aktif'));
    this.classList.add('aktif');
  });
});

document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  alert(`Makasih ${name}! Pesan kamu udah dikirim. Aku bakal bales ke ${email} ya!`);
  
  e.target.reset();
});




