
export const getPokemon = async( category ) => {

    category = category.toString().toLowerCase()
    const url = `https://pokeapi.co/api/v2/pokemon/${ category }`
    const resp = await fetch( url );
    const data = await resp.json();
    const pokemon = {
        name: data.name,
        id: data.id,
        img_url: data.sprites.other.dream_world.front_default,
        weight: data.weight,
        height: data.height,
        base_experience: data.base_experience
    }

    return pokemon;

}