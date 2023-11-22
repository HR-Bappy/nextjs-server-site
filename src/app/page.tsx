import React from "react";
import Layout from "../component/layout";

function Home() {
	return (
		<Layout
			meta={{
				title: "Server site home page",
				description: "Server site home page description",
				image:
					"https://img.freepik.com/free-vector/welcome-landing-page-template-with-landscape_23-2148245574.jpg",
			}}
		>
			<div className="container">
				<div className="mt-5 pt-5">
					<h1>I am home page</h1>
				</div>
			</div>
		</Layout>
	);
}

export default Home;
