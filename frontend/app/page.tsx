import Link from "next/link";
import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h1>Jobbit</h1>

        <p>
          Encuentra oportunidades laborales según tu perfil.
        </p>

        <div>
          <Link href="/login">
          Iniciar sesión
        </Link>

        <br /><br />

        <Link href="/register">
          Crear cuenta
        </Link>
        </div>
      </div>
    </main>
  );
}