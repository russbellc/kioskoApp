import { KioskoProvider } from "../contexts/KioskoProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<KioskoProvider>
			<Component {...pageProps} />
		</KioskoProvider>
	);
}

export default MyApp;
