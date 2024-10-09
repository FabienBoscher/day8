// Importation de Tippy.js
tippy('#image', {
    content: "This is an image element.",
    animation: 'scale',
    trigger: 'click',
    hideOnClick: true
});

tippy('#square', {
    content: "This is a square (div element).",
    animation: 'scale',
    trigger: 'click',
    hideOnClick: true
});

tippy('#sound', {
    content: "This is a sound element (audio).",
    animation: 'scale',
    trigger: 'click',
    hideOnClick: true
});

tippy('#tutorial-button', {
    content: "This is a button element.",
    animation: 'scale',
    trigger: 'click',
    hideOnClick: true
});

tippy('#video', {
    content: "This is a video element.",
    animation: 'scale',
    trigger: 'click',
    hideOnClick: true
});

// Fermer les tooltips en cliquant en dehors
document.addEventListener('click', function (event) {
    const tippyInstances = document.querySelectorAll('[data-tippy-root]');
    tippyInstances.forEach(function (tooltip) {
        if (!tooltip.contains(event.target)) {
            tooltip._tippy.hide();
        }
    });
});
