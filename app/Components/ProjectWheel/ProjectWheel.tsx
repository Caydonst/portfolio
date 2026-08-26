"use client";

import styles from "./ProjectWheel.module.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { projects } from "@/app/projects";

export default function ProjectWheel() {
    const trackRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const isDragging = useRef(false);
    const hasDragged = useRef(false);

    const startX = useRef(0);
    const dragStartIndex = useRef(0);

    useEffect(() => {
        const track = trackRef.current;

        if (!track) return;

        const updateActiveCard = () => {
            if (isDragging.current) return;

            const trackRect = track.getBoundingClientRect();
            const trackCenter = trackRect.left + trackRect.width / 2;

            let closestIndex = 0;
            let closestDistance = Infinity;

            cardRefs.current.forEach((card, index) => {
                if (!card) return;

                const rect = card.getBoundingClientRect();
                const cardCenter = rect.left + rect.width / 2;

                const distance = Math.abs(trackCenter - cardCenter);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = index;
                }
            });

            setActiveIndex(closestIndex);
        };

        updateActiveCard();

        track.addEventListener("scroll", updateActiveCard, {
            passive: true,
        });

        window.addEventListener("resize", updateActiveCard);

        return () => {
            track.removeEventListener("scroll", updateActiveCard);
            window.removeEventListener("resize", updateActiveCard);
        };
    }, []);

    const scrollToProject = (index: number) => {
        const track = trackRef.current;
        const card = cardRefs.current[index];

        if (!track || !card) return;

        const targetScrollLeft =
            card.offsetLeft -
            track.clientWidth / 2 +
            card.clientWidth / 2;

        setActiveIndex(index);

        track.scrollTo({
            left: targetScrollLeft,
            behavior: "smooth",
        });
    };

    const handlePointerDown = (
        event: React.PointerEvent<HTMLDivElement>
    ) => {
        const track = trackRef.current;

        if (!track) return;

        if (event.pointerType === "mouse" && event.button !== 0) {
            return;
        }

        isDragging.current = true;
        hasDragged.current = false;

        startX.current = event.clientX;
        dragStartIndex.current = activeIndex;

        track.setPointerCapture(event.pointerId);
        track.classList.add(styles.dragging);
    };

    const handlePointerMove = (
        event: React.PointerEvent<HTMLDivElement>
    ) => {
        if (!isDragging.current) return;

        const distance = event.clientX - startX.current;

        if (Math.abs(distance) > 5) {
            hasDragged.current = true;
        }
    };

    const handlePointerUp = (
        event: React.PointerEvent<HTMLDivElement>
    ) => {
        const track = trackRef.current;

        if (!track || !isDragging.current) return;

        const distance = event.clientX - startX.current;

        isDragging.current = false;

        if (track.hasPointerCapture(event.pointerId)) {
            track.releasePointerCapture(event.pointerId);
        }

        track.classList.remove(styles.dragging);

        const threshold = 80;

        let targetIndex = dragStartIndex.current;

        if (distance < -threshold) {
            targetIndex = Math.min(
                dragStartIndex.current + 1,
                projects.length - 1
            );
        }

        if (distance > threshold) {
            targetIndex = Math.max(
                dragStartIndex.current - 1,
                0
            );
        }

        scrollToProject(targetIndex);
    };

    const handlePointerCancel = (
        event: React.PointerEvent<HTMLDivElement>
    ) => {
        const track = trackRef.current;

        if (!track) return;

        isDragging.current = false;

        if (track.hasPointerCapture(event.pointerId)) {
            track.releasePointerCapture(event.pointerId);
        }

        track.classList.remove(styles.dragging);
    };
    const preventClickAfterDrag = (
        event: React.MouseEvent<HTMLElement>
    ) => {
        if (hasDragged.current) {
            event.preventDefault();
            event.stopPropagation();

            hasDragged.current = false;
        }
    };

    return (
        <section className={styles.projectsSection}>
            <div className={styles.header}>
                <p>SELECTED WORK</p>

                <h2>
                    Projects<span>.</span>
                </h2>
            </div>

            <div
                ref={trackRef}
                className={styles.track}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerCancel}
            >
                <div className={styles.spacer} />

                {projects.map((project, index) => {
                    const offset = index - activeIndex;

                    return (
                        <div
                            key={index}
                            ref={(element) => {
                                cardRefs.current[index] = element;
                            }}
                            className={styles.cardWrapper}
                            data-position={
                                offset === 0
                                    ? "center"
                                    : offset < 0
                                        ? "left"
                                        : "right"
                            }
                        >
                            <article className={styles.card}>
                                <div className={styles.imageContainer}>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 700px) 85vw, 800px"
                                        className={styles.image}
                                    />

                                    <div className={styles.overlay} />

                                    <div className={styles.cardActions}>
                                        <Link
                                            href={`/projects/${project.slug}`}
                                            className={styles.projectButton}
                                            onClick={preventClickAfterDrag}
                                        >
                                            View Project
                                            <ArrowUpRightIcon />
                                        </Link>

                                        {project.website && (
                                            <a
                                                href={project.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.websiteButton}
                                                onClick={preventClickAfterDrag}
                                            >
                                                Live Site
                                                <ArrowUpRightIcon />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className={styles.cardInfo}>
                                    <div>
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                    </div>

                                    <div className={styles.technology}>
                                        {project.technology.map((technology) => (
                                            <span key={technology}>
                                                {technology}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        </div>
                    );
                })}

                <div className={styles.spacer} />
            </div>

            <div className={styles.controls}>

                <div className={styles.dots}>
                    {projects.map((project, index) => (
                        <button
                            key={index}
                            aria-label={`View ${project.title}`}
                            className={
                                index === activeIndex
                                    ? styles.activeDot
                                    : ""
                            }
                            onClick={() => scrollToProject(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}