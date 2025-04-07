// import React, { useState } from "react";
// import GitHub_logo from "../assets/github_logo.png";
// import Link_logo from "../assets/Link_logo.png";
// import Img2 from "../assets/mobil_proj2.svg";
// import Img1 from "../assets/laptop_proj2.svg";
// import Img3 from "../assets/tablet_proj2.svg";

// const Project2 = () => {
// 	const [activeIndex, setActiveIndex] = useState(1); // Track the center image index

// 	// Images array to manage the slider
// 	const images = [
// 		{ src: Img1, alt: "Phone image" },
// 		{ src: Img2, alt: "Laptop image" },
// 		{ src: Img3, alt: "Tablet image" },
// 	];

// 	// Function to handle hover and set the active image
// 	const handleHover = (index) => {
// 		setActiveIndex(index);
// 	};

// 	return (
// 		<div className=" ml-5 lg:ml-[0.75em]  section-container grid grid-cols-12 gap-y-10 md:-mb-48 lg:mb-28">
// 			{/* Main Content Grid */}
// 			<div className="col-span-12 xl:col-span-12 md:col-start-1 grid grid-cols-12 grid-rows-[auto] gap-y-10 2xl:ml-40">
// 				{/* Empty column for margins */}
// 				<div className="hidden 2xl:block 2xl:col-span-1"></div>

// 				{/* Text Section (first 4 columns on larger screens, full width on small screens) */}
// 				<div className="project-text col-span-12 md:col-span-6 lg:col-span-5   xl:pt-12 2xl:pt-28 row-start-1 ">
// 					<h1 className="text-3xl font-bold mb-4 text-left 2xl:text-5xl">
// 						Donut e-commerce
// 					</h1>

// 					<div className="flex flex-col text-left">
// 						<p className="md:text-sm xl:text-lg 2xl:text-2xl xl:leading-6 2xl:leading-8 text-justify 2xl:mt-10  ">
// 							This online store application allows users to browse the menu,
// 							search for items by category, and add products to their shopping
// 							cart. Upon registering, users can access their personalized cart
// 							with product recommendations tailored to their preferences.
// 						</p>
// 						<br />
// 						<div className="app-features text-left 2xl:text-2xl">
// 							<p className="md:text-sm font-bold xl:text-lg 2xl:text-2xl">
// 								{" "}
// 								• Full-stack app
// 							</p>
// 							<p className="md:text-sm xl:text-lg 2xl:text-2xl text-justify">
// 								{" "}
// 								• <span className="font-bold">
// 									noSql Database (MongoDB)
// 								</span>{" "}
// 								for scalable and flexible data storage
// 							</p>
// 							<p className="md:text-sm xl:text-lg 2xl:text-2xl text-justify">
// 								{" "}
// 								• State management powered by{" "}
// 								<span className="font-bold">Redux</span> for efficient and
// 								responsive user interaction
// 							</p>
// 							<p className="md:text-sm xl:text-lg 2xl:text-2xl text-justify">
// 								{" "}
// 								• <span className="font-bold">JWT</span> token-based
// 								authentication for secure user login and session management
// 							</p>
// 							<p className="md:text-sm xl:text-lg 2xl:text-2xl">
// 								{" "}
// 								• Dynamic product recommendations and personalized shopping cart
// 							</p>
// 							<p className="md:text-sm xl:text-lg 2xl:text-2xl">
// 								{" "}
// 								• Responsive Design
// 							</p>
// 						</div>
// 						<br />
// 					</div>

// 					{/* Logos Section */}
// 					<div className="logos-container mt-4 flex space-x-4">
// 						<a
// 							href="https://github.com/Ruthstring"
// 							className="text-blue-500 underline"
// 							target="_blank"
// 							rel="noopener noreferrer"
// 						>
// 							<img
// 								src={GitHub_logo}
// 								className="max-w-[50px] max-h-[50px] xl:w-[45px] 2xl:w-[70px] hover:shadow-custom-blue hover:rounded-full hover:scale-110"
// 								alt="GitHub Logo"
// 							/>
// 						</a>
// 						<a
// 							href="https://donutstore-e-commerce.netlify.app/"
// 							className="text-blue-500 underline"
// 							target="_blank"
// 							rel="noopener noreferrer"
// 						>
// 							<img
// 								src={Link_logo}
// 								className="max-w-[50px] max-h-[50px] xl:w-[45px] 2xl:w-[70px] hover:shadow-custom-blue hover:rounded-full hover:scale-110"
// 								alt="Link Logo"
// 							/>
// 						</a>
// 					</div>
// 				</div>

