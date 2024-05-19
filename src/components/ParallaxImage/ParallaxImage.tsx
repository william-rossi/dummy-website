import React, { useState, useEffect } from 'react';

interface IParallaxImage {
    src: string,
    alt: string,
    classname?: string,
    strength?: number,
    id?: string,
    onClick?: () => void
}

const ParallaxImage = (props: IParallaxImage) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [transformValue, setTransformValue] = useState<string>();

    useEffect(() => {
        const handleMouseMove = (e: any) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        calculateParallax()
    }, [position])

    const calculateParallax = () => {
        let strength: number = props.strength ?? 10;

        if (typeof window === "undefined")
            return;

        const offsetX = -(position.x / window.innerWidth - 0.5) * strength;
        const offsetY = -(position.y / window.innerHeight - 0.5) * strength;

        setTransformValue(`translate(${offsetX}px, ${offsetY}px)`)
    };

    return (
        <img
            onClick={props.onClick}
            id={props.id}
            src={props.src}
            alt={props.alt}
            className={props.classname}
            style={{ transform: transformValue }}
        />
    );
};

export default ParallaxImage;