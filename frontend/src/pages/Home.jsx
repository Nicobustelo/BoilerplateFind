import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/Features';
import LandingFAQ from '../components/LandingFAQ';

export default function Home() {
	return (
		<div>
			<HeroSection />
			<FeaturesSection />
			<LandingFAQ />
		</div>
	);
}
