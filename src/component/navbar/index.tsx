import Link from "next/link";
import React from "react";
import "./navbar.scss";

function Navbar() {
	return (
		<div className="navbar-main">
			<nav className="navbar">
				<div className="navbar-container container">
					<input type="checkbox" name="" id="" />
					<div className="hamburger-lines">
						<span className="line line1"></span>
						<span className="line line2"></span>
						<span className="line line3"></span>
					</div>
					<ul className="menu-items">
						<li>
							<Link href="/users">User</Link>
						</li>
						<li>
							<Link href="/blog">Blog</Link>
						</li>
					</ul>
					<h1 className="logo">
						<Link href="/">Home</Link>
					</h1>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
