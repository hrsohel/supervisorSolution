const ImageInput= ({
	setImage,
	isNeedBase64 = false,
	...rest
}) => {
	const handleInputImage = (e) => {
		// console.log(e.target.files)
		const imgFile = e.target.files.length > 0 && e.target.files[0];
		if (!isNeedBase64) {
			console.log('no need of base64');
			setImage(imgFile);
		} else {
			console.log('in need of base64');

			var reader = new FileReader();
			reader.onloadend = function () {
				setImage(reader.result);
				// console.log('RESULT', reader.result)
			};
			reader.readAsDataURL(imgFile);
		}
	};
	return (
		<input
			{...rest}
			className='-indent-[999px] cursor-pointer absolute inline opacity-0 w-full h-full inset-0'
			type='file'
			name='image'
			id='image'
			onChange={handleInputImage}
		/>
	);
};

export default ImageInput;