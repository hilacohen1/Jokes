const btn = document.querySelector('button');
const jokes = document.querySelector('#jokes');

btn.addEventListener('click', async () => {
    const config = { headers: { Accept: 'application/json' } };
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    let joke = res.data.joke;
    const newLI = document.createElement('li');

    newLI.append(joke);
    jokes.append(newLI);
});