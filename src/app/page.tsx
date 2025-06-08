'use client';

import styles from './page.module.css'
import Project from '@/components/project';

import Modal from '@/components/modal';
import { useState } from 'react';

const projects = [
  {
    title: "Dapper Fit",
    src: "dapper-fit.png",
    color: "#000000"
  },
  {
    title: "The Wild Oasis",
    src: "the-wild-oasis.png",
    color: "#8C8C8C"
  },
  {
    title: "Prime Care",
    src: "primecare.png",
    color: "#EFE8D3"
  },
  {
    title: "Propery Hub",
    src: "property-hub.png",
    color: "#706D63"
  }
]

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main className={styles.main}>
      <div className={styles.body}>
        {
          projects.map((project, index) => (
            <Project key={index} index={index} title={project.title} setModal={setModal} />
          ))
        }
      </div>
      <Modal modal={modal} projects={projects} />
    </main>
  );
}
