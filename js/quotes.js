const quotes = [
    {
        quote : "No one is you and what is your power.",
    },
    {
        quote : "Don't stop until you're proud.",
    },
    {
        quote : "Make it happen. Shock everyone.",
    },
    {
        quote : "Your life isn't yours if you always care what others think.",
    },
    {
        quote : "We cannot become what we want by remaining what we are.",
    },
    {
        quote : "I never lose. I either win or learn.",
    },
    {
        quote : "You are what you do, not what you say you'll do.",
    },
    {
        quote : "Life is not fair, get used to it.",
    },
    {
        quote : "The unexamined life is not worth living.",
    },
    {
        quote : "Who dares, wins.",
    }
]

const quote = document.querySelector("#quotes span");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

//quotes를 입력할 때, quote: 이렇게 적었기 때문에 .quote 필요.
quote.innerText = todaysQuote.quote;