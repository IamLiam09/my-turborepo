import { Button } from "ui";
import Image from "next/image";
import helpimg from "../public/images/helper.jpg";
import helpimgen from "../public/images/helperen.jpg";
export default function Web() {
	return (
		<div>
			<nav className="bg-white flex items-center justify-evenly py-6">
				<h1 className="font-bold text-5xl">Helper</h1>
				<div>
					<a href="" className="py-8 px-8 hover:underline-offset-2">
						Home
					</a>
					<a href="" className="py-8 px-8">
						Blog
					</a>
					<a href="" className="py-8 px-8">
						About us
					</a>
					<a href="" className="py-8 px-8">
						Contact us
					</a>
				</div>
				<div className=" py-4 px-6 bg-cyan-500 flex items-center justify-center rounded-3xl">
					<a
						href="#"
						className="flex flex-row justify-center items-center gap-1"
					>
						Download
						<div>
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M13.75 13.75C13.75 14.1642 13.4142 14.5 13 14.5L3 14.5C2.58579 14.5 2.25 14.1642 2.25 13.75C2.25 13.3358 2.58579 13 3 13L13 13C13.4142 13 13.75 13.3358 13.75 13.75Z"
									fill="currentColor"
								></path>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M8.7487 2C8.7487 1.58579 8.41291 1.25 7.9987 1.25C7.58448 1.25 7.2487 1.58579 7.2487 2L7.2487 9.53955L3.19233 5.51449C2.89831 5.22274 2.42344 5.22458 2.13168 5.5186C1.83993 5.81263 1.84177 6.2875 2.13579 6.57925L7.46912 11.8714C7.76154 12.1616 8.23325 12.1616 8.52567 11.8714L13.859 6.57926C14.153 6.2875 14.1549 5.81263 13.8631 5.5186C13.5714 5.22458 13.0965 5.22274 12.8025 5.51449L8.7487 9.53697L8.7487 2Z"
									fill="currentColor"
								></path>
							</svg>
						</div>
					</a>
				</div>
			</nav>
			<section>
				<Image
					src={helpimgen}
					alt={"helpingimg"}
					layout="fill"
					objectFit="cover"
          className="z-10"
				/>
				<h4>Let an helping hand to those in need</h4>
				<div className=" w-32 py-4 px-6 bg-cyan-500 flex items-center justify-center rounded-3xl">
					<a
						href="#"
						className="flex flex-row justify-center items-center gap-1"
					>
						Download
						<div>
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M13.75 13.75C13.75 14.1642 13.4142 14.5 13 14.5L3 14.5C2.58579 14.5 2.25 14.1642 2.25 13.75C2.25 13.3358 2.58579 13 3 13L13 13C13.4142 13 13.75 13.3358 13.75 13.75Z"
									fill="currentColor"
								></path>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M8.7487 2C8.7487 1.58579 8.41291 1.25 7.9987 1.25C7.58448 1.25 7.2487 1.58579 7.2487 2L7.2487 9.53955L3.19233 5.51449C2.89831 5.22274 2.42344 5.22458 2.13168 5.5186C1.83993 5.81263 1.84177 6.2875 2.13579 6.57925L7.46912 11.8714C7.76154 12.1616 8.23325 12.1616 8.52567 11.8714L13.859 6.57926C14.153 6.2875 14.1549 5.81263 13.8631 5.5186C13.5714 5.22458 13.0965 5.22274 12.8025 5.51449L8.7487 9.53697L8.7487 2Z"
									fill="currentColor"
								></path>
							</svg>
						</div>
					</a>
				</div>
			</section>
			<footer className="bg-black flex">
				<div>
					<h1 className="font-bold text-5xl">Blue</h1>
					<div>
						<a href="" className="py-8 px-8 text-white">
							Home
						</a>
						<a href="" className="py-8 px-8 text-white">
							Blog
						</a>
						<a href="" className="py-8 px-8 text-white">
							About us
						</a>
						<a href="" className="py-8 px-8 text-white">
							Contact us
						</a>
					</div>
					<div className=" py-4 px-6 bg-cyan-500 flex items-center justify-center rounded-3xl">
						<a href="#">
							Download
							<div>
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M13.75 13.75C13.75 14.1642 13.4142 14.5 13 14.5L3 14.5C2.58579 14.5 2.25 14.1642 2.25 13.75C2.25 13.3358 2.58579 13 3 13L13 13C13.4142 13 13.75 13.3358 13.75 13.75Z"
										fill="currentColor"
									></path>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M8.7487 2C8.7487 1.58579 8.41291 1.25 7.9987 1.25C7.58448 1.25 7.2487 1.58579 7.2487 2L7.2487 9.53955L3.19233 5.51449C2.89831 5.22274 2.42344 5.22458 2.13168 5.5186C1.83993 5.81263 1.84177 6.2875 2.13579 6.57925L7.46912 11.8714C7.76154 12.1616 8.23325 12.1616 8.52567 11.8714L13.859 6.57926C14.153 6.2875 14.1549 5.81263 13.8631 5.5186C13.5714 5.22458 13.0965 5.22274 12.8025 5.51449L8.7487 9.53697L8.7487 2Z"
										fill="currentColor"
									></path>
								</svg>
							</div>
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}
