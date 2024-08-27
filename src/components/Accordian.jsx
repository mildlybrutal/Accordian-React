import { useState } from "react";
import accordionData from "../constants/mockData";
const Accordian = () => {
	const [toggleExpansion, setToggleExpansion] = useState(null);
	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-4">
			<div className="w-full max-w-md">
				{accordionData.map((section) => (
					<div key={section.id} className="mb-4">
						<button
							onClick={() => {
								setToggleExpansion(
									section.id == toggleExpansion ? null : section.id
								);
							}}
							className="w-full bg-cyan-600 hover:bg-cyan-700 p-4 rounded-xl text-left flex justify-between items-center transition-colors duration-200"
						>
							<span>{section.title}</span>
							<span>{toggleExpansion === section.id ? "🔼" : "🔽"}</span>
						</button>
						{toggleExpansion == section.id && (
							<p className="mt-2 p-4 bg-gray-800 rounded-xl">
								{section.content}
							</p>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Accordian;
