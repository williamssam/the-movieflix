import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signOut,
	signInWithRedirect,
} from 'firebase/auth'
import { auth } from 'utils/firebase-init'

export const registerUser = (email, password) => {
	return createUserWithEmailAndPassword(auth, email, password)
}

export const loginUser = (email, password) => {
	return signInWithEmailAndPassword(auth, email, password)
}

export const loginUserWithGoogle = () => {
	const provider = new GoogleAuthProvider()
	return signInWithRedirect(auth, provider)
}

export const logoutUser = () => {
	return signOut(auth)
}
