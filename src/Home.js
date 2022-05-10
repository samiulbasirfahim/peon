import React from "react"
import { auth } from "./firebase.init"
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth"
import { PacmanLoader } from "react-spinners"
import Chat from "./Chat"

const Home = () => {
	const [user, loading] = useAuthState(auth)
	const [signInWithGoogle] = useSignInWithGoogle(auth)

	if (loading) {
		return (
			<section className="h-screen w-screen flex justify-center items-center">
				<PacmanLoader speedMultiplier={5} />
			</section>
		)
	}

	if (!user) {
		return (
			<section className="h-screen w-screen flex justify-center items-center">
				<button onClick={() => signInWithGoogle()} class="btn btn-wide">
					Continue with google
				</button>
			</section>
		)
	}

	return <Chat />
}

export default Home
