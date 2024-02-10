'use client';

import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadLinksPreset } from "@tsparticles/preset-links";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const particleOptionMap = new Map<number, number>();
const particleNumbers = [30, 40, 50];
particleOptionMap.set(500, particleNumbers[0]);
particleOptionMap.set(1000, particleNumbers[1]);
particleOptionMap.set(1500, particleNumbers[2]);
const responsiveOptions = [
    { maxWidth: 500, 
        options: { 
            particles: { 
                number: {
                    limit: {
                        value: particleNumbers[0]
                    },
                    value: particleNumbers[0]
                },
            }
        }
    },
    { maxWidth: 1000, 
        options: { 
            particles: { 
                number: {
                    limit: {
                        value: particleNumbers[1]
                    },
                    value: particleNumbers[1]
                } 
            }
        }
    },
    { maxWidth: 1500, 
        options: { 
            particles: { 
                number: {
                    limit: {
                        value: particleNumbers[2]
                    },
                    value: particleNumbers[2]
                } 
            }
        }
    },
];




export const ParticlesBackground = () => {

    const [init, setInit] = useState(false);
    const [options, setOptions] = useState({});

    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadLinksPreset(engine);
            setInit(true);

            let maxNumParticles = 50;
            for (let maxWidth of Array.from(particleOptionMap.keys())) {
                if (window.innerWidth < maxWidth) {
                    maxNumParticles = particleOptionMap.get(maxWidth) || 0;
                    break;
                }
            };
            setOptions({ 
                preset: "links", 
                background: { color: "#1b1b1b" }, 
                particles: { 
                    size: {
                        value: { min: 3, max: 3 },
                    },
                    links: {
                        distance: 110,
                        enable: true,
                        opacity: 0.5,
                        width: 2,
                        },
                    move: {
                        random: false,
                        speed: 4,
                        straight: true,
                    },
                    number: {
                        limit: {
                            value: maxNumParticles
                        },
                        value: maxNumParticles
                    },
                    opacity: {
                        value: 0.5,
                    }, 
                },
                responsive: responsiveOptions
            });

        });

    }, []);


    return init ? (
        <Particles options={options} className={styles.BackgroundDiv} />
    ) : null
}