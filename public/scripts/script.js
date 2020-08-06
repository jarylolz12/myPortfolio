const button = document.querySelector('#btn');
const index = document.querySelector('.index');
const section = document.querySelector('section');
const rightPanel = document.querySelector('.tuo');
const leftPanel = document.querySelector('.wala');

const btnTheme = document.querySelectorAll('.btnTheme');
const theme = document.querySelectorAll('.theme');

const wrapper = document.querySelector('.wrapper');

function hideMe() {
	setTimeout(() => {
		wrapper.classList.add('hide');
	}, 300);
}
button.addEventListener('click', () => {
	section.classList.add('show');
	wrapper.classList.add('tago');
	hideMe();
});

btnTheme.forEach((colors) => {
	const colorTheme = colors.name;
	colors.addEventListener('click', () => {
		switch (colorTheme) {
			case 'dark':
				theme[0].setAttribute('disabled', 'disabled');
				theme[1].setAttribute('disabled', 'disabled');
				theme[2].setAttribute('disabled', 'disabled');
				theme[3].removeAttribute('disabled', 'disabled');
				break;
			case 'light':
				theme[0].setAttribute('disabled', 'disabled');
				theme[1].setAttribute('disabled', 'disabled');
				theme[2].removeAttribute('disabled', 'disabled');
				theme[3].setAttribute('disabled', 'disabled');
				break;
			case 'green':
				theme[0].setAttribute('disabled', 'disabled');
				theme[1].removeAttribute('disabled', 'disabled');
				theme[2].setAttribute('disabled', 'disabled');
				theme[3].setAttribute('disabled', 'disabled');
				break;
			case 'purple':
				theme[0].removeAttribute('disabled', 'disabled');
				theme[1].setAttribute('disabled', 'disabled');
				theme[2].setAttribute('disabled', 'disabled');
				theme[3].setAttribute('disabled', 'disabled');
				break;
		}
	});
});
