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
				<p className={styles.paragraph}>DESARROLLO WEB Y SOFTWARE</p>

				<h1 className={styles.title}>
					SKOL<strong className={styles.footerStrong}>_dev</strong>
				</h1>

				<div className={styles.description}>
					<Image
						src="/images/desk.jpg"
						alt="slogan"
						width={1100}
						height={700}
					/>
					<h2>Creación de Sitio Web</h2>

					<p className={styles.paragraph}>
						Manejamos todo el proceso para que comience en línea, desde la
						configuración de su dominio y correo electrónico hasta la creación
						de contenido escrito e imagen atractivo, trabajando en estrecha
						colaboración con usted para ofrecer un sitio web que comunique
						claramente quién es usted y qué hace.
					</p>

					<ul className={styles.list}>
						<li>Diseño y desarrollo de sitios web personalizados </li>
						<li>Rediseño del sitio web</li>
						<li>Compatible con dispositivos móviles y tabletas</li>
						<li>Bases de datos y contenido dinámico</li>
						<li>Integración de comercio electrónico, reservas y pagos</li>
						<li>Mantenimiento continuo y administración del sitio web.</li>
					</ul>
				</div>

				<h2>Como trabajamos</h2>

				<div className={styles.work}>
					<div className={styles.grid}>
						<a href="#" className={styles.card}>
							<Image
								src="/images/icons/doc.svg"
								alt=""
								width={60}
								height={60}
								className={styles.gridIcon}
							/>
							<h2>DESCUBRE Y DEFINE &rarr;</h2>
							<p>
								Ya sea que esté buscando un nuevo sitio web o un rediseño de
								sitio web, comenzamos el proceso con investigación y
								planificación para garantizar la respuesta de diseño más
								adecuada.
							</p>
						</a>

						<div className={styles.grid}>
							<a href="#" className={styles.card}>
								<Image
									src="/images/icons/seo.svg"
									alt=""
									width={60}
									height={60}
									className={styles.gridIcon}
								/>
								<h2>CONTENIDO Y ESTRATEGIA SEO &rarr;</h2>
								<p>
									¡La comunicación es clave! Trabajamos con usted para
									desarrollar contenido atractivo para los motores de búsqueda
									que hará que su audiencia entre en acción.
								</p>
							</a>
						</div>

						<div className={styles.grid}>
							<a href="#" className={styles.card}>
								<Image
									src="/images/icons/tablet.svg"
									alt=""
									width={60}
									height={60}
									className={styles.gridIcon}
								/>
								<h2>DESARROLLO DE DISEÑO &rarr;</h2>
								<p>
									Usando la investigación y el conocimiento de sus preferencias
									estilísticas, comenzamos a trabajar en un diseño y diseño
									específico para las necesidades de su público objetivo.
								</p>
							</a>
						</div>

						<div className={styles.grid}>
							<a href="#" className={styles.card}>
								<Image
									src="/images/icons/client.svg"
									alt=""
									width={60}
									height={60}
									className={styles.gridIcon}
								/>
								<h2>DISEÑO CENTRADO EN EL USUARIO &rarr;</h2>
								<p>
									Ponemos al usuario en el centro del proceso de desarrollo,
									asegurando que el sitio web cargue rápido y funcione
									perfectamente en dispositivos móviles, tabletas y computadoras
									de escritorio.
								</p>
							</a>
						</div>

						<div className={styles.grid}>
							<a href="#" className={styles.card}>
								<Image
									src="/images/icons/reviews.svg"
									alt=""
									width={60}
									height={60}
									className={styles.gridIcon}
								/>
								<h2>COMENTARIOS Y REVISIÓN &rarr;</h2>
								<p>
									Lo mantenemos actualizado a lo largo del proyecto y
									solicitamos comentarios regularmente: el proceso solo se
									completa una vez que haya dado su aprobación del 100%.
								</p>
							</a>
						</div>

						<div className={styles.grid}>
							<a href="#" className={styles.card}>
								<Image
									src="/images/icons/iteration.svg"
									alt=""
									width={60}
									height={60}
									className={styles.gridIcon}

									
								/>
								<h2>MANTENIMIENTO EN PROCESO &rarr;</h2>
								<p>
									Una vez que se ha completado el proyecto, siempre estamos
									disponibles para realizar cambios o actualizaciones, ya sea en
									una tarifa por hora o a través de nuestros paquetes de
									mantenimiento.
								</p>
							</a>
						</div>
					</div>
				</div>

				<h2>Trabajos destacados</h2>

				<div className={styles.grid}>
					<a href="#" className={styles.card}>
						<h2>Simon Dice &rarr;</h2>
						<p>Find in-depth information about Next.js features and API.</p>
					</a>

					<a href="#" className={styles.card}>
						<h2>MemoTest &rarr;</h2>
						<p>Learn about Next.js in an interactive course with quizzes!</p>
					</a>

					<a href="#" className={styles.card}>
						<h2>Casa de Cambio &rarr;</h2>
						<p>Discover and deploy boilerplate example Next.js projects.</p>
					</a>

					<a
						href="#"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.card}
					>
						<h2>Mar de Cores &rarr;</h2>
						<p>
							Instantly deploy your Next.js site to a public URL with Vercel.
						</p>
					</a>

					<div className={styles.contact}>
						<h2>Obtenga una cotización para su proyecto</h2>

						<button className={styles.button}>CONTACTAME</button>
					</div>
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
