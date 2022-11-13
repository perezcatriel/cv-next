import Image from "next/image";
import styles from "../../styles/NavBar.module.css";

export default function Menu() {
    let login = true;
    
    function log(){
        return login = false
    }
    

	return (
		<>
			<div className={styles.menu}>
				{login ? (
					<>
						<ul className={styles.list}>
							<li>
								<a>PROFILE</a>
							</li>
							<li>
								<a>SERVICE</a>
							</li>
							<li>
								<a>PORTFOLIO</a>
							</li>
						</ul>
						<button className={styles.button}  onClick={log}>
							COMIENZA YA
						</button>
					</>
				) : (
					<Image
						src="/images/icons/menu.svg"
						alt="icon-menu"
						width={20}
						height={20}
						className={styles.navBarMenu}
					/>
				)}
			</div>
		</>
	);
}
