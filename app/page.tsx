"use client"
import styles from "./page.module.css";
import ProjectCard from "./Components/ProjectCard/ProjectCard"
import { projects } from "./projects"
import Navbar from "./Components/Navbar/Navbar"
import {ChevronDownIcon} from "@heroicons/react/24/outline"
import {useRef} from "react"

export default function Home() {

    const portfolioRef = useRef<HTMLDivElement>(null)

    const handleScroll = () => {
        portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
    };

  return (
      <>
          <Navbar />
          <div className={styles.home}>
              <div className={styles.landingContainer}>
                  <div className={styles.light}></div>
                  <p>BASED IN MICHIGAN</p>
                  <h1>Quality Design and Web Development</h1>
                  <button onClick={handleScroll}>
                      My Portfolio
                      <ChevronDownIcon className={styles.arrowIcon}/>
                  </button>
              </div>
              <div ref={portfolioRef} className={styles.projectList}>
                  <div className={styles.header}>
                      <h1>Portfolio</h1>
                  </div>
                  {projects.map((project, index) => (
                      <ProjectCard
                          key={index}
                          flipped={index % 2 === 1}
                          image={project.image}
                          title={project.title}
                          description={project.description}
                          technology={project.technology}
                          website={project.website}
                      />
                  ))}
              </div>
          </div>
      </>
  );
}
