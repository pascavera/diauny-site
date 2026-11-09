// Envoie chaque téléphone vers sa boutique : iPhone/iPad → App Store, Android → Google Play.
// Sur ordinateur, les liens restent sur telecharger.html (les deux badges et le QR code).
(function () {
  var APP_STORE = 'https://apps.apple.com/ga/app/diauny/id6814701018';
  var GOOGLE_PLAY = 'https://play.google.com/store/apps/details?id=com.diauny.app';
  var ua = navigator.userAgent || '';
  // Les iPad récents se présentent comme un Mac : on les reconnaît à l'écran tactile.
  var ios = /iPhone|iPad|iPod/i.test(ua) || (/Macintosh/i.test(ua) && navigator.maxTouchPoints > 1);
  var android = /Android/i.test(ua);
  var cible = ios ? APP_STORE : android ? GOOGLE_PLAY : null;
  if (!cible) return;
  var liens = document.querySelectorAll('[data-telecharger]');
  for (var i = 0; i < liens.length; i++) liens[i].href = cible;
  if (document.body.hasAttribute('data-redirection')) location.replace(cible);
})();
