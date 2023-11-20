import React from "react";
import Layout from "../component/layout";

function Home() {
	return (
		<Layout
			meta={{
				title: "Home page title",
				description: "Home page Description",
				image:
					"https://www.buyrentkenya.com/discover/wp-content/uploads/2022/06/brk-blog-4reasons-why.png",
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
