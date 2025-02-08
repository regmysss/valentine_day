const title = [
    'Привіт',
    'Ти заслуговуєш',
    'Цінуй миті',
    '❤️❤️❤️'
];

const text = [
    'Нехай цей день принесе тобі усмішку, нові можливості та приємні моменти. Почни його з позитивних думок і гарного настрою!',
    'Ти заслуговуєш на найкраще. Твоя доброта та посмішка роблять цей світ яскравішим, тому цінуй себе і свої маленькі перемоги кожного дня.',
    'Кожен день унікальний, і він не повториться. Тож цінуй його і наповнюй любов\'ю та гарними емоціями.',
    '<img class="heart" src="../valentine_day/source/images/heart_2k.png" alt="heart" />'
]

const titleElement = document.querySelector('.title');
const textElement = document.querySelector('.text');
const btnNextElement = document.getElementById('next');
const btnPrevElement = document.getElementById('prev');

let step = 0;

function changeText() {
    titleElement.innerHTML = title[step];
    if (step === title.length - 1)
        textElement.innerHTML = text[step];
    else
        typeText(text[step], step);
};

function typeText(str, stepParam, position = 0) {
    if (position === str.length || step != stepParam) return;

    textElement.innerHTML += str[position];
    position++;

    const interval = getRandInterval(25, 60);
    setTimeout(() => typeText(str, stepParam, position), interval);
}

function getRandInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

btnNextElement.addEventListener('click', () => {
    if (step < title.length - 1) {
        step++;
        textElement.innerHTML = '';
        changeText();
        btnPrevElement.style.display = 'block';

        if (step === title.length - 1)
            btnNextElement.style.display = 'none';
    }
});

btnPrevElement.addEventListener('click', () => {
    if (step > 0) {
        step--;
        textElement.innerHTML = '';
        changeText();

        if (step === 0)
            btnPrevElement.style.display = 'none';

        if (step < title.length - 1)
            btnNextElement.style.display = 'block';
    }
});

changeText();