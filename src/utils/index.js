export const getPokemonId = (url) => url.match(/\/pokemon\/(\d+)\//)[1];

export const grabImageById = (url) => {
  const imageBase =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';
  const id = getPokemonId(url);
  return `${imageBase}/${id}.png`;
};

export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
