import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { authServer } from "../lib/session";
import React, { ReactNode } from "react";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const user = await authServer(ctx);

	return { props: { user } };
};

const Home: NextPage = ({  }: { children?: ReactNode }) => {

	return (
		<>
			<Head>
				<title>Private SSR</title>
			</Head>

			<main>
				Private with SSR
			</main>
		</>
	);
};

export default Home;
