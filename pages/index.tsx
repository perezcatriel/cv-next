import Projects from "../components/projects/projects";
import Job from "../components/job/job";
import Presentation from "../components/presentation/presentation";
import NavBar from "../components/navBar/navBar";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>SKOL_dev</title>
				<meta name="description" content="Web and Software development" />
				<link rel="icon" href="/images/icons/code.svg" />
			</Head>

			<NavBar />

			<main className={styles.main}>
				<Presentation />

				<Job />

				<Projects />

				<div className={styles.contact}>
					<h2>Obtenga una cotización para su proyecto</h2>

					<button className={styles.button}>
						<a href="mailto:perezcatriel@gmail.com">CONTACTAME</a>
					</button>
				</div>
			</main>

			<footer className={styles.footer}>
				<a href="#" target="_blank" rel="noopener noreferrer">
					Powered by SKOL<strong className={styles.footerStrong}>_dev</strong>
					<span>
						<Image
							src="/images/icons/code.svg"
							alt="SKOL_dev Logo"
							width={20}
							height={20}
							className={styles.logo}
						/>
					</span>
				</a>
			</footer>
		</div>
	);
}
