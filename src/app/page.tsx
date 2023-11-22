import React from "react";
import Layout from "../component/layout";
import "./home.scss";
import Navbar from "../component/navbar";

function Home() {
	return (
		<Layout
			meta={{
				title: "Server site home page",
				description: "Server site home page description",
				image:
					"https://img.freepik.com/free-vector/welcome-landing-page-template-with-landscape_23-2148245574.jpg",
			}}
			hasNav={false}
		>
			<div className="banner-area">
				<Navbar />
				<div className="banner-text">
					<h1>HomePage Design</h1>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic autem
						harum eaque aut deserunt pariatur eum ea, sequi minus nam veniam
						atque et quisquam molestiae aperiam! Iusto, ipsum.
					</p>
					<a href="#">Read More</a>
					<a href="#">Watch More</a>
				</div>
			</div>
		</Layout>
	);
}

export default Home;
