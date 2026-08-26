"use client";

import styles from "./page.module.css";
import Navbar from "./Components/Navbar/Navbar";
import ProjectWheel from "./Components/ProjectWheel/ProjectWheel";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";

export default function Home() {
    const portfolioRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        portfolioRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <>
            <Navbar />

            <main className={styles.home}>
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <div className={styles.eyebrow}>
                            <span className={styles.statusDot} />
                            <span>BASED IN MICHIGAN</span>
                        </div>

                        <h1>
                            I build digital
                            <span> experiences.</span>
                        </h1>

                        <p className={styles.heroDescription}>
                            Software developer focused on creating polished,
                            responsive, and thoughtfully designed web
                            experiences.
                        </p>
                    </div>
                </section>

                <div ref={portfolioRef}>
                    <ProjectWheel />
                </div>
            </main>
        </>
    );
}