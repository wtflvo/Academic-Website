import { NavList } from "../NavMenu";

export function NavMenuBottom() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark navigation-bottom">
			<ul className="navbar-nav ml-auto">
				<NavList />
			</ul>
		</nav>
	);
}
