import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";

interface Props{
  id: number
}

export const FavoriteCardPokemon = ({id}:Props) => {

  const router = useRouter()

  const onClick = ()=>{
    router.push(`/pokemon/${id}`)
  }

	return (
		<Grid
      onClick={onClick} 
      xs={3} sm={3} md={2} xl={1} key={id}>
			<Card isHoverable isPressable>
				<Card.Body css={{ p: 1 }}>
					<Card.Image
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
						width="100%"
						height={140}
					/>
				</Card.Body>
			</Card>
		</Grid>
	);
};
