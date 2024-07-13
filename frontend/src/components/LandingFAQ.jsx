import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const faqList = [
	{
		isActive: true,
		question: "What is a SaaS boilerplate?",
		answer:
			"A SaaS boilerplate, also known as a starter kit, is a pre-built foundation for a SaaS application. It helps developers save time by eliminating the need to build every aspect of the application from scratch—instead starting with a lot of things already built, and adding their specific application logic on top of that.",
	},
	{
		isActive: false,
		question: "When should I use a SaaS boilerplate?",
		answer:
			"A SaaS boilerplate is useful when you want to accelerate the development of your SaaS application. It is particularly beneficial if you need to implement common functionalities like user accounts, billing systems, and deployment support quickly.",
	},
	{
		isActive: false,
		question: "How do I choose the right SaaS boilerplate?",
		answer:
			"To choose the right SaaS boilerplate, start by selecting your preferred tech stack. Then, evaluate the available boilerplates for that stack based on quality indicators such as social proof, project history, documentation, and the credibility of the project's creator(s).",
	},
	{
		isActive: false,
		question: "What are the benefits of using a SaaS boilerplate?",
		answer:
			"The main benefits include faster development time, battle-tested code, best practices, consistency, ease of learning for less experienced developers, and access to additional resources like documentation and community support.",
	},
	{
		isActive: false,
		question: "What are the drawbacks of using a SaaS boilerplate?",
		answer:
			"Drawbacks include potential inflexibility, added complexity, and the possibility of not fully understanding the underlying code. There's also the risk of choosing a low-quality boilerplate, which can lead to unscalable or problematic code.",
	},
	{
		isActive: false,
		question: "Can I customize a SaaS boilerplate?",
		answer:
			"Yes, most SaaS boilerplates can be customized to fit your specific needs. Some boilerplates even allow you to enable or disable certain features and choose different technologies before you download the code.",
	},
	{
		isActive: false,
		question: "Are SaaS boilerplates free or paid?",
		answer:
			"SaaS boilerplates can be either free/open-source or paid. Paid boilerplates often offer additional benefits like support and access to a private community of developers.",
	},
];


const FaqItem = ({ faq }) => {
	const [isOpen, setIsOpen] = useState(faq.isActive);

	const toggleFaq = () => setIsOpen(!isOpen);

	return (
		<div className={`${isOpen && "active"} rounded-lg mt-6`}>
			<a
				href="#!"
				className="btn p-4 lg:p-6 w-full text-start flex justify-between items-center cursor-pointer"
				onClick={toggleFaq}
			>
				<span>{faq.question}</span>
				<FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
			</a>
			<div
				className={`${
					isOpen ? "block" : "hidden"
				} p-4 lg:p-6 bg-white shadow rounded-xl`}
			>
				<p className="text-black opacity-60">{faq.answer}</p>
			</div>
		</div>
	);
};

FaqItem.propTypes = {
	faq: PropTypes.object.isRequired,
};

const LandingFAQ = () => {
	return (
		<section className="ezy__faq4 light py-14 md:py-24 bg-black text-white">
			<div className="container px-16 md:px-8 lg:px-28">
				<div className="grid grid-cols-12 justify-center md:mb-6">
					<div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:px-12 text-center">
						<h2 className="font-bold text-[25px] md:text-[45px] leading-none mb-4">
							Frequently Asked Questions
						</h2>
						<p className="">
							It’s easier to reach your savings goals when you have the right
							savings account. Take a look and find the right one for you!
						</p>
					</div>
				</div>

				<div className="grid grid-cols-12 gap-0 md:gap-6">
					<div className="col-span-12 md:col-span-8 md:col-start-3">
						{faqList.slice(0, 5).map((faq, i) => (
							<FaqItem faq={faq} key={i} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default LandingFAQ