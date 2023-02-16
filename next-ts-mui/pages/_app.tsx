import { Footer, Navbar } from "@/components";
import theme from "@/components/theme";
import "@/styles/globale.css";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globale.css";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
				<meta name="description" content="Starter Template" />
				<link rel="icon" href="./favicon.ico" />
				<title>Starter Template</title>
			</Head>
			<ThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<Navbar />
				<main className={"paddingContent min-h-90vh"}>
					<Component {...pageProps} />
				</main>
				<Footer />
			</ThemeProvider>
		</>
	);
}
