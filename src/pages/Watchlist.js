import { db } from 'utils/firebase-init'
import { collection, onSnapshot, doc, deleteDoc } from 'firebase/firestore'

import { useEffect, useState } from 'react'
import Film from 'components/MoviePage/Film'

import 'styles/watchlist.css'

/*
	Renders the current user watchlist from firestore
**/
const Watchlist = () => {
	const [watchlist, setWatchlist] = useState([])

	const deleteMovie = async (id) => {
		await deleteDoc(doc(db, 'watchlist', id))
	}

	useEffect(() => {
		const unsubscribe = onSnapshot(
			collection(db, 'watchlist'),
			(snapshot) => {
				const muq = snapshot.docs.map((doc) => ({
					...doc.data(),
					docId: doc.id,
				}))
				setWatchlist(muq)
			}
		)

		return () => unsubscribe()
	}, [])

	return (
		<main>
			<section className='watchlist'>
				<div className='container'>
					<h3 className='overall-title'>My watchlist (movie/tvshows)</h3>

					{/* {!watchlist && <Loader />} */}
					<section className='movies'>
						{watchlist.map((list) => (
							<div className='list'>
								<Film {...list} />
								<button onClick={() => deleteMovie(list.docId)}>
									Remove
								</button>
							</div>
						))}
					</section>
				</div>
			</section>
		</main>
	)
}

export default Watchlist
