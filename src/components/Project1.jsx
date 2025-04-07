import React, { useState, useEffect } from "react";
import GitHub_logo from "../assets/github_logo.png";
import Link_logo from "../assets/Link_logo.png";
import Img1 from "../assets/mobil_project1.svg";
import Img2 from "../assets/map_project1.svg";

const Project1 = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div id="projects" className="section-container grid grid-cols-12">
			{/* Main Content Grid */}
			<div className="col-span-12 xl:col-span-12 md:col-start-1 grid grid-cols-12 ">
				{/* Empty column for margins */}
				<div className="hidden 2xl:block 2xl:col-span-1"></div>

				{/* Project Text (first 4 columns) */}
				<div className="project-text col-span-12 md:col-span-6 lg:col-span-5 pb-3 md:col-start-1 lg:ml-[2em] xl:mr-[2em] 2xl:mr-[3.5em]">
					<h1 className="text-3xl xl:mt-20 2xl:mt-32 font-bold mb-4 text-left 2xl:text-5xl">
						LoveTravel App
					</h1>
					<div className="flex flex-col text-left">
						<p className="md:text-sm xl:text-lg 2xl:text-2xl xl:leading-6 2xl:mt-10 2xl:leading-8 text-justify">
							This app allows users to search for countries, getting their Alpha
							codes from an API and filtering them, ensuring no duplicates are
							added to their profiles. Users can also store and update images,
							and change country categories dynamically, with all updates
							reflected in real-time within the database. <br /> One of the
							standout features is the ability to create a personalized world
							map using a color picker, allowing users to customize country
							colors. These customizations can be saved, and users can download
							their maps as PDF files for offline use.
						</p>
						<br />
						<div className="app-features text-left 2xl:text-2xl">
							<p className="md:text-sm font-bold xl:text-lg 2xl:text-2xl">
								{" "}
								• Full-stack application{" "}
							</p>
							<p className="md:text-sm xl:text-lg 2xl:text-2xl">
								{" "}
								• <span className="font-bold">SQL Database</span>
							</p>
							<p className="md:text-sm xl:text-lg 2xl:text-2xl">
								{" "}
								• <span className="font-bold">RESTful API</span>
							</p>
							<p className="md:text-sm xl:text-lg 2xl:text-2xl">
								{" "}
								• Integrated <span className="font-bold">
									PDF generator
								</span>{" "}
								for exporting custom maps
							</p>
							<p className="md:text-sm xl:text-lg 2xl:text-2xl">
								{" "}
								• <span className="font-bold">SVG integration</span> for dynamic
								and interactive map rendering
							</p>
						</div>
						<br />
					</div>

					{/* Logos/Links Section */}
					<div className="logos-container mt-4 flex space-x-4">
						<a
							href="https://github.com/Ruthstring"
							className="text-blue-500 underline"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={GitHub_logo}
								className="max-w-[50px] max-h-[50px] xl:w-[45px] 2xl:w-[70px] hover:shadow-custom-blue hover:rounded-full hover:scale-110"
								alt="GitHub Logo"
							/>
						</a>
						{/* <a href="https://your-link.com" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
              <img
                src={Link_logo}
                className="max-w-[50px] max-h-[50px] xl:w-[45px] hover:shadow-custom-blue hover:rounded-full hover:scale-110"
                alt="Link Logo"
              />
            </a> */}
					</div>
				</div>

				{/* Image Section (next 6 columns) */}
				<div className="w-full col-span-12 2xl:mt-24 lg:-mt-12 xl:mt-12 md:col-span-5 md:ml-20 ml-5 lg:ml-[0.75em]  lg:col-start-7 2xl:col-start-8 xl:col-start-7 lg:col-span-6 2xl:col-span-5">
					<div className="relative w-full h-auto">
						<div>
							{/* Map Image */}
							<img
								src={Img2}
								alt="Image Map"
								className="w-[90%] md:w-[100%] pr-3 z-10 relative transition-transform duration-500 ease-in-out hover:scale-110 hover:z-40"
							/>
						</div>
						<div>
							{/* Phone Image */}
							<img
								src={Img1}
								alt="Image Mobile"
								className="absolute w-52 md:w-[60%] 2xl:w-[50%] 2xl:ml-36 -bottom-6 md:ml-10 xl:-ml-10 left-60 md:-left-36 -ml-16 2xl:mt-8 lg:pb-28 2xl:pb-48 2xl:-left-96 transform z-20 transition-transform duration-500 ease-in-out hover:scale-125 hover:z-50"
							/>
						</div>
					</div>
				</div>

				{/* Empty column for margins */}
				<div className="hidden xl:block xl:col-span-1"></div>
			</div>
		</div>
	);
};

export default Project1;
