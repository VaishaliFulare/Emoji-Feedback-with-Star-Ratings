const emoji = document.getElementById('emoji');
const label = document.getElementById('label');

const emojiMap = ['😡', '😕', '😐', '🙂', '😄'];
const labelMap = ['Terrible', 'Bad', 'Okay', 'Good', 'Excellent'];

const stars = [
    document.getElementById('star-0'),
    document.getElementById('star-1'),
    document.getElementById('star-2'),
    document.getElementById('star-3'),
    document.getElementById('star-4')
];

function updateStars(index) {
    stars.forEach((star, i) => {
        star.classList.toggle('active', i <= index);
    });
}

function updateEmoji(index) {
    emoji.textContent = emojiMap[index];
    label.textContent = labelMap[index];
}

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        updateStars(index);
        updateEmoji(index);

    });
});