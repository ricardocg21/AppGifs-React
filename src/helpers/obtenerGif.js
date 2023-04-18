export const obtenerGif = async (categoria) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=GSnZ2RNFuNtU0UIeB56we6Z7TXNGbFjI&q=${categoria}&limit=20`;

  const resp = await fetch(url);
  const { data } = await resp.json();
  const gif = data.map((img) => ({
    id: img.id,
    url: img.images.downsized_medium.url,
    title: img.title,
  }));

  return gif;
};

// un hook es una funcion que regresa algo
