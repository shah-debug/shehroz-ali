import React from "react";
import Typewriter from "typewriter-effect";

function Typing() {
    return (
        <Typewriter
            options={{
                strings: [
                    "AI Researcher",
                    "Multimodal AI Researcher",
                    "Medical AI Researcher",
                    "Machine Learning Researcher",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Typing;
