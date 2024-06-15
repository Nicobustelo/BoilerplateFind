import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFire,
	faClock,
	faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const features = [
    {
        icon: faFire,
        title: "Hot",
        description:
            "Browse through the hottest boilerplates. Discover trending projects that are currently gaining traction.",
    },
    {
        icon: faTrophy,
        title: "Top",
        description:
            "Explore the top-rated boilerplates. Find high-quality projects that are highly regarded by the community.",
    },
    {
        icon: faClock,
        title: "New",
        description:
            "Discover the newest boilerplates recently added to the platform. Stay up-to-date with the latest projects and technologies.",
    },
];


const FeatureItem = ({ feature }) => {
	return (
		<div className="rounded-[20px] bg-white relative p-6 pt-12 lg:p-12 ml-6 h-full">
			<div className="w-[74px] h-[74px] bg-white text-yellow-400 rounded-full text-[32px] inline-flex items-center justify-center mb-6 absolute left-0 top-0 -m-6">
				<i className="fas fa-cannabis"></i>
				<FontAwesomeIcon icon={feature.icon} />
			</div>
			<h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
			<p className="opacity-90">{feature.description}</p>
		</div>
	);
};

FeatureItem.propTypes = {
	feature: PropTypes.object.isRequired,
};

const FeaturesSection = () => {
	return (
		<section className="ezy__featured2 light py-14 md:py-24 bg-black text-white">
			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-12 mb-12">
					<div className="col-span-12 lg:col-span-5">
						<h2 className="text-[25px] md:text-[45px] leading-none font-bold mb-6">
							Leaderboards
						</h2>
					</div>
					{/* <div className="col-span-12 lg:col-span-5 lg:col-start-8 xl:col-span-4 xl:col-start-9">
						<p className="text-lg leading-6 mb-6">
							Assumenda non repellendus distinctio nihil dicta sapiente,
							quibusdam maiores, illum at, aliquid blanditiis eligendi qui.
						</p>
					</div> */}
				</div>
				<div className="grid grid-cols-12 gap-y-6 md:gap-x-6  text-black">
					{features.map((feature, i) => (
						<div className="col-span-12 md:col-span-4" key={i}>
							<FeatureItem feature={feature} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FeaturesSection