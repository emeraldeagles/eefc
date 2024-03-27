export const handle = {};

export default function ProductTiles() {
	return (
		<div>
			{' '}
			{/* <!-- Official Teamwear Section --> */}
			<div className="my-6">
				<h2 className="mb-4 text-2xl font-bold">Official Teamwear /</h2>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
					{/* <!-- Repeated Product Item --> */}
					{/* <!-- Repeat this block for each product, changing the details accordingly --> */}
					<div className="overflow-hidden rounded bg-white shadow-lg">
						<img className="w-full" src="https://placehold.co/300x300" alt="A product image of teamwear" />
						<div className="px-6 py-4">
							<div className="mb-2 text-xl font-bold">Product Name</div>
							<p className="text-base text-gray-700">$Price</p>
							<button className="rounded bg-yellow-500 px-4 py-2 font-bold text-white hover:bg-yellow-600">
								Buy Now
							</button>
						</div>
					</div>
					{/* <!-- ... other product items --> */}
				</div>
			</div>
		</div>
	);
}
