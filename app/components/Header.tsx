import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from '@remix-run/react';
import Navbar from './Navbar';
import Breadcrumbs from './Breadcrumbs';
import type { VideoSrcConfig } from '~/utils/headerConfig';
import { getHeaderConfig, getNetworkAwareVideoSource } from '~/utils/headerConfig';

const Header = () => {
	const location = useLocation();
	const mainRoutes = ['/', '/events', '/club', '/play', '/links'];
	const isBreadcrumbVisible = !mainRoutes.includes(location.pathname);

	const [videoSource, setVideoSource] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const headerConfig = getHeaderConfig(location.pathname);

	const videoRef = useRef<HTMLVideoElement>(null);
	const imgRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		if (headerConfig && headerConfig.type === 'video') {
			const qualitySource = getNetworkAwareVideoSource(headerConfig.src as VideoSrcConfig);
			setVideoSource(qualitySource);
			setIsLoading(true);
		} else {
			setIsLoading(false); // Set loading to false for non-video headers
		}
	}, [location.pathname, headerConfig]);

	useEffect(() => {
		if (videoRef.current && videoSource) {
			const handleLoad = () => {
				setIsLoading(false);
			};

			videoRef.current.addEventListener('loadeddata', handleLoad);

			return () => {
				videoRef.current?.removeEventListener('loadeddata', handleLoad);
			};
		}
	}, [videoSource]);

	return (
		<>
			<Navbar />
			<section
				className={`relative m-0 w-full overflow-hidden sm:mt-8 ${isBreadcrumbVisible ? 'sm:rounded-t-lg' : 'sm:rounded-lg'}`}>
				{headerConfig?.type === 'video' && (
					<>
						{isLoading && headerConfig.fallback && (
							<img
								ref={imgRef}
								alt="Fallback"
								className="absolute inset-0 z-10 w-full object-cover object-center"
								src={headerConfig.fallback}
								loading="lazy"
								style={{ aspectRatio: headerConfig.aspectRatio, objectFit: 'cover' }}
							/>
						)}
						{videoSource && (
							<video
								ref={videoRef}
								autoPlay
								loop
								muted
								playsInline
								className={`w-full object-cover object-center ${isLoading ? 'invisible' : 'visible'}`}
								style={{ aspectRatio: headerConfig.aspectRatio, objectFit: 'cover' }}>
								<source src={videoSource} type="video/mp4" />
							</video>
						)}
					</>
				)}
				{headerConfig?.type === 'image' && (
					<img
						alt="Emerald Eagles FC Players"
						className="w-full object-cover object-center"
						height={425}
						src={headerConfig.src as string}
						loading="lazy"
						style={{ aspectRatio: headerConfig.aspectRatio, objectFit: 'cover' }}
						width={1400}
					/>
				)}
			</section>
			{isBreadcrumbVisible && <Breadcrumbs />}
		</>
	);
};

export default Header;
