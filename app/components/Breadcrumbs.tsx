// Breadcrumbs.tsx
import { useLocation } from '@remix-run/react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from './ui/breadcrumb';

// Helper function to transform path segments into readable titles
function formatSegment(segment: any) {
	// Simple example: Replace dashes with spaces and capitalize
	return segment.replace(/-/g, ' ').replace(/\w\S*/g, w => w.replace(/^\w/, c => c.toUpperCase()));
}

export default function Breadcrumbs() {
	const location = useLocation();
	const pathnames = location.pathname.split('/').filter(Boolean);

	return (
		<nav className="mx-auto w-full max-w-screen-xl rounded-b-lg border bg-white px-4 py-2 shadow-sm md:px-8 md:py-4">
			<Breadcrumb className="flex flex-wrap">
				<BreadcrumbList className="flex items-center">
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Home</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					{pathnames.map((value, index) => {
						const to = `/${pathnames.slice(0, index + 1).join('/')}`;
						const isLast = index === pathnames.length - 1;
						console.log('debug to & isLast => ', to, isLast);
						const formattedText = formatSegment(value);
						console.log('debug formattedText => ', formattedText, isLast);

						if (!isLast && formattedText !== 'News' && formattedText !== 'Carnivals') {
							return (
								<>
									<BreadcrumbItem key={to}>
										<BreadcrumbLink href={to}>{formattedText}</BreadcrumbLink>
									</BreadcrumbItem>
									<BreadcrumbSeparator />
								</>
							);
						} else {
							return (
								<>
									<BreadcrumbItem key={to}>{formattedText}</BreadcrumbItem>
									{!isLast ? <BreadcrumbSeparator /> : null}
								</>
							);
						}
					})}
				</BreadcrumbList>
			</Breadcrumb>
		</nav>
	);
}
