import Image from "next/image";
import styles from "../../styles/Presentation.module.css"

export default function Presentation() {
	return (
		<>
			<p className={styles.paragraph}>DESARROLLO WEB Y SOFTWARE</p>

			<h1 className={styles.title}>
				SKOL<strong>_dev</strong>
			</h1>

			<div className={styles.desktop}>
				<Image
					src="/images/desk.jpg"
					alt="slogan"
					width={800}
					height={500}
					
				/>

				<div className={styles.text}>
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
			</div>
		</>
	);
}
