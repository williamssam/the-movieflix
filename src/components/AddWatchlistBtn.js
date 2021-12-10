import { useAuth } from 'hooks/useAuth';
import { toast } from 'react-toastify';
// import { doc, setDoc } from 'firebase/firestore'
import { collection, addDoc } from 'firebase/firestore';
import { db } from 'utils/firebase-init';
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';
import { useState } from 'react';

const override = css`
	display: block;
	margin: 0 auto;
`;

const AddWatchListBtn = ({ title, name, id, vote_average, poster_path }) => {
	const { currentUser } = useAuth();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [addedToWatchlist, setAddedToWatchlist] = useState(false);

	// Addding movie/tvshow to database
	const addToWatchlist = async () => {
		setIsSubmitting(true);
		try {
			await addDoc(collection(db, 'watchlist'), {
				name: title ?? name,
				id,
				vote_average,
				poster_path,
			});
			setIsSubmitting(false);
			toast.info(`${title ?? name} added to your list 👍`);
			setAddedToWatchlist(true);
		} catch (e) {
			console.error('Error adding document: ', e);
		}
	};

	const checkBtnDisabled = () => {
		return !currentUser || isSubmitting === true || addedToWatchlist === true;
	};

	// change button text
	const changeBtnText = () => {
		if (addedToWatchlist) {
			return 'Already in your watchlist';
		} else if (currentUser) {
			return 'Add to watchlist';
		} else {
			return 'Login to add to watchlist';
		}
	};

	return (
		<button
			className='add-btn'
			disabled={checkBtnDisabled() ? true : false}
			onClick={() => addToWatchlist()}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='16'
				height='16'
				viewBox='0 0 24 24'
				fill='currentColor'
				title='bookmark'>
				<path d='M16.999 23V7c0-1.103-.897-2-2-2h-8c-1.103 0-2 .897-2 2v16l6-3.601 6 3.601z'></path>
				<path d='M15.585 3h1.414c1.103 0 2 .897 2 2v10.443l2 2.489V3c0-1.103-.897-2-2-2h-8c-1.103 0-2 .897-2 2h6.586z'></path>
			</svg>
			{isSubmitting ? (
				<ClipLoader
					color='#ffffff'
					loading={isSubmitting}
					css={override}
					size={20}
				/>
			) : (
				<span>{changeBtnText()}</span>
			)}
		</button>
	);
};

export default AddWatchListBtn;
