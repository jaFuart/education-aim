;(function() {

	const mOpen = document.querySelectorAll('[data-modal]');
	if (mOpen.length == 0) return;

	const overlay = document.querySelector('.overlay-l'),
	modals = document.querySelectorAll('.dlg-modal'),
	mClose = document.querySelectorAll('[data-close]');
	let	mStatus = false;

	for (let el of mOpen) {
		el.addEventListener('click', function(e) {
			let modalId = el.dataset.modal,
				modal = document.getElementById(modalId);
			modalShow(modal);
		});
	}

	for (let el of mClose) {
		el.addEventListener('click', modalClose);
	}

	document.addEventListener('keydown', modalClose);

	function modalShow(modal) {
		overlay.classList.remove('fadeOut');
		overlay.classList.add('fadeIn');

		if (typeAnimate === 'slide') {
			modal.classList.remove('slideOutUp');
			modal.classList.add('slideInDown');
		}
		mStatus = true;
	}

	function modalClose(event) {
		if (mStatus && ( event.type != 'keydown' || event.keyCode === 27 ) ) {
			for (let modal of modals) {
				if (typeAnimate == 'slide') {
					modal.classList.remove('slideInDown');
					modal.classList.add('slideOutUp');
				}
			}

			overlay.classList.remove('fadeIn');
			overlay.classList.add('fadeOut');
			mStatus = false;
		}
	}
})();

;(function() {

	const mOpen = document.querySelectorAll('[data-modalr]');
	if (mOpen.length == 0) return;

	const overlay = document.querySelector('.overlay-r'),
	modals = document.querySelectorAll('.dlg-modalr'),
	mClose = document.querySelectorAll('[data-close]');
	let	mStatus = false;

	for (let el of mOpen) {
		el.addEventListener('click', function(e) {
			let modalId = el.dataset.modalr,
				modal = document.getElementById(modalId);
			modalShow(modal);
		});
	}

	for (let el of mClose) {
		el.addEventListener('click', modalClose);
	}

	document.addEventListener('keydown', modalClose);

	function modalShow(modal) {
		overlay.classList.remove('fadeOut');
		overlay.classList.add('fadeIn');

		if (typeAnimater === 'slideR') {
			modal.classList.remove('slideOutUpr');
			modal.classList.add('slideInDownr');
		}
		mStatus = true;
	}

	function modalClose(event) {
		if (mStatus && ( event.type != 'keydown' || event.keyCode === 27 ) ) {
			for (let modal of modals) {
				if (typeAnimater == 'slideR') {
					modal.classList.remove('slideInDownr');
					modal.classList.add('slideOutUpr');
				}
			}

			overlay.classList.remove('fadeIn');
			overlay.classList.add('fadeOut');
			mStatus = false;
		}
	}
})();

;(function() {

	const mOpen = document.querySelectorAll('[data-modalm]');
	if (mOpen.length == 0) return;

	const overlay = document.querySelector('.overlay'),
	modals = document.querySelectorAll('.dlg-modalm'),
	mClose = document.querySelectorAll('[data-close]');
	let	mStatus = false;

	for (let el of mOpen) {
		el.addEventListener('click', function(e) {
			let modalId = el.dataset.modalm,
				modal = document.getElementById(modalId);
			modalShow(modal);
		});
	}

	for (let el of mClose) {
		el.addEventListener('click', modalClose);
	}

	document.addEventListener('keydown', modalClose);

	function modalShow(modal) {
		overlay.classList.remove('fadeOut');
		overlay.classList.add('fadeIn');
		
		if (typeAnimateM === 'fade') {
			modal.classList.remove('fadeOut');
			modal.classList.add('fadeIn');
		} 
		mStatus = true;
	}

	function modalClose(event) {
		if (mStatus && ( event.type != 'keydown' || event.keyCode === 27 ) ) {
			for (let modal of modals) {
				if (typeAnimateM == 'fade') {
					modal.classList.remove('fadeIn');
					modal.classList.add('fadeOut');
				} 
			}
			overlay.classList.remove('fadeIn');
			overlay.classList.add('fadeOut');
			mStatus = false;
		}
	}
})();
