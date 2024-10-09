document.addEventListener('DOMContentLoaded', function () {
    new Splide('#latest-creations-carousel', {
        perPage: 3,
        autoplay: true,
        interval: 5000,
        focus: 'center',
        type: 'loop',
        gap: '1rem',
        padding: '1rem',
    }).mount();
});
