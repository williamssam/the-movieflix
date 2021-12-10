import { onAuthStateChanged } from '@firebase/auth';
import { createContext, useEffect, useState } from 'react';
// import { registerUser } from 'services/auth-service'
import { auth } from 'utils/firebase-init';

export const AuthContext = createContext({
	currentUser: null,
});

function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) =>
			setCurrentUser(user)
		);

		return () => unsubscribe();
	}, []);

	const value = {
		currentUser,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
