'use client';

import { Dispatch, SetStateAction } from "react";
import styles from "./style.module.css";

interface ProjectProps {
    index: number;
    title: string;
    setModal: Dispatch<SetStateAction<{ active: boolean; index: number }>>;
}

const Project = ({ index, title, setModal }: ProjectProps) => {
    return (
        <div
            onMouseEnter={() => { setModal({ active: true, index: index }) }}
            onMouseLeave={() => { setModal({ active: false, index: index }) }}
            className={styles.project}
        >
            <div>
                <h2>{title}</h2>
                <p>PERSONAL PROJECT</p>
            </div>
        </div>
    );
}

export default Project;