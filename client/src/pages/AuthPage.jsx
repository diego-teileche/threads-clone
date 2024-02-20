import { useRecoilValue } from "recoil"
import LoginCard from "../components/LoginCard"
import authScreenAtom from "../atoms/authAtom"
import SignupCard from "../components/SignupCard"

const AuthPage = () => {
	const authScreenState = useRecoilValue(authScreenAtom)

	return <>{authScreenState === "login" ? <LoginCard /> : <SignupCard />}</>
}

export default AuthPage
