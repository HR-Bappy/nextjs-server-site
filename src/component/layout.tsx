import React from "react";
import Meta from "./meta/meta";
import Navbar from "./navbar";

function Layout({ meta, children }: any) {
	return (
		<>
			<Meta meta={meta} />

			<body>
				<Navbar />
				<section>{children}</section>
			</body>
		</>
	);
}

export default Layout;
