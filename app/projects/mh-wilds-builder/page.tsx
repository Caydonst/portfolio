import styles from "./page.module.css";
import Image from "next/image";
import Navbar from "@/app/Components/Navbar/Navbar";

import mhWildsBuilderBanner from "@/app/assets/mhWildsBuilderImage.png";
import builderImage from "@/app/assets/mh-wilds-builder/builder.png";
import savedBuildsImage from "@/app/assets/mh-wilds-builder/saved-builds.png";

const technologies = [
    "NEXT.JS",
    "TYPESCRIPT",
    "SUPABASE",
    "SWR",
];

const systems = [
    {
        number: "01",
        title: "Loadout Builder",
        description:
            "Create complete builds with weapons, armor, charms, and decorations.",
    },
    {
        number: "02",
        title: "Real-Time Stats",
        description:
            "Calculates attack, affinity, effective raw, defense, resistances, and sharpness.",
    },
    {
        number: "03",
        title: "Skill Tracking",
        description:
            "Aggregates equipment and decoration skills and tracks their active levels.",
    },
    {
        number: "04",
        title: "Decorations",
        description:
            "Equip decorations using available weapon and armor slots.",
    },
    {
        number: "05",
        title: "Build Optimization",
        description:
            "Find equipment combinations that satisfy selected skills.",
    },
    {
        number: "06",
        title: "Saved Builds",
        description:
            "Save and manage builds through authenticated user accounts.",
    },
];

export default function MHWBuildPage() {
    return (
        <>
            <Navbar />

            <main className={styles.page}>
                {/* HERO */}
                <section className={styles.hero}>
                    <div className={styles.heroTop}>
                        <p className={styles.eyebrow}>
                            WEB APPLICATION / BUILD PLANNER
                        </p>

                        <h1>MH Wilds Builder</h1>

                        <div className={styles.heroInfo}>
                            <p className={styles.heroDescription}>
                                A Monster Hunter Wilds build planner for
                                creating, comparing, and optimizing complete
                                equipment loadouts.
                            </p>

                            <div className={styles.heroMeta}>
                                <div>
                                    <span>ROLE</span>
                                    <p>Full-Stack Developer</p>
                                </div>

                                <div>
                                    <span>TYPE</span>
                                    <p>Web Application</p>
                                </div>

                                <div>
                                    <span>STATUS</span>
                                    <p>Live</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.banner}>
                        <Image
                            src={mhWildsBuilderBanner}
                            alt="MH Wilds Builder"
                            fill
                            priority
                            className={styles.bannerImage}
                        />
                    </div>
                </section>

                {/* OVERVIEW */}
                <section className={styles.overview}>
                    <div className={styles.sectionLabel}>
                        <span>01</span>
                        <p>ABOUT</p>
                    </div>

                    <div className={styles.overviewContent}>
                        <h2>
                            Build smarter.
                            <br />
                            Hunt stronger.
                        </h2>

                        <div className={styles.overviewText}>
                            <p>
                                Build and optimize Monster Hunter Wilds
                                loadouts with live skill and stat calculations.
                            </p>

                            <div className={styles.technology}>
                                {technologies.map((technology) => (
                                    <span key={technology}>
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* FEATURES */}
                <section className={styles.systemsSection}>
                    <div className={styles.sectionLabel}>
                        <span>02</span>
                        <p>CORE FEATURES</p>
                    </div>

                    <div className={styles.systemList}>
                        {systems.map((system) => (
                            <div
                                key={system.number}
                                className={styles.system}
                            >
                                <span className={styles.systemNumber}>
                                    {system.number}
                                </span>

                                <h3>{system.title}</h3>

                                <p>{system.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* BUILDER */}
                <section className={styles.showcaseSection}>
                    <div className={styles.showcaseHeader}>
                        <div>
                            <p className={styles.featureNumber}>
                                03 / BUILDER
                            </p>

                            <h2>Complete loadout building.</h2>
                        </div>

                        <p>
                            Gear, skills, decorations, and calculated stats
                            in one interface.
                        </p>
                    </div>

                    <div className={styles.wideImage}>
                        <Image
                            src={builderImage}
                            alt="MH Wilds Builder"
                            fill
                            className={styles.screenshot}
                        />
                    </div>
                </section>

                {/* SAVED BUILDS */}
                <section className={styles.showcaseSection}>
                    <div className={styles.showcaseHeader}>
                        <div>
                            <p className={styles.featureNumber}>
                                04 / SAVED BUILDS
                            </p>

                            <h2>Save builds for later.</h2>
                        </div>

                        <p>
                            Account-based build storage powered by Supabase.
                        </p>
                    </div>

                    <div className={styles.wideImage}>
                        <Image
                            src={savedBuildsImage}
                            alt="Saved Monster Hunter Wilds builds"
                            fill
                            className={styles.screenshot}
                        />
                    </div>
                </section>

                {/* FOOTER */}
                <section className={styles.footer}>
                    <p>MH WILDS BUILDER</p>

                    <h2>
                        Build smarter.
                        <br />
                        Hunt stronger.
                    </h2>

                    <a
                        href="https://www.mhwildsbuilder.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.websiteButton}
                    >
                        Visit Website
                    </a>
                </section>
            </main>
        </>
    );
}