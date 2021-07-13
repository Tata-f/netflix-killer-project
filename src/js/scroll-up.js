import getRefs from './get-refs';

const refs = getRefs();

onScrollUp();

function onScrollUp() {
    refs.topArrowBtn.addEventListener('click', () =>
        window.scrollTo({ top: 0, behavior: 'smooth' }));
    
    window.addEventListener('scroll', (e) => {
        pageYOffset < document.documentElement.clientHeight
            ? refs.topArrowBtn.classList.remove('show')
            : refs.topArrowBtn.classList.add('show');
    });
}
