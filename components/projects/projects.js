// import Image from "next/image";
import style from "../../styles/Projects.module.css";
import styles from "../../styles/Home.module.css";

export default function Projects() {
	return (
		<div className={style.projects}>
			<h2 className={style.title}>Trabajos destacados</h2>

			<div className={styles.grid}>
				<a href="https://perezcatriel.github.io/simon" className={styles.card}>
					<h2>Simon Dice &rarr;</h2>
					<p>Find in-depth information about Next.js features and API.</p>
				</a>

				<a
					href="https://perezcatriel.github.io/memo-test/public"
					className={styles.card}
				>
					<h2>MemoTest &rarr;</h2>
					<p>Learn about Next.js in an interactive course with quizzes!</p>
				</a>

				<a href="#" className={styles.card}>
					<h2>Casa de Cambio &rarr;</h2>
					<p>Discover and deploy boilerplate example Next.js projects.</p>
				</a>

				<a
					href="https://perezcatriel.github.io/mardecores"
					target="_blank"
					rel="noopener noreferrer"
					className={styles.card}
				>
					<h2>Mar de Cores &rarr;</h2>
					<p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
				</a>
			</div>
		</div>
	);
}
