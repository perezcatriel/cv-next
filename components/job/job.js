import style from '../../styles/Job.module.css';
import styles from '../../styles/Home.module.css'
import Image from 'next/image';

export default function Job() {
	return (
		<div className={style.job}>
			<h2 className={style.title}>Como trabajamos</h2>

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
							Ya sea que esté buscando un nuevo sitio web o un rediseño de sitio
							web, comenzamos el proceso con investigación y planificación para
							garantizar la respuesta de diseño más adecuada.
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
								¡La comunicación es clave! Trabajamos con usted para desarrollar
								contenido atractivo para los motores de búsqueda que hará que su
								audiencia entre en acción.
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
								Lo mantenemos actualizado a lo largo del proyecto y solicitamos
								comentarios regularmente: el proceso solo se completa una vez
								que haya dado su aprobación del 100%.
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
		</div>
	);
}
