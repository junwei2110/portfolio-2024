'use client';

import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadLinksPreset } from "@tsparticles/preset-links";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";


export const ParticlesBackground = () => {

    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadLinksPreset(engine);
            setInit(true);
        });

    }, [])

    const options = { 
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
                speed: 3,
                straight: true,
            },
            number: {
                limit: {
                    value: 50
                }
            },
            opacity: {
                value: 0.5,
              }, 
        },
        responsive: [
            { maxWidth: 1500, 
                options: { 
                    particles: { 
                        number: {
                            limit: {
                                value: 35
                            }
                        } 
                    }
                }
            },
            { maxWidth: 1000, 
                options: { 
                    particles: { 
                        number: {
                            limit: {
                                value: 25
                            }
                        } 
                    }
                }
            },
            { maxWidth: 500, 
                options: { 
                    particles: { 
                        number: {
                            limit: {
                                value: 15
                            }
                        } 
                    }
                }
            }
        ] 
    };


    return init ? (
        <Particles options={options} className={styles.BackgroundDiv} />
    ) : null
}