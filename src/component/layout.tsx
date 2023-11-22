import React from "react";
import Meta from "./meta/meta";
import Navbar from "./navbar";

function Layout({ meta, children, hasNav = true }: any) {
	return (
		<>
			<Meta meta={meta} />

			<body>
				{hasNav && <Navbar />}
				<section>{children}</section>
			</body>
		</>
	);
}

export default Layout;
