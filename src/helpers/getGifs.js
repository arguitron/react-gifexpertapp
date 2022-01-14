export const getGifs = async (category) => {
  const api_key = "yjX5w5rkBS6cH3g4n0Icn7Ts4tYZGXVI";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${encodeURI(
    category
  )}&limit=10`;
  const res = await fetch(url);
  const { data } = await res.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gifs;
};
