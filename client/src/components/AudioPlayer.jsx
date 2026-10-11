"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./AudioPlayer.module.css";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

const AudioPlayer = (props) => {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // references
  const audioPlayer = useRef(); // reference our audio component
  const progressBar = useRef(); // reference our progress bar
  const animationRef = useRef(); // reference the animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value - 15);
    changeRange();
  };

  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value + 15);
    changeRange();
  };

  return (
    <div className="flex items-center h-[100px] w-[100vw] bg-black  shadow-md ">
      <audio
        ref={audioPlayer}
        src="https://bafybeigblyqpzgbyeqklwhoefzyojyfdwdqe6gwsiry5blwma2uosxeile.ipfs.dweb.link/audio.mp3"
        preload="metadata"
      ></audio>
      <div className="flex items-center w-[250px] justify-around px-2">
        <button className="bg-white  rounded-md p-2 " onClick={backThirty}>
          <img
            width={39}
            height={39}
            src="https://img.icons8.com/plumpy/96/ffffff/skip-15-seconds-back--v2.png"
            alt=""
          />
        </button>
        <button onClick={togglePlayPause} className="bg-white rounded-full p-4">
          {isPlaying ? <FaPause /> : <FaPlay className={styles.play} />}
        </button>
        <button className="bg-white  rounded-md p-2" onClick={forwardThirty}>
          <img
            width={39}
            height={39}
            src="https://img.icons8.com/plumpy/96/ffffff/skip-ahead-15-seconds.png"
            alt="skip-ahead-15-seconds"
          />
        </button>
      </div>

      <div className="ml-5">
        <img width={75} height={75} src="../images/closer.jpeg" alt="" />
      </div>
      <div className="flex flex-col justify-between gap-2 ml-5 text-white">
        <div className="text-xl font-semibold">{"Closer"}</div>
        {/* current time */}
        <div className="flex gap-5">
          <div className={styles.currentTime}>{calculateTime(currentTime)}</div>
          {/* progress bar */}
          <div>
            <input
              type="range"
              className={styles.progressBar}
              defaultValue="0"
              ref={progressBar}
              onChange={changeRange}
            />
          </div>
          {/* duration */}
          <div className={styles.duration}>{duration || 4.02}</div>
        </div>
      </div>

      <div>
        <img src="https://img.icons8.com/ios/50/high-volume--v2.png" alt="" />
      </div>
    </div>
  );
};

export default AudioPlayer;
