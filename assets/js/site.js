/* Metin Ünlü — portfolio behaviour: reveal on scroll, typewriter, mobile nav. */

(function () {
	'use strict';

	document.documentElement.classList.remove('no-js');

	/* ---------- reveal on scroll ---------- */

	var revealables = document.querySelectorAll('[data-a]');

	if (!('IntersectionObserver' in window)) {
		Array.prototype.forEach.call(revealables, function (el) { el.classList.add('in'); });
	} else {
		var observer = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (!entry.isIntersecting) return;
				entry.target.classList.add('in');
				observer.unobserve(entry.target);
			});
		}, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

		Array.prototype.forEach.call(revealables, function (el, i) {
			// Stagger siblings so groups animate in sequence rather than all at once.
			var group = el.parentNode ? Array.prototype.indexOf.call(el.parentNode.children, el) : i;
			el.style.setProperty('--d', Math.min(group, 6) * 0.07 + 's');
			observer.observe(el);
		});
	}

	/* ---------- typewriter ---------- */

	var target = document.getElementById('typewriter');

	if (target) {
		var phrases = [
			'AI systems architecture',
			'full-stack engineering',
			'probabilistic forecasting',
			'on-premise LLM systems',
			'retrieval-augmented search'
		];
		var pi = 0, ci = 0, deleting = false;

		var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (reduced) {
			target.textContent = phrases[0];
		} else {
			(function loop() {
				var phrase = phrases[pi];
				target.textContent = phrase.slice(0, ci);

				var delay;
				if (!deleting) {
					ci++;
					delay = 55 + Math.random() * 45;
					if (ci > phrase.length) { deleting = true; delay = 1600; }
				} else {
					ci--;
					delay = 26;
					if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; delay = 320; }
				}

				window.setTimeout(loop, delay);
			})();
		}
	}

	/* ---------- mobile nav ---------- */

	var toggle = document.querySelector('.nav-toggle');
	var nav = document.querySelector('#header nav');

	if (toggle && nav) {
		toggle.addEventListener('click', function () {
			var open = nav.classList.toggle('open');
			toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
		});

		nav.addEventListener('click', function (e) {
			if (e.target.tagName === 'A') {
				nav.classList.remove('open');
				toggle.setAttribute('aria-expanded', 'false');
			}
		});
	}

})();
