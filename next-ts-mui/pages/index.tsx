import { Box, Stack } from "@mui/material";

export default function Home() {
	return (
		<>
			<Box
				px={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
				maxWidth={"1300px"}
				mx={"auto"}
				className={"min-h-90vh"}
				display={"flex"}
				justifyContent={"center"}
			>
				<Stack
					direction={"row"}
					position={"relative"}
					className={"min-h-90vh"}
					display={"flex"}
					flexDirection={"column"}
					justifyContent={"center"}
					alignItems={"center"}
				>
					<h4>
						This is a starter template using to create a big project using
					</h4>
					<ul>
						<li>TypeScript</li>
						<li>NextJS</li>
						<li>Material UI</li>
					</ul>
				</Stack>
			</Box>
		</>
	);
}
