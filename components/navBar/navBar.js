import Image from "next/image";
import styles from "../../styles/NavBar.module.css";

export default function NavBar() {
	return (
		<nav className={styles.navBar}>
			<h1 className={styles.navBarTitle}>
				SKOL <strong className={styles.navBarTitleStrong}>_dev</strong>
			</h1>

			<Image
				src="/images/icons/menu.svg"
				alt="icon-menu"
				width={20}
				height={20}
				className={styles.navBarMenu}
			/>
		</nav>
	);
}
