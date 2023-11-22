import Layout from "@/src/component/layout";
import React from "react";
import Image from "next/image";
import Link from "next/link";

async function getImage() {
	const res = await fetch(
		"https://random.imagecdn.app/v1/image?width=950&height=250&format=json",
		{
			cache: "no-store",
		}
	);

	return res?.json();
}

async function getPosts(id: any) {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);

	return res.json();
}

export default async function Details({ params }: any) {
	const [postDetails, image] = await Promise.all([
		getPosts(params?.id),
		getImage(),
	]);

	return (
		<Layout
			meta={{
				title: postDetails?.title,
				description: postDetails?.body,
				image: "https://www.spacex.com/static/images/locations/kennedy.jpg",
			}}
		>
			<div className="container">
				<div className="row">
					<div className="col-md-2">
						<Link href="/users">GO Back</Link>
					</div>
					<div className="col-md-8">
						<div className="img-sec w-100 bg-danger text-center">
							<Image
								src={image?.url}
								alt={image?.provider || "blog img"}
								width={880}
								height={250}
							/>
						</div>
						<div className="des-sec mt-5">
							<h2>Blog: #{postDetails?.id}</h2>
							<h3 className="mt-2 mb-3">{postDetails?.title}</h3>
							<p>{postDetails?.body}</p>
						</div>
					</div>
					<div className="col-md-2"></div>
				</div>
			</div>
		</Layout>
	);
}
