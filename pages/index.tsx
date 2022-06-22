import { Grid} from "@nextui-org/react";
import { NextPage, GetStaticProps } from "next";
import { MainLayout } from "../components/layouts";
import { pokeapi } from "../api";
import { PokemonListResponse, SmallPokemon } from "../interfaces";
import { PokemonCard } from "../components/pokemon";

interface HomePageProps {
	pokemons: SmallPokemon[];
}

const HomePage: NextPage<HomePageProps> = ({ pokemons }) => {
	console.log("[Pokemon]", pokemons);

	return (
		<MainLayout title="Listado de Pokemon">
			<Grid.Container gap={2} justify="flex-start">
				{pokemons.map((pokemon) => (
					<PokemonCard key={pokemon.id}  pokemon={pokemon} />
				))}
			</Grid.Container>
		</MainLayout>
	);
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
	const { data } = await pokeapi.get<PokemonListResponse>("/pokemon?limit=151");

	const getId = (url: string) => {
		return parseInt(
			url
				.replaceAll("https://pokeapi.co/api/v2/pokemon/", "")
				.replaceAll("/", "")
		);
	};

	const pokemons: SmallPokemon[] = data.results.map(({ name, url }) => {
		const id = getId(url);
		return {
			id,
			name: name,
			url,
			img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
		};
	});

	return {
		props: {
			pokemons,
		},
	};
};

export default HomePage;
