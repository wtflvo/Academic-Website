export function HomeLogo() {
	return (
		<a id="home" className="navbar-brand" href="#home">
			<img src="logo.PNG" alt="logo" />
			EDUCATION
		</a>
	);
}

export function NavList() {
	const pages = [
		"Home",
		"About Us",
		"Courses",
		"Teachers",
		"Programs",
		"Contact",
	];
	return pages.map((element) => {
		if (element === "About Us") {
			return (
				<li className="navbar-item" key={"education"}>
					<a className="nav-link active" href="#education">
						About Us
					</a>
				</li>
			);
		}

		return (
			<li className="nav-item active" key={element}>
				<a
					className="nav-link active"
					aria-current="page"
					href={`#${element.toLowerCase()}`}
				>
					{element}
				</a>
			</li>
		);
	});
}
export function NavMenu(){
    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-transparent">
	<HomeLogo/>
	<button
		className="navbar-toggler"
		type="button"
		data-bs-toggle="collapse"
		data-bs-target="#navbarNav"
		aria-controls="navbarNav"
		aria-expanded="false"
		aria-label="Toggle navigation"
	>
		<span className="navbar-toggler-icon"></span>
	</button>
	<div className="collapse navbar-collapse" id="navbarNav">
		<ul className="navbar-nav ml-auto">
			<NavList/>
		</ul>
	</div>
</nav>

    )
}


