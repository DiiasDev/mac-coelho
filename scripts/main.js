
document.addEventListener('DOMContentLoaded', function(){
	// Lightbox
	const lightbox = document.getElementById('lightbox');
	const lightboxImg = document.querySelector('.lightbox-img');
	const closeBtn = document.querySelector('.lightbox-close');

	document.querySelectorAll('.menu-card img').forEach(img => {
		img.addEventListener('click', () => {
			lightboxImg.src = img.src;
			lightboxImg.alt = img.alt;
			lightbox.setAttribute('aria-hidden', 'false');
			document.body.style.overflow = 'hidden';
		});
	});

	function closeLightbox(){
		lightbox.setAttribute('aria-hidden', 'true');
		lightboxImg.src = '';
		document.body.style.overflow = '';
	}

	closeBtn.addEventListener('click', closeLightbox);
	lightbox.addEventListener('click', (e) => { if(e.target === lightbox) closeLightbox(); });
	document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeLightbox(); });

	// WhatsApp button
	const waBtn = document.getElementById('whatsapp-btn');
	// Assumption: business phone number is Brazil +55 19 99913-0814 (from image). Update if needed.
	const phone = '5519999130814';
	const defaultMessage = encodeURIComponent('Olá! Gostaria de fazer um pedido. Você pode me ajudar?');
	waBtn.href = `https://wa.me/${phone}?text=${defaultMessage}`;
	waBtn.target = '_blank';
	waBtn.rel = 'noopener noreferrer';
});
