import React, { useState } from "react";
import "./Mydetails.css";
import { Icon } from "@iconify/react";

function Mydetails() {
	const [imagePreview, setImagePreview] = useState(null);
	const [isDragging, setIsDragging] = useState(false);

	// Handle file upload (from both drag-and-drop or file input)
	const handleImageChange = (file) => {
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setImagePreview(reader.result); // Set image preview state
			};
			reader.readAsDataURL(file); // Read the file as Data URL
		}
	};

	// Handle file selection via input
	const handleInputChange = (e) => {
		const file = e.target.files[0];
		handleImageChange(file);
	};

	// Handle drag events
	const handleDragOver = (e) => {
		e.preventDefault();
		setIsDragging(true); // Add dragging state
	};

	const handleDragLeave = () => {
		setIsDragging(false); // Remove dragging state
	};

	const handleDrop = (e) => {
		e.preventDefault();
		setIsDragging(false); // Remove dragging state
		const file = e.dataTransfer.files[0];
		handleImageChange(file);
	};
	return (
		<>
			<div className="maindetailsdiv ">
				<div className="mainfirstinput ">
					<div cl>
						<label>First name</label>
						<input type="text" placeholder="Killan"  />
					</div>
					<div>
						{" "}
						<label>Last name</label>
						<input type="text" placeholder="James" />
					</div>
				</div>

				<div className="sectioninputdiv">
					<label>Email</label>
					<input type="email" placeholder="killanjames@gmail.com" />
				</div>

				<div className="simpleline"></div>

				<div
					className={`imageuploaddiv ${isDragging ? "dragging" : ""}`}
					onDragOver={handleDragOver}
					onDragLeave={handleDragLeave}
					onDrop={handleDrop}
					style={{}}>
					{imagePreview ? (
						<img
							src={imagePreview}
							alt="Preview"
							style={{
								maxWidth: "100%",
								maxHeight: "400px",
								marginTop: "20px",
							}}
						/>
					) : (
						<>
							<label htmlFor="uploadimage" style={{ cursor: "pointer" }}>
								<Icon icon="material-symbols:cloud-upload" />
								<input
									type="file"
									name="uploadimage"
									id="uploadimage"
									style={{ display: "none" }}
									accept="image/*" // Accept all image types
									onChange={handleInputChange} // Handle file input change
								/>
							</label>

							<div className="instructions">
								Click to upload or drag and drop <br />
								SVG, PNG, JPG, or GIF (max, 800x400px)
							</div>
						</>
					)}
				</div>
			</div>
			<br />
		</>
	);
}

export default Mydetails;
