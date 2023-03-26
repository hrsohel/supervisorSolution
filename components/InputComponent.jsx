import React from 'react';

const InputComponent= ({
	label,
	placeholder = '',
	children,
	type = 'text',
	parentClasses="",
	...rest
}) => {
	return (
		<div className={`relative pb-4 ${parentClasses}`}>
			{label && (
				<label
					htmlFor={label}
					className='block mb-1 text-base font-medium text-[#222222] '
				>
					{label}
				</label>
			)}
			<input
				{...rest}
				type={type}
				id={label}
				className='block w-full rounded-lg border border-[#c1c1c1] focus:border-transparent p-2 text-sm text-[#222222] transition duration-300 focus:outline-none focus:ring-1  focus:ring-blue-400'
				placeholder={placeholder}
			/>
			{children}
		</div>
	);
};

export default InputComponent;