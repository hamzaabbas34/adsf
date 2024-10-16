// import React, { useEffect, useRef, useState, useMemo } from "react";
// import WaveSurfer from "wavesurfer.js"; // Make sure to install wavesurfer.js
// import audioFile from "../../Assets/sounds/my.mp3"; // Import the audio file
// import sound1 from "../../Assets/Images/rightsound.png"; // Import the background image
// import boxup from "../../Assets/Images/boxup.png"; // Import the second image
// import person1 from "../../Assets/Images/person1.png"; // Import an image for the recording
// import record2 from "../../Assets/Images/recordinimg.png";
// import { Icon } from "@iconify/react"; // Ensure you have the iconify/react installed

// function Liftside() {
// 	// State to handle play/pause status
// 	const [isPlaying, setIsPlaying] = useState(false);

// 	// Memoizing the recordings array
// 	const recordings = useMemo(() => [
// 		{ id: 1, src: audioFile },
// 	], []); // No need to include audioFile as a dependency

// 	// Create refs for each waveform container
// 	const waveformContainerRefs = useRef(recordings.map(() => React.createRef()));
// 	const wavesurferRefs = useRef(recordings.map(() => null));

// 	// Initialize WaveSurfer for each recording
// 	useEffect(() => {
// 		recordings.forEach((recording, index) => {
// 			if (!wavesurferRefs.current[index]) {
// 				wavesurferRefs.current[index] = WaveSurfer.create({
// 					container: waveformContainerRefs.current[index].current,
// 					waveColor: "rgb(255, 255, 255)",
// 					progressColor: "rgba(255, 255, 255, 0.5)",
// 					cursorColor: "rgba(0, 0, 0, 0.0)",
// 					barWidth: 2,
// 					barHeight: 25,
// 					barGap: 3,
// 					barRadius: 2,
// 					height: 70,
// 				});
// 				wavesurferRefs.current[index].load(recording.src);
// 			}
// 		});

// 		// Cleanup on component unmount
// 		return () => {
// 			const currentWavesurfers = wavesurferRefs.current; // Copy ref for cleanup
// 			currentWavesurfers.forEach((wavesurfer, index) => {
// 				if (wavesurfer && wavesurfer.isReady) {
// 					try {
// 						wavesurfer.destroy();
// 					} catch (error) {
// 						console.error(
// 							`Error destroying wavesurfer instance at index ${index}:`,
// 							error
// 						);
// 					}
// 					currentWavesurfers[index] = null;
// 				}
// 			});
// 		};
// 	}, [recordings]);

// 	const handlePlayAll = () => {
// 		let currentIndex = 0;

// 		const playNext = (index) => {
// 			if (index < wavesurferRefs.current.length) {
// 				const wavesurfer = wavesurferRefs.current[index];

// 				if (wavesurfer) {
// 					wavesurfer.play();

// 					// Once this recording finishes, play the next one
// 					wavesurfer.on("finish", () => {
// 						playNext(index + 1);
// 					});
// 				}
// 			}
// 		};

// 		// Start by playing the first recording
// 		playNext(currentIndex);
// 	};

// 	// Handle play/pause for each waveform
// 	const handlePlayPause = (index) => {
// 		const wavesurfer = wavesurferRefs.current[index];
// 		if (wavesurfer) {
// 			if (wavesurfer.isPlaying()) {
// 				wavesurfer.pause();
// 				setIsPlaying(false);
// 			} else {
// 				wavesurfer.play();
// 				setIsPlaying(true);
// 			}
// 		}
// 	};

// 	return (
// 		<div className="flex flex-col gap-10 ">
// 			{/* Mapping through the recordings */}
// 			{recordings.map((recording, index) => (
// 				<div key={recording.id} className="md:px-0 md:rounded rounded-[50px] overflow-hidden">
// 					<div className="w-full relative z-10">
// 						<img
// 							src={record2}
// 							className="w-full h-full absolute left-0 top-0 -z-[9]"
// 							alt=""
// 						/>
// 						<div className="w-full flex items-center gap-4 px-4 py-5 flex-wrap">
// 							<div className="2xl:w-36 2xl:h-36 xl:w-28 xl:h-28 sm:w-36 sm:h-36 w-24 h-24 rounded-full mx-auto">
// 								<img src={person1} alt="" />
// 							</div>
// 							<div className="md:w-[70%] w-full">
// 								<div className="flex w-full justify-between items-center sm:mb-5 mb-2 gap-3 flex-wrap">
// 									<h2 className="sm:mx-0 mx-auto 2xl:text-3xl xl:text-[19px] font-light font-inter tracking-[0.2em]">
// 										Recording {index + 1}
// 									</h2>
// 									<button className="sm:mx-0 mx-auto px-4 py-2 border-2 border-black rounded-full flex items-center gap-2">
// 										<Icon icon="hugeicons:pencil-edit-02" />
// 										Edits
// 									</button>
// 								</div>
// 								<div className="px-0 py-0 border-2 rounded-full relative overflow-hidden">
// 									<img
// 										src={sound1}
// 										className="w-full h-full left-0 top-0 absolute"
// 										alt=""
// 									/>
// 									<img
// 										src={boxup}
// 										className="w-1/2 h-full left-0 top-0 absolute"
// 										alt=""
// 									/>
// 									<div
// 										ref={waveformContainerRefs.current[index]}
// 										className="waveform-container"></div>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="md:mt-10 md:mb-5 mb-4 w-[80%] mx-auto">
// 							<div className="h-1 w-full bg-white bg-opacity-50"></div>
// 						</div>
// 						<div className="flex justify-around flex-wrap sm:flex-nowrap px-4 w-full">
// 							<div className="flex gap-3 mb-5 sm:flex-nowrap flex-wrap w-full ">
// 								<button className="px-6 py-2 bg-[#3BE3E3] rounded-full w-full sm:w-[30%]">
// 									Download
// 								</button>
// 								<button
// 									className="px-6 py-2 bg-[#3BE3E3] rounded-full w-full sm:w-[30%]"
// 									onClick={() => handlePlayPause(index)}>
// 									{isPlaying ? "Pause" : "Listen"}
// 								</button>
// 							</div>
// 							<button className="sm:w-[30%] w-full border-[#3BE3E3] rounded-full border px-6 py-2 mb-5">
// 								Delete
// 							</button>
// 						</div>
// 					</div>
// 				</div>
// 			))}
// 		</div>
// 	);
// }

