document.addEventListener('DOMContentLoaded', function () {
  const banner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('cookie-accept');
  const declineBtn = document.getElementById('cookie-decline');
  const cookieCloseBtn = document.getElementById('cookie-close-btn');

  // if (localStorage.getItem('cookieConsent')) {
  //   banner.style.display = 'none';
  // } else {
  //   banner.style.display = 'flex';
  // }

  acceptBtn.addEventListener('click', () => {
    // localStorage.setItem('cookieConsent', 'accepted');
    banner.style.display = 'none';
  });

  declineBtn.addEventListener('click', () => {
    // localStorage.setItem('cookieConsent', 'declined');
    banner.style.display = 'none';
  });

  cookieCloseBtn.addEventListener('click', () => {
    banner.style.display = 'none';
  });
});
