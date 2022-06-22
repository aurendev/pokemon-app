
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { MainLayout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";
import { FavoritePokemons } from "../../components/pokemon";
import { localFavorites } from "../../utils";

const FavoritesPage: NextPage = () => {
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		setFavorites(localFavorites.pokemons());
	}, []);

	return (
		<MainLayout title="Listado de Pokemon">
			{favorites.length === 0 ? (
				<NoFavorites />
			) : (
				<FavoritePokemons pokemons={favorites} />
			)}
		</MainLayout>
	);
};

export default FavoritesPage;
