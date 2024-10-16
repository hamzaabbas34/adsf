// import React, { useEffect, useMemo, useRef } from "react";
// import WaveSurfer from "wavesurfer.js"; // Make sure to install wavesurfer.js
// import audioFile from "../../Assets/sounds/my.mp3"; // Import the audio file
// import sound1 from "../../Assets/Images/rightsound.png"; // Import the background image
// import boxup from "../../Assets/Images/boxup.png"; // Import the second image

// function Right() {
//   // Memoized array of sound recordings
//   const recordings = useMemo(() => [
//     { id: 1, src: audioFile },
//     { id: 2, src: audioFile },
//     { id: 3, src: audioFile },
//     { id: 4, src: audioFile },
//   ], []);

//   // Create refs for each waveform container
//   const waveformContainerRefs = useRef(recordings.map(() => React.createRef()));
//   const wavesurferRefs = useRef(recordings.map(() => null));

//   // Initialize WaveSurfer for each recording
//   useEffect(() => {
//     const currentWavesurferRefs = wavesurferRefs.current; // Copy refs

//     recordings.forEach((recording, index) => {
//       if (!currentWavesurferRefs[index]) {
//         currentWavesurferRefs[index] = WaveSurfer.create({
//           container: waveformContainerRefs.current[index].current,
//           waveColor: "rgb(255, 255, 255)",
//           progressColor: "rgba(255, 255, 255, 0.5)",
//           cursorColor: "rgba(0, 0, 0, 0.0)",
//           barWidth: 2,
//           barHeight: 25,
//           barGap: 3,
//           barRadius: 2,
//           height: 70,
//         });
//         currentWavesurferRefs[index].load(recording.src);
//       }
//     });

//     // Cleanup on component unmount
//     return () => {
//       currentWavesurferRefs.forEach((wavesurfer, index) => {
//         if (wavesurfer && wavesurfer.isReady) {
//           wavesurfer.destroy();
//           currentWavesurferRefs[index] = null;
//         }
//       });
//     };
//   }, [recordings]);

//   const handlePlayAll = () => {
//     let currentIndex = 0;

//     const playNext = (index) => {
//       if (index < wavesurferRefs.current.length) {
//         const wavesurfer = wavesurferRefs.current[index];

//         if (wavesurfer) {
//           wavesurfer.play();

//           // Once this recording finishes, play the next one
//           wavesurfer.on("finish", () => {
//             playNext(index + 1);
//           });
//         }
//       }
//     };

//     // Start by playing the first recording
//     playNext(currentIndex);
//   };

//   // Handle play/pause for each waveform
//   const handlePlayPause = (index) => {
//     const wavesurfer = wavesurferRefs.current[index];
//     if (wavesurfer) {
//       wavesurfer.isPlaying() ? wavesurfer.pause() : wavesurfer.play();
//     }
//   };

//   return (
//     <div className="flex flex-col gap-10 md:p-5 sm:py-0 py-2">
//       {/* Mapping through the recordings */}
//       {recordings.map((recording, index) => (
//         <div
//           key={recording.id}
//           className="px-0 py-0 border-2 rounded-full relative overflow-hidden"
//           onClick={() => handlePlayPause(index)}>
//           <img
//             src={sound1}
//             className="w-full h-full left-0 top-0 absolute"
//             alt="Sound Background"
//           />
//           <img
//             src={boxup}
//             className="w-1/2 h-full left-0 top-0 absolute"
//             alt="Box Up"
//           />
//           <div
//             ref={waveformContainerRefs.current[index]}
//             className="waveform-container"></div>
//         </div>
//       ))}
//       <div className="flex justify-between items-center z-20 px-2 mt-5 sm:flex-nowrap flex-wrap   ">
//         <button
//           onClick={handlePlayAll}
//           className="bg-[#3BE3E3] sm:text-[16px] text-[14px]  sm:w-[30%]  w-full border-[#3BE3E3] text-black rounded-full border sm:px-6 py-2 mb-5">
//           Play all
//         </button>
//         <button className=" w-full border-[0.5px] sm:text-[16px] text-[14px]  sm:w-auto border-[#EABFFF] rounded-full sm:px-6 py-2 mb-5">
//           Download List
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Right;

