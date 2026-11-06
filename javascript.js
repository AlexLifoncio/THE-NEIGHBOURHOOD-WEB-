const lyrics = [
    '"And now let me hold both your hands in the holes of my sweater..." — Sweater Weather',
    '"I change by the hour, I mcsh with the power..." — Daddy Issues',
    '"Lost in translation with no explanation..." — Softcore',
    '"Every day is a dynamic adventure when you\'re living it with you..." — Scary Love',
    '"I\'m a little bit generic, \'cause I\'m generic for you..." — Reflections'
];

function generateLyric() {
            const lyrics = [
                "\"Sweater Weather, when it's cold I know...\"",
                "\"I'll be the one who finds you...\"",
                "\"Darkness is a fit...\"",
                "\"Looking at the floor... I'm bored...\"",
                "\"You're the best thing... about all this...\""
            ];
            const randomIndex = Math.floor(Math.random() * lyrics.length);
            const display = document.getElementById('lyric-display');
            display.style.opacity = '0';
            setTimeout(() => {
                display.textContent = lyrics[randomIndex];
                display.style.opacity = '1';
            }, 300);
        }