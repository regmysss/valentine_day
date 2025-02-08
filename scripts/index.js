const title = [
    'Привіт',
    'Ти заслуговуєш',
    'Цінуй миті',
];

const text = [
    'Нехай цей день принесе тобі усмішку, нові можливості та приємні моменти. Почни його з позитивних думок і гарного настрою!',
    'Ти заслуговуєш на найкраще. Твоя доброта та посмішка роблять цей світ яскравішим, тому цінуй себе і свої маленькі перемоги кожного дня.',
    'Кожен день унікальний, і він не повториться. Тож цінуй його і наповнюй любов\'ю та гарними емоціями.'
]

const titleElement = document.querySelector('.title');
const textElement = document.querySelector('.text');
const btnNextElement = document.getElementById('next');
const btnPrevElement = document.getElementById('prev');

let step = 0;

function changeText() {
    titleElement.textContent = title[step];
    textElement.textContent = text[step];
};

btnNextElement.addEventListener('click', () => {
    if (step < title.length - 1) {
        step++;
        changeText();
        btnPrevElement.style.display = 'block';

        if (step === title.length - 1)
            btnNextElement.style.display = 'none';
    }
});

btnPrevElement.addEventListener('click', () => {
    if (step > 0) {
        step--;
        changeText();

        if (step === 0)
            btnPrevElement.style.display = 'none';

        if (step < title.length - 1)
            btnNextElement.style.display = 'block';
    }
});

changeText();