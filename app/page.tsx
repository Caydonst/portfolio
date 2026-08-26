"use client";

import styles from "./page.module.css";
import ProjectCard from "./Components/ProjectCard/ProjectCard";
import { projects } from "./projects";
import Navbar from "./Components/Navbar/Navbar";
import {
    ArrowDownIcon,
    ArrowUpRightIcon,
} from "@heroicons/react/24/outline";
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

                        <div className={styles.heroActions}>
                            <button
                                className={styles.primaryButton}
                                onClick={handleScroll}
                            >
                                Projects
                                <ArrowDownIcon />
                            </button>
                        </div>
                    </div>
                </section>

                <section
                    ref={portfolioRef}
                    className={styles.projectsSection}
                >
                    <div className={styles.projectsHeader}>
                        <div>
                            <p className={styles.sectionLabel}>
                                SELECTED WORK
                            </p>

                            <h2>
                                Projects<span>.</span>
                            </h2>
                        </div>
                    </div>

                    <div className={styles.projectList}>
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                number={index + 1}
                                image={project.image}
                                title={project.title}
                                description={project.description}
                                technology={project.technology}
                                website={project.website}
                                slug={project.slug}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}