// export default Liftside;

import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import WaveSurfer from "wavesurfer.js"; // Make sure to install wavesurfer.js
import audioFile from "../../Assets/sounds/my.mp3"; // Import the audio file
import sound1 from "../../Assets/Images/rightsound.png"; // Import the background image
import boxup from "../../Assets/Images/boxup.png"; // Import the second image
import person1 from "../../Assets/Images/person1.png"; // Import an image for the recording
import record2 from "../../Assets/Images/recordinimg.png";
import { Icon } from "@iconify/react"; // Ensure you have the iconify/react installed

function Liftside() {
	// State to handle play/pause status
	const [isPlaying, setIsPlaying] = useState(false);

	// Memoizing the recordings array
	const recordings = useMemo(
		() => [
			{ id: 1, src: audioFile },
			// Add more recordings if necessary
		],
		[]
	); // No need to include audioFile as a dependency

	// Create refs for each waveform container
	const waveformContainerRefs = useRef(recordings.map(() => React.createRef()));
	const wavesurferRefs = useRef(recordings.map(() => null));

	// Initialize WaveSurfer for each recording
	useEffect(() => {
		const currentWavesurfers = wavesurferRefs.current; // Copy ref for cleanup

		recordings.forEach((recording, index) => {
			if (!currentWavesurfers[index]) {
				currentWavesurfers[index] = WaveSurfer.create({
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
				currentWavesurfers[index].load(recording.src);
			}
		});

		return () => {
			currentWavesurfers.forEach((wavesurfer, index) => {
				if (wavesurfer && wavesurfer.isReady) {
					try {
						wavesurfer.destroy();
					} catch (error) {
						console.error(
							`Error destroying wavesurfer instance at index ${index}:`,
							error
						);
					}
					currentWavesurfers[index] = null;
				}
			});
		};
	}, [recordings]);

	// Memoize the play/pause handler
	const handlePlayPause = useCallback((index) => {
		const wavesurfer = wavesurferRefs.current[index];
		if (wavesurfer) {
			if (wavesurfer.isPlaying()) {
				wavesurfer.pause();
				setIsPlaying(false);
			} else {
				wavesurfer.play();
				setIsPlaying(true);
			}
		}
	}, []);

	return (
		<div className="flex flex-col gap-10 ">
			{/* Button to play all recordings */}

			{/* Mapping through the recordings */}
			{recordings.map((recording, index) => (
				<div
					key={recording.id}
					className="md:px-0 md:rounded rounded-[50px] overflow-hidden">
					<div className="w-full relative z-10">
						<img
							src={record2}
							className="w-full h-full absolute left-0 top-0 -z-[9]"
							alt=""
						/>
						<div className="w-full flex items-center gap-4 px-4 py-5 flex-wrap">
							<div className="2xl:w-36 2xl:h-36 xl:w-28 xl:h-28 sm:w-36 sm:h-36 w-24 h-24 rounded-full mx-auto">
								<img src={person1} alt="" />
							</div>
							<div className="md:w-[70%] w-full">
								<div className="flex w-full justify-between items-center sm:mb-5 mb-2 gap-3 flex-wrap">
									<h2 className="sm:mx-0 mx-auto 2xl:text-3xl xl:text-[19px] font-light font-inter tracking-[0.2em]">
										Recording {index + 1}
									</h2>
									<button className="sm:mx-0 mx-auto px-4 py-2 border-2 border-black rounded-full flex items-center gap-2">
										<Icon icon="hugeicons:pencil-edit-02" />
										Edits
									</button>
								</div>
								<div className="px-0 py-0 border-2 rounded-full relative overflow-hidden">
									<img
										src={sound1}
										className="w-full h-full left-0 top-0 absolute"
										alt=""
									/>
									<img
										src={boxup}
										className="w-1/2 h-full left-0 top-0 absolute"
										alt=""
									/>
									<div
										ref={waveformContainerRefs.current[index]}
										className="waveform-container"></div>
								</div>
							</div>
						</div>
						<div className="md:mt-10 md:mb-5 mb-4 w-[80%] mx-auto">
							<div className="h-1 w-full bg-white bg-opacity-50"></div>
						</div>
						<div className="flex justify-around flex-wrap sm:flex-nowrap px-4 w-full">
							<div className="flex gap-3 mb-5 sm:flex-nowrap flex-wrap w-full ">
								<button className="px-6 py-2 bg-[#3BE3E3] rounded-full w-full sm:w-[30%]">
									Download
								</button>
								<button
									className="px-6 py-2 bg-[#3BE3E3] rounded-full w-full sm:w-[30%]"
									onClick={() => handlePlayPause(index)}>
									{isPlaying ? "Pause" : "Listen"}
								</button>
							</div>
							<button className="sm:w-[30%] w-full border-[#3BE3E3] rounded-full border px-6 py-2 mb-5">
								Delete
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default Liftside;
