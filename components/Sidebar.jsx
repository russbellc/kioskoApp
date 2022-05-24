import React from "react";
import Image from "next/image";
import useKiosko from "../hooks/useKiosko";
import Categoria from "./Categoria";
import Link from "next/link";

const Sidebar = () => {
	const { categoria } = useKiosko();
	return (
		<>
			<div className="mt-5">
				<Link href="/">
					<a>
						<Image
							width={300}
							height={100}
							src="/assets/img/logo.svg"
							alt="imagen logotipo"
						/>
					</a>
				</Link>
			</div>
			<nav className="mt-5">
				{categoria.map((cat) => (
					<Categoria key={cat.cat_id} categoria={cat} />
				))}
			</nav>
		</>
	);
};

export default Sidebar;
