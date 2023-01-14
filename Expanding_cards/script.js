const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveList();
        panel.classList.add('active');
    })
})

function removeActiveList(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}