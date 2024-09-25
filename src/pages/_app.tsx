import { AppProps } from 'next/app';
import { ToastProvider } from '@/contexts/toast-context'; 
import Head from 'next/head';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ToastProvider>
			<Head>
				<title>Teste Front-End - BNP</title>
			</Head>

			<Component {...pageProps} />
		</ToastProvider>
	);
}

