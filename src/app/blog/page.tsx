import Layout from "@/src/component/layout";
import Link from "next/link";
import "./blog.scss";
import Image from "next/image";

async function getDogList() {
	const res = await fetch("https://dog.ceo/api/breeds/image/random", {
		next: {
			revalidate: 15,
		},
	});

	return res.json();
}
async function getUsers() {
	const res = await fetch("https://randomuser.me/api/", {
		cache: "no-store",
	});

	return res.json();
}
async function getPosts() {
	const res = await fetch(
		"https://jsonplaceholder.typicode.com/posts?_limit=16"
	);

	return res.json();
}

export default async function Home() {
	const [dog, user, posts] = await Promise.all([
		getDogList(),
		getUsers(),
		getPosts(),
	]);
	// console.log("dog", posts);
	return (
		<Layout
			meta={{
				title:
					user?.results[0]?.name?.title +
					" " +
					user?.results[0]?.name?.first +
					" " +
					user?.results[0]?.name?.last,
				description: user?.results[0]?.email,
				image: user?.results[0]?.picture?.large,
			}}
		>
			<div className="container">
				<div className="row">
					<div className="col-md-3"></div>
					<div className="col-md-6 d-flex align-items-center justify-content-between">
						<div className="d-flex justify-content-center">
							<Image src={dog?.message} alt="dog" width={300} height={200} />
						</div>
						<div className="d-flex justify-content-center flex-column align-items-center mt-5">
							<Link href={`/1`}>
								<Image
									src={user?.results[0]?.picture?.large}
									alt="user"
									width={100}
									height={80}
								/>
							</Link>
							<p>
								Name:{" "}
								{user?.results[0]?.name?.title +
									" " +
									user?.results[0]?.name?.first +
									" " +
									user?.results[0]?.name?.last}
							</p>
							<p>Email: {user?.results[0]?.email}</p>
							<p>Phone: {user?.results[0]?.phone}</p>
						</div>
					</div>
					<div className="col-md-3"></div>
					<div className="col-md-3"></div>
					<div className="col-md-6">
						<div className="post-list">
							{posts?.map((blog: any) => {
								return (
									<Link
										className="single-blog"
										href={`/blog/${blog.id}`}
										key={blog.id}
									>
										{blog.id}: {blog?.title}
									</Link>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
