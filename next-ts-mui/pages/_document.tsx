import { Html, Head, Main, NextScript } from "next/document";
import { openSans } from "../components/theme";

export default function Document() {
	return (
		<Html lang="en" className={openSans.className}>
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
