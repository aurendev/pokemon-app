import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { SmallPokemon } from "../../interfaces";

interface PokemonCardProps {
	pokemon: SmallPokemon;
}

export const PokemonCard = ({
	pokemon: { id, name, img },
}: PokemonCardProps) => {
	const router = useRouter();

	const handleClick = () => {
		router.push(`/name/${name}`);
	};

	return (
		<Grid xs={3} sm={3} md={2} xl={1} key={id}>
			<Card onClick={handleClick} isHoverable isPressable>
				<Card.Body css={{ p: 1 }}>
					<Card.Image src={img} width="100%" height={140} />
				</Card.Body>
				<Card.Footer>
					<Row justify="space-between">
						<Text transform="capitalize">{name}</Text>
						<Text>#{id}</Text>
					</Row>
				</Card.Footer>
			</Card>
		</Grid>
	);
};