// 				{/* Slider Section (full width on small screens, in columns on large screens) */}
// 				{/* <div className="project-media col-span-12 md:col-span-6 2xl:col-span-6  flex justify-center items-center relative md:h-[100vh] xl:h-[100vh] 2xl:h-[60vh]  row-start-2 md:row-start-1 mt-24  md:-mt-96 2xl:mt-32 lg:ml-[2em] 2xl:ml-[20rem]"> */}
// 				<div className="project-media col-span-12 md:col-span-6 2xl:col-span-6 flex justify-center items-center relative md:h-[100vh] xl:h-[100vh] 2xl:h-[60vh] row-start-2 md:row-start-1 mt-24 md:-mt-96 md-landscape:mt-10 2xl:mt-32 lg:ml-[2em] 2xl:ml-[20rem]">

//           {/* Map through images and position them */}
// 					{images.map((image, index) => {
// 						const isActive = index === activeIndex;
// 						const isLeft =
// 							index === (activeIndex - 1 + images.length) % images.length;
// 						const isRight = index === (activeIndex + 1) % images.length;

// 						return (
// 							<img
// 								key={index}
// 								src={image.src}
// 								alt={image.alt}
// 								className={`absolute 2xl:-ml-128 lg:-mt-96 xl:mt-2 transition-transform transform duration-1000 ease-in-out
//                    ${isActive ? "scale-150 z-30" : "opacity-50"}
//                    ${
// 											isLeft
// 												? "translate-x-[-100px] md:translate-x-[-80px] lg:translate-x-[-200px] xl:translate-x-[-220px] 2xl:translate-x-[-250px] z-20"
// 												: ""
// 										}
//                    ${
// 											isRight
// 												? "translate-x-[100px] md:translate-x-[80px] lg:translate-x-[200px] xl:translate-x-[220px] 2xl:translate-x-[250px] z-20"
// 												: ""
// 										}
//                 `}
// 								style={{
// 									width: isActive ? "50%" : "40%",
// 									maxHeight: "80vh",
// 									cursor: "pointer",
// 									objectFit: "cover",
// 								}}
// 								onMouseEnter={() => handleHover(index)}
// 							/>
// 						);
// 					})}
// 				</div>

// 				{/* Empty column for margins */}
// 				<div className="hidden xl:block xl:col-span-1"></div>
// 			</div>
// 		</div>
// 	);
// };

// export default Project2;

import React, { useState } from "react";
import GitHub_logo from "../assets/github_logo.png";
import Link_logo from "../assets/Link_logo.png";
import Img2 from "../assets/mobil_proj2.svg";
import Img1 from "../assets/laptop_proj2.svg";
import Img3 from "../assets/tablet_proj2.svg";

