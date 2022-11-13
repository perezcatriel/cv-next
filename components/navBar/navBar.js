import Image from "next/image";
import Menu from "../../components/navBar/menu";
import styles from "../../styles/NavBar.module.css";

export default function NavBar() {
	return (
		<nav className={styles.navBar}>
			<h1 className={styles.navBarTitle}>
				SKOL <strong className={styles.navBarTitleStrong}>_dev</strong>
			</h1>

			<Menu />
		</nav>
	);
}
