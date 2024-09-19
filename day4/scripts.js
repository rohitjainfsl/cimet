//https://pokeapi.co/api/v2/pokemon?limit=20&offset=0

const pokemonData = [];
const limit = 20;
const offset = 0;

async function fetchData(url) {
  const response = await fetch(url);
  const result = await response.json();
  return result;
}

window.addEventListener("load", async () => {
  const output = await fetchData(
    "https://pokeapi.co/api/v2/pokemon?limit=" + limit + "&offset=" + offset
  );
  //   console.log(output.results);

  const temp = output.results;
  //   console.log(
  //     temp.map(async (obj) => {
  //       return await fetchData(obj.url);
  //     })
  //   );

  const arrayPromises = temp.map(async (obj) => await fetchData(obj.url));

  //   console.log(await Promise.all(arrayPromises));
  pokemonData.push(...(await Promise.all(arrayPromises)));
  console.log(pokemonData);
});
