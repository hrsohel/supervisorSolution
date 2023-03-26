import { useRouter } from 'next/router';
import { useEffect } from 'react';

function RedirectComp({ to }) {
	const router = useRouter();

	useEffect(() => {
		router.push(to);
	}, [to]);

	return null;
}
export default RedirectComp;