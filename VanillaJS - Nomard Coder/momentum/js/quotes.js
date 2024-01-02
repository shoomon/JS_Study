const quotes = [
    {
        quote: "Happiness depends upon ourselves.",
        author: "Aristotle",
    },
    {
        quote: "Happy people plan actions, they don't plan results.",
        author: "Dennis Waitley",
    },
    {
        quote: "Love does nou dominate, it cultivates.",
        author: "Johann Wolfgang von Goethe",
    },
    {
        quote: "The best proof of love is trust.",
        author: "Aristotle",
    },
    {
        quote: "Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.",
        author: "Samuel Beckett",
    },
    {
        quote: "Victory is sweetest when you've know defeat.",
        author: "Malcolm S. Forbes",
    },
    {
        quote: "Failure is simply the opportunity to begin again, this time more intelligently.",
        author: "Henry Ford",
    },
    {
        quote: "Listen up on yourself. No one is perfect. Gently accept your humanness.",
        author: "Deborah Day",
    },
    {
        quote: "Our strength grows out of our weakness.",
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "Friends show their love in times of trouble, not in happiness.",
        author: "Euripides",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;