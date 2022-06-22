import { Link , Spacer, Text, useTheme } from "@nextui-org/react";
import NextLink from "next/link";
import Image from "next/image";

export const Navbar = () => {
	const { theme } = useTheme();

	return (
		<div
			style={{
				display: "flex",
				width: "100%",
				alignItems: "center",
				justifyContent: "center",
				padding: "0px 1rem",
				backgroundColor: theme?.colors.gray200.value,
			}}
		>
			<Image
				src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"
				alt="icon "
				width={70}
				height={70}
			/>

			<NextLink href={"/"}>
				<Link>
					<Text color="white" h2>
						P
					</Text>
					<Text color="white" h3>
						okémon
					</Text>
				</Link>
			</NextLink>

			<Spacer css={{ flex: 1 }} />

			<NextLink href={'/favorites'}>
				<Link>
					<Text color="white">Favoritos</Text>
				</Link>
			</NextLink>
		</div>
	);
};
