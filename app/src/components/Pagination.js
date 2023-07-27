import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
	const visiblePages = [];
	const maxVisiblePages = 5;
	const ellipsis = <span className='mx-2'>...</span>;

	if (totalPages <= maxVisiblePages) {
		visiblePages.push(...Array.from({ length: totalPages }, (_, i) => i + 1));
	} else if (currentPage <= maxVisiblePages - 2) {
		visiblePages.push(
			...Array.from({ length: maxVisiblePages - 1 }, (_, i) => i + 1)
		);
		visiblePages.push(ellipsis);
		visiblePages.push(totalPages);
	} else if (currentPage >= totalPages - maxVisiblePages + 3) {
		visiblePages.push(1);
		visiblePages.push(ellipsis);
		visiblePages.push(
			...Array.from(
				{ length: maxVisiblePages - 1 },
				(_, i) => totalPages - maxVisiblePages + 2 + i
			)
		);
	} else {
		visiblePages.push(1);
		visiblePages.push(ellipsis);
		visiblePages.push(
			...Array.from({ length: 3 }, (_, i) => currentPage - 1 + i)
		);
		visiblePages.push(ellipsis);
		visiblePages.push(totalPages);
	}

	return (
		<div className='flex justify-center items-center space-x-2'>
			{visiblePages.map((pageNumber) => (
				<button
					key={pageNumber}
					className={`px-3 py-1 rounded-full ${
						pageNumber === currentPage
							? 'bg-blue-500 text-white'
							: 'bg-gray-200 text-gray-700'
					}`}
					onClick={() => onPageChange(pageNumber)}>
					{pageNumber}
				</button>
			))}
		</div>
	);
};

export default Pagination;
