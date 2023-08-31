document.getElementById('contactform').addEventListener('submit', function(e) {
  e.preventDefault(); // Mencegah submit form

  // Mengambil nilai input
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  var message = document.getElementById('phone').value;

  // Kirim kontak melalui email
  var data = {
    name: name,
    email: email,
    message: message,
    noHp : phone
  };

  // Ganti dengan URL pengiriman email Anda
  var url = 'http://localhost/portofolio-1/index/contact.html/send-email';

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(function(response) {
    if (response.ok) {
      alert('Pesan terkirim!');
      document.getElementById('contactform').reset();
    } else {
      alert('Terjadi kesalahan. Silakan coba lagi.');
    }
  })
  .catch(function(error) {
    alert('Terjadi kesalahan. Silakan coba lagi.');
  });
});

