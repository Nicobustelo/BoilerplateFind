import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/Features';
import LandingFAQ from '../components/LandingFAQ';

export default function Home() {
	return (
		<div className='px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12'>
			<HeroSection />
			<FeaturesSection />
			<LandingFAQ />
		</div>
	);
}
