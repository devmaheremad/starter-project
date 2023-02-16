import { Footer, Navbar } from "@/components";
import theme from "@/components/theme";
import "@/styles/globale.css";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globale.css";
import { Provider } from "react-redux";
import store, { persistor } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";
export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
				<meta
					name="description"
					content="Discover a world of videos with our all-in-one platform. Explore and enjoy videos from a wide range of categories - everything from music and entertainment to education and technology."
				/>
				<title>Hilarity HQ</title>
				<link rel="icon" href="./favicon.ico" title="favicon" />
			</Head>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<ThemeProvider theme={theme}>
						{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
						<CssBaseline />
						<Navbar />
						<main className={"min-h-100vh max-w-1300px mx-auto"}>
							<Component {...pageProps} />
						</main>
						<Footer />
					</ThemeProvider>
				</PersistGate>
			</Provider>
		</>
	);
}
