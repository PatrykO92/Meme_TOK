const fetchMeme = async () => {
  const data = await fetch("https://meme-api.com/gimme");
  return await data.json();
};

export default fetchMeme;
