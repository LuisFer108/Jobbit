"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";

export default function RegisterPage() {

    const router = useRouter();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [message, setMessage] = useState("");

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await fetch(
            "http://localhost:5001/api/auth/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            }
        );

        const data = await response.json();

        if (response.ok) {
            router.push("/login");
        } else {
            setMessage(data.message);
        }
    }

    return (
        <main className={styles.container}>
            <div className={styles.card}>
                <Link href="./" className={styles.goback}>Volver a inicio</Link>
                <h1 className={styles.title}>Crear cuenta</h1>

                <form onSubmit={handleSubmit} className={styles.form}>

                    <input
                        className={styles.input}
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        value={form.name}
                        onChange={handleChange}
                    />

                    <br />

                    <input
                        className={styles.input} 
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        value={form.email}
                        onChange={handleChange}
                    />

                    <br />

                    <input
                        className={styles.input}
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        value={form.password}
                        onChange={handleChange}
                    />

                    <br />

                    <button type="submit" className={styles.button}>
                        Registrarse
                    </button>

                </form>

                {message && <p>{message}</p>}

            </div>
        </main>
    );
}