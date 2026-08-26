"use client";

import styles from "./ProjectCard.module.css";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

interface ProjectCardProps {
    number: number;
    image: StaticImageData;
    title: string;
    description: string;
    technology: string[];
    website?: string;
    slug: string | undefined;
}

export default function ProjectCard({
    number,
    image,
    title,
    description,
    technology,
    website,
    slug,
}: ProjectCardProps) {
    return (
        <article className={styles.project}>
            <div className={styles.projectTop}>
                <span className={styles.number}>
                    {String(number).padStart(2, "0")}
                </span>

                <div className={styles.title}>
                    <h3>{title}</h3>
                </div>
            </div>

            <div className={styles.imageContainer}>
                <Image
                    src={image}
                    alt={`${title} project`}
                    fill
                    sizes="(max-width: 900px) 100vw, 1400px"
                    className={styles.image}
                />

                <div className={styles.imageOverlay} />

                <div className={styles.projectButtons}>
                    <Link
                        href={`/projects/${slug}`}
                        className={styles.viewProjectButton}
                    >
                        View Project
                        <ArrowUpRightIcon />
                    </Link>

                    {website && (
                        <a
                            href={website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.viewSiteButton}
                        >
                            View Site
                            <ArrowUpRightIcon />
                        </a>
                    )}
                </div>
            </div>

            <div className={styles.projectBottom}>
                <p className={styles.description}>
                    {description}
                </p>

                <div className={styles.technology}>
                    {technology.map((tech) => (
                        <span key={tech}>{tech}</span>
                    ))}
                </div>
            </div>
        </article>
    );
}