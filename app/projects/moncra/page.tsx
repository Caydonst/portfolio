import styles from "./page.module.css";
import Image from "next/image";
import Navbar from "@/app/Components/Navbar/Navbar";

import moncraBanner from "@/app/assets/moncraImage.png";

import gameplayImage from "@/app/assets/moncra/gameplay.png";
import combatImage from "@/app/assets/moncra/combat.png";
import weaponImage from "@/app/assets/moncra/weapon.png";
import inventoryImage from "@/app/assets/moncra/inventory.png";
import partyImage from "@/app/assets/moncra/party.png";

const technologies = [
    "NEXT.JS",
    "TYPESCRIPT",
    "EXCALIBUR",
    "COLYSEUS",
    "NODE.JS",
];

const systems = [
    {
        number: "01",
        title: "Real-Time Combat",
        description:
            "Weapon-based combat with combos, critical hits, hit detection, and visual effects.",
    },
    {
        number: "02",
        title: "Multiplayer",
        description:
            "Synchronized players, parties, enemies, combat, and shared dungeon state.",
    },
    {
        number: "03",
        title: "Procedural Dungeons",
        description:
            "Dynamically generated dungeon floors with rooms, hallways, enemies, and encounters.",
    },
    {
        number: "04",
        title: "Itemization",
        description:
            "Weapons and armor with rarity, randomized stat rolls, gear power, and progression.",
    },
    {
        number: "05",
        title: "Gear Upgrading",
        description:
            "Level equipment, spend upgrade points, improve stats, and unlock mastery progression.",
    },
    {
        number: "06",
        title: "Inventory & Gear",
        description:
            "Collect, compare, equip, upgrade, and manage weapons and armor.",
    },
];

export default function MoncraPage() {
    return (
        <>
            <Navbar />

            <main className={styles.page}>
                {/* HERO */}
                <section className={styles.hero}>
                    <div className={styles.heroTop}>
                        <p className={styles.eyebrow}>
                            GAME DEVELOPMENT / MULTIPLAYER RPG
                        </p>

                        <h1>Moncra</h1>

                        <div className={styles.heroInfo}>
                            <p className={styles.heroDescription}>
                                A multiplayer 2D action RPG focused on
                                fast-paced combat, dungeon exploration, and
                                gear progression.
                            </p>

                            <div className={styles.heroMeta}>
                                <div>
                                    <span>ROLE</span>
                                    <p>Developer & Designer</p>
                                </div>

                                <div>
                                    <span>TYPE</span>
                                    <p>Multiplayer Action RPG</p>
                                </div>

                                <div>
                                    <span>STATUS</span>
                                    <p>In Development</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.banner}>
                        <Image
                            src={moncraBanner}
                            alt="Moncra"
                            fill
                            priority
                            className={styles.bannerImage}
                        />
                    </div>
                </section>

                {/* ABOUT */}
                <section className={styles.overview}>
                    <div className={styles.sectionLabel}>
                        <span>01</span>
                        <p>ABOUT</p>
                    </div>

                    <div className={styles.overviewContent}>
                        <h2>
                            Fight.
                            <br />
                            Loot.
                            <br />
                            Progress.
                        </h2>

                        <div className={styles.overviewText}>
                            <p>
                                Explore procedural dungeons, defeat enemies,
                                and build stronger characters through gear and
                                item progression.
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

                {/* GAMEPLAY */}
                <section className={styles.showcaseSection}>
                    <div className={styles.showcaseHeader}>
                        <div>
                            <p className={styles.featureNumber}>
                                03 / GAMEPLAY
                            </p>

                            <h2>Explore together.</h2>
                        </div>

                        <p>
                            Multiplayer dungeon exploration with synchronized
                            players and shared encounters.
                        </p>
                    </div>

                    <div className={styles.wideImage}>
                        <Image
                            src={gameplayImage}
                            alt="Moncra multiplayer gameplay"
                            fill
                            className={styles.screenshot}
                        />
                    </div>
                </section>

                {/* COMBAT */}
                <section className={styles.showcaseSection}>
                    <div className={styles.showcaseHeader}>
                        <div>
                            <p className={styles.featureNumber}>
                                04 / COMBAT
                            </p>

                            <h2>Fast-paced action combat.</h2>
                        </div>

                        <p>
                            Weapon combos, enemy encounters, projectiles,
                            critical hits, and combat effects.
                        </p>
                    </div>

                    <div className={styles.wideImage}>
                        <Image
                            src={combatImage}
                            alt="Moncra combat"
                            fill
                            className={styles.screenshot}
                        />
                    </div>
                </section>

                {/* ITEMIZATION */}
                <section className={styles.showcaseSection}>
                    <div className={styles.showcaseHeader}>
                        <div>
                            <p className={styles.featureNumber}>
                                05 / ITEMIZATION
                            </p>

                            <h2>Progress through gear.</h2>
                        </div>

                        <p>
                            Rarity, randomized rolls, upgrades, levels, mastery,
                            and gear power.
                        </p>
                    </div>

                    <div className={styles.wideImage}>
                        <Image
                            src={weaponImage}
                            alt="Moncra weapon upgrading"
                            fill
                            className={styles.screenshot}
                        />
                    </div>
                </section>

                {/* INVENTORY */}
                <section className={styles.showcaseSection}>
                    <div className={styles.showcaseHeader}>
                        <div>
                            <p className={styles.featureNumber}>
                                06 / INVENTORY
                            </p>

                            <h2>Build your loadout.</h2>
                        </div>

                        <p>
                            Equip weapons and armor, compare stats, and manage
                            your character's gear.
                        </p>
                    </div>

                    <div className={styles.wideImage}>
                        <Image
                            src={inventoryImage}
                            alt="Moncra inventory and gear"
                            fill
                            className={styles.screenshot}
                        />
                    </div>
                </section>

                {/* MULTIPLAYER */}
                <section className={styles.showcaseSection}>
                    <div className={styles.showcaseHeader}>
                        <div>
                            <p className={styles.featureNumber}>
                                07 / MULTIPLAYER
                            </p>

                            <h2>Create a party.</h2>
                        </div>

                        <p>
                            Create party rooms, invite players with a code,
                            and enter dungeons together.
                        </p>
                    </div>

                    <div className={styles.wideImage}>
                        <Image
                            src={partyImage}
                            alt="Moncra party system"
                            fill
                            className={styles.screenshot}
                        />
                    </div>
                </section>

                {/* FOOTER */}
                <section className={styles.footer}>
                    <p>MONCRA</p>

                    <h2>
                        Fight.
                        <br />
                        Loot.
                        <br />
                        Progress.
                    </h2>

                    <span>ONGOING PROJECT — 2026</span>
                </section>
            </main>
        </>
    );
}