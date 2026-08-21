fetch('data.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('intro-text').innerText = data.intro;
    
    // Brod contact
    const brodPhone = document.getElementById('brod-phone');
    brodPhone.innerText = data.brod_phone;
    brodPhone.href = `tel:${data.brod_phone}`;
    
    const brodEmail = document.getElementById('brod-email');
    brodEmail.innerText = data.brod_email;
    brodEmail.href = `mailto:${data.brod_email}`;

    // Notice & Footer
    document.getElementById('notice-text').innerText = data.notice;
    document.getElementById('footer-text').innerText = data.footer;
  });