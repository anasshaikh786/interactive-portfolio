import React, { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { levels } from "../data/resume";
import Robot from "./Robot";
import {
  HomeScene, AboutScene, SkillsScene, ExperienceScene,
  ProjectsScene, EducationScene, AchievementsScene, ContactScene
} from "./Scenes";
import { ChevronLeft, ChevronRight, Download, Volume2, VolumeX } from "lucide-react";

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

  const next = useCallback(() => {
    setIndex((i) => {
      if (i >= levels.length - 1) return i;
      setDirection("right");
      setWalking(true);
      setTimeout(() => setWalking(false), 700);
      return i + 1;
    });
  }, []);
  const prev = useCallback(() => {
    setIndex((i) => {
      if (i <= 0) return i;
      setDirection("left");
      setWalking(true);
      setTimeout(() => setWalking(false), 700);
      return i - 1;
    });
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const CurrentScene = sceneMap[levels[index].id];
  const progress = ((index + 1) / levels.length) * 100;

  return (
    <div className="game-root">
      {/* Sky background layers */}
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

      {/* Top HUD */}
      <header className="hud-top">
        <div className="hud-brand">
          <div className="hud-badge">A</div>
          <div>
            <div className="hud-title">Anas&#39;s Sky Quest</div>
            <div className="hud-sub">Interactive Resume · 2025</div>
          </div>
        </div>
        <div className="hud-progress">
          <div className="hud-progress-label">
            Level {index + 1} / {levels.length} — <strong>{levels[index].label}</strong>
          </div>
          <div className="hud-progress-bar">
            <div className="hud-progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>
        <div className="hud-actions">
          <button className="icon-btn" onClick={() => setMuted(!muted)} aria-label="toggle sound">
            {muted ? <VolumeX size={16}/> : <Volume2 size={16}/>}
          </button>
          <button className="icon-btn primary" onClick={() => window.print()}>
            <Download size={16}/> <span>Resume</span>
          </button>
        </div>
      </header>

      {/* Level chip nav */}
      <nav className="level-nav">
        {levels.map((l, i) => (
          <button
            key={l.id}
            className={`level-chip ${i === index ? "active" : ""} ${i < index ? "done" : ""}`}
            onClick={() => {
              setDirection(i > index ? "right" : "left");
              setWalking(true);
              setTimeout(() => setWalking(false), 700);
              setIndex(i);
            }}
          >
            <span className="chip-num">{i + 1}</span>
            <span className="chip-label">{l.label}</span>
          </button>
        ))}
      </nav>

      {/* Scene content */}
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

      {/* Ground with character */}
      <div className="ground-layer">
        <div className="ground-grass" />
        <div className="ground-dirt">
          <div className="ground-pattern" />
        </div>
        <div
          className="character-stage"
          style={{ left: `${8 + (index * (84 / (levels.length - 1)))}%` }}
        >
          <Robot walking={walking} facing={direction} />
          <div className="character-shadow" />
        </div>
      </div>

      {/* Side nav arrows */}
      <button className="side-nav left" onClick={prev} disabled={index === 0} aria-label="previous">
        <ChevronLeft size={28} />
      </button>
      <button className="side-nav right" onClick={next} disabled={index === levels.length - 1} aria-label="next">
        <ChevronRight size={28} />
      </button>

      {/* Bottom hint */}
      <div className="bottom-hint">
        Use <kbd>←</kbd> <kbd>→</kbd> arrow keys or the side buttons to navigate
      </div>
    </div>
  );
};

export default Game;
