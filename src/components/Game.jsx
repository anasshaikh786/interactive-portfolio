import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Download, Volume2, VolumeX } from "lucide-react";
import { levels } from "../data/resume";
import Robot from "./Robot";
import {
  AboutScene,
  AchievementsScene,
  ContactScene,
  EducationScene,
  ExperienceScene,
  HomeScene,
  ProjectsScene,
  SkillsScene,
} from "./Scenes";

const RESUME_FILE = "/resume/Mohd-Anas-Shaikh-Resume.pdf";

const sceneMap = {
  home: HomeScene,
  about: AboutScene,
  skills: SkillsScene,
  experience: ExperienceScene,
  projects: ProjectsScene,
  education: EducationScene,
  achievements: AchievementsScene,
  contact: ContactScene,
};

const Game = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const [walking, setWalking] = useState(false);
  const [muted, setMuted] = useState(true);

  const startWalk = useCallback((nextDirection) => {
    setDirection(nextDirection);
    setWalking(true);
    window.setTimeout(() => setWalking(false), 700);
  }, []);

  const next = useCallback(() => {
    setIndex((currentIndex) => {
      if (currentIndex >= levels.length - 1) return currentIndex;
      startWalk("right");
      return currentIndex + 1;
    });
  }, [startWalk]);

  const prev = useCallback(() => {
    setIndex((currentIndex) => {
      if (currentIndex <= 0) return currentIndex;
      startWalk("left");
      return currentIndex - 1;
    });
  }, [startWalk]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev]);

  const CurrentScene = sceneMap[levels[index].id];
  const progress = ((index + 1) / levels.length) * 100;
  const characterPosition = 8 + index * (84 / (levels.length - 1));

  return (
    <div className="game-root">
      <div className="sky-gradient" />
      <div className="sky-sun" />
      <div className="sky-clouds">
        <div className="cloud c1" />
        <div className="cloud c2" />
        <div className="cloud c3" />
        <div className="cloud c4" />
      </div>
      <div className="far-mountains" />
      <div className="near-mountains" />

      <header className="hud-top">
        <div className="hud-brand">
          <div className="hud-badge">A</div>
          <div>
            <div className="hud-title">Anas&#39;s Sky Quest</div>
            <div className="hud-sub">Interactive Resume &middot; 2025</div>
          </div>
        </div>

        <div className="hud-progress">
          <div className="hud-progress-label">
            Level {index + 1} / {levels.length} &mdash; <strong>{levels[index].label}</strong>
          </div>
          <div className="hud-progress-bar">
            <div className="hud-progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="hud-actions">
          <button className="icon-btn" onClick={() => setMuted(!muted)} aria-label="toggle sound">
            {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
          <a className="icon-btn primary" href={RESUME_FILE} download>
            <Download size={16} />
            <span>Resume</span>
          </a>
        </div>
      </header>

      <nav className="level-nav" aria-label="Resume sections">
        {levels.map((level, levelIndex) => (
          <button
            key={level.id}
            className={`level-chip ${levelIndex === index ? "active" : ""} ${levelIndex < index ? "done" : ""}`}
            onClick={() => {
              startWalk(levelIndex > index ? "right" : "left");
              setIndex(levelIndex);
            }}
          >
            <span className="chip-num">{levelIndex + 1}</span>
            <span className="chip-label">{level.label}</span>
          </button>
        ))}
      </nav>

      <main className="scene-stage">
        <AnimatePresence mode="wait">
          <motion.div
            key={levels[index].id}
            className="scene-anim"
            initial={{ opacity: 0, x: direction === "right" ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === "right" ? -40 : 40 }}
            transition={{ duration: 0.32, ease: "easeOut" }}
          >
            <CurrentScene />
          </motion.div>
        </AnimatePresence>
      </main>

      <div className="ground-layer">
        <div className="ground-grass" />
        <div className="ground-dirt">
          <div className="ground-pattern" />
        </div>
        <div className="character-stage" style={{ left: `${characterPosition}%` }}>
          <Robot walking={walking} facing={direction} />
          <div className="character-shadow" />
        </div>
      </div>

      <button className="side-nav left" onClick={prev} disabled={index === 0} aria-label="previous">
        <ChevronLeft size={28} />
      </button>
      <button className="side-nav right" onClick={next} disabled={index === levels.length - 1} aria-label="next">
        <ChevronRight size={28} />
      </button>

      <div className="bottom-hint">
        Use <kbd>&larr;</kbd> <kbd>&rarr;</kbd> arrow keys or the side buttons to navigate
      </div>
    </div>
  );
};

export default Game;