const Project2 = () => {
	const [activeIndex, setActiveIndex] = useState(1); // Track the center image index

	// Images array to manage the slider
	const images = [
		{ src: Img1, alt: "Phone image" },
		{ src: Img2, alt: "Laptop image" },
		{ src: Img3, alt: "Tablet image" },
	];

	// Function to handle hover and set the active image
	const handleHover = (index) => {
		setActiveIndex(index);
	};

	return (
		<div className="ml-5 lg:ml-[0.75em] section-container grid grid-cols-12  md:-mb-10 2xl:mb-5">
			{/* Main Content Grid */}
			<div className="col-span-12 xl:col-span-12 md:col-start-1 grid grid-cols-12 grid-rows-[auto] gap-y-10 2xl:ml-40">
				{/* Empty column for margins */}
				<div className="hidden 2xl:block 2xl:col-span-1"></div>

				{/* Text Section */}
				<div className="project-text col-span-12 md:col-span-6 lg:col-span-5 xl:pt-12 2xl:pt-28 row-start-1">
					<h1 className="text-3xl font-bold mb-4 text-left 2xl:text-5xl">
						Donut e-commerce
					</h1>

					<div className="flex flex-col text-left">
						<p className="md:text-sm xl:text-lg 2xl:text-2xl xl:leading-6 2xl:leading-8 text-justify 2xl:mt-10">
							This online store application allows users to browse the menu,
							search for items by category, and add products to their shopping
							cart. Upon registering, users can access their personalized cart
							with product recommendations tailored to their preferences.
						</p>
						<br />
						<div className="app-features text-left 2xl:text-2xl">
							<p className="md:text-sm font-bold xl:text-lg 2xl:text-2xl">
								{" "}
								• Full-stack app
							</p>
							<p className="md:text-sm xl:text-lg 2xl:text-2xl text-justify">
								• <span className="font-bold">noSql Database (MongoDB)</span>{" "}
								for scalable and flexible data storage
							</p>
							<p className="md:text-sm xl:text-lg 2xl:text-2xl text-justify">
								• State management powered by{" "}
								<span className="font-bold">Redux</span> for efficient and
								responsive user interaction
							</p>
							<p className="md:text-sm xl:text-lg 2xl:text-2xl text-justify">
								• <span className="font-bold">JWT</span> token-based
								authentication for secure user login and session management
							</p>
							<p className="md:text-sm xl:text-lg 2xl:text-2xl">
								{" "}
								• Dynamic product recommendations and personalized shopping cart
							</p>
							<p className="md:text-sm xl:text-lg 2xl:text-2xl">
								{" "}
								• Responsive Design
							</p>
						</div>
						<br />
					</div>

					{/* Logos Section */}
					<div className="logos-container mt-4 flex space-x-4">
						<a
							href="https://github.com/Ruthstring"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={GitHub_logo}
								className="max-w-[50px] max-h-[50px] xl:w-[45px] 2xl:w-[70px] hover:shadow-custom-blue hover:rounded-full hover:scale-110"
								alt="GitHub Logo"
							/>
						</a>
						<a
							href="https://donutstore-e-commerce.netlify.app/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={Link_logo}
								className="max-w-[50px] max-h-[50px] xl:w-[45px] 2xl:w-[70px] hover:shadow-custom-blue hover:rounded-full hover:scale-110"
								alt="Link Logo"
							/>
						</a>
					</div>
				</div>

				{/* Slider Section */}
				<div className="project-media col-span-12 md:col-span-6 2xl:col-span-6 flex justify-center items-center relative min-h-[300px] md:min-h-[700px] lg:min-h-[750px] xl:min-h-[800px] 2xl:h-[60vh] row-start-2 md:row-start-1  lg:ml-[2em]  2xl:ml-[3.5rem] mt-[0rem] 2xl:mt-32">
					{images.map((image, index) => {
						const isActive = index === activeIndex;
						const isLeft =
							index === (activeIndex - 1 + images.length) % images.length;
						const isRight = index === (activeIndex + 1) % images.length;

						return (
							<img
								key={index}
								src={image.src}
								alt={image.alt}
								className={`absolute transition-transform transform duration-1000 ease-in-out
									${isActive ? "scale-150 z-30" : "opacity-50"}
									${
										isLeft
											? "translate-x-[-100px] md:translate-x-[-80px] lg:translate-x-[-200px] xl:translate-x-[-220px] 2xl:translate-x-[-250px] z-20"
											: ""
									}
									${
										isRight
											? "translate-x-[100px] md:translate-x-[80px] lg:translate-x-[200px] xl:translate-x-[220px] 2xl:translate-x-[250px] z-20"
											: ""
									}
								`}
								style={{
									width: isActive ? "50%" : "40%",
									maxHeight: "80vh",
									cursor: "pointer",
									objectFit: "cover",
								}}
								onMouseEnter={() => handleHover(index)}
							/>
						);
					})}
				</div>

				{/* Empty column for margins */}
				<div className="hidden xl:block xl:col-span-1"></div>
			</div>
		</div>
	);
};

export default Project2;
