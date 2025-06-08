import Image from 'next/image';
import styles from './style.module.css';

import { motion } from 'framer-motion';

const scaleAnimation = {
    initial: {
        scale: 0,
        x: "-50%",
        y: "-50%",
    },
    enter: {
        scale: 1,
        x: "-50%",
        y: "-50%",
        transition: {
            duration: 0.4,
            ease: [0.76, 0, 0.24, 1],
        },
    },
    closed: {
        scale: 0,
        x: "-50%",
        y: "-50%",
        transition: {
            duration: 0.4,
            ease: [0.32, 0, 0.67, 0],
        }
    }
}

type Project = {
    title: string;
    src: string;
    color: string;
}

interface ModalProps {
    modal: { active: boolean; index: number };
    projects: Project[];
}


const Modal = ({ modal, projects }: ModalProps) => {
    const { active, index } = modal;
    return (
        <>
            <motion.div
                variants={scaleAnimation}
                initial="initial"
                animate={active ? "enter" : "closed"}
                className={styles.modalContainer}
            >
                <div
                    style={{ top: index * -100 + "%" }}
                    className={styles.modalSlider}
                >
                    {
                        projects.map((project, index) => {
                            const { src, color } = project;
                            return <div
                                key={`modal_${index}`}
                                style={{ backgroundColor: color }}
                                className={styles.modal}
                            >
                                <Image
                                    src={`/images/${src}`}
                                    alt="project image"
                                    width={325}
                                    height={0}
                                />
                            </div>
                        })
                    }
                </div>
            </motion.div>
            <motion.div className={styles.cursor} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
            <motion.div className={styles.cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>
                View
            </motion.div>
        </>
    );
}

export default Modal;