import React, { useEffect, useMemo, useRef, useCallback } from "react";
import WaveSurfer from "wavesurfer.js"; // Make sure to install wavesurfer.js
import audioFile from "../../Assets/sounds/my.mp3"; // Import the audio file
import sound1 from "../../Assets/Images/rightsound.png"; // Import the background image
import boxup from "../../Assets/Images/boxup.png"; // Import the second image

function Right() {
  // Memoized array of sound recordings
  const recordings = useMemo(() => [
    { id: 1, src: audioFile },
    { id: 2, src: audioFile },
    { id: 3, src: audioFile },
    { id: 4, src: audioFile },
  ], []);

  // Create refs for each waveform container
  const waveformContainerRefs = useRef(recordings.map(() => React.createRef()));
  const wavesurferRefs = useRef(recordings.map(() => null));

  // Initialize WaveSurfer for each recording
  useEffect(() => {
    const currentWavesurferRefs = wavesurferRefs.current; // Copy refs

    recordings.forEach((recording, index) => {
      if (!currentWavesurferRefs[index]) {
        currentWavesurferRefs[index] = WaveSurfer.create({
          container: waveformContainerRefs.current[index].current,
          waveColor: "rgb(255, 255, 255)",
          progressColor: "rgba(255, 255, 255, 0.5)",
          cursorColor: "rgba(0, 0, 0, 0.0)",
          barWidth: 2,
          barHeight: 25,
          barGap: 3,
          barRadius: 2,
          height: 70,
        });
        currentWavesurferRefs[index].load(recording.src);
      }
    });

    // Cleanup on component unmount
    return () => {
      currentWavesurferRefs.forEach((wavesurfer, index) => {
        if (wavesurfer && wavesurfer.isReady) {
          wavesurfer.destroy();
          currentWavesurferRefs[index] = null;
        }
      });
    };
  }, [recordings]);

  // Callback for handling play/pause for each waveform
  const handlePlayPause = useCallback((index) => {
    const wavesurfer = wavesurferRefs.current[index];
    if (wavesurfer) {
      wavesurfer.isPlaying() ? wavesurfer.pause() : wavesurfer.play();
    }
  }, []);

  // Callback for playing all recordings
  const handlePlayAll = useCallback(() => {
    let currentIndex = 0;

    const playNext = (index) => {
      if (index < wavesurferRefs.current.length) {
        const wavesurfer = wavesurferRefs.current[index];

        if (wavesurfer) {
          wavesurfer.play();

          // Once this recording finishes, play the next one
          wavesurfer.on("finish", () => {
            playNext(index + 1);
          });
        }
      }
    };

    // Start by playing the first recording
    playNext(currentIndex);
  }, []);

  return (
    <div className="flex flex-col gap-10 md:p-5 sm:py-0 py-2">
      {/* Mapping through the recordings */}
      {recordings.map((recording, index) => (
        <div
          key={recording.id}
          className="px-0 py-0 border-2 rounded-full relative overflow-hidden"
          onClick={() => handlePlayPause(index)}>
          <img
            src={sound1}
            className="w-full h-full left-0 top-0 absolute"
            alt="Sound Background"
          />
          <img
            src={boxup}
            className="w-1/2 h-full left-0 top-0 absolute"
            alt="Box Up"
          />
          <div
            ref={waveformContainerRefs.current[index]}
            className="waveform-container"></div>
        </div>
      ))}
      <div className="flex justify-between items-center z-20 px-2 mt-5 sm:flex-nowrap flex-wrap   ">
        <button
          onClick={handlePlayAll}
          className="bg-[#3BE3E3] sm:text-[16px] text-[14px]  sm:w-[30%]  w-full border-[#3BE3E3] text-black rounded-full border sm:px-6 py-2 mb-5">
          Play all
        </button>
        <button className=" w-full border-[0.5px] sm:text-[16px] text-[14px]  sm:w-auto border-[#EABFFF] rounded-full sm:px-6 py-2 mb-5">
          Download List
        </button>
      </div>
    </div>
  );
}

export default Right;
