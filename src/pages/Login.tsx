import { LoginForm } from "../components/login-form"

const Login = ({ setIsLoggedIn }: any) => {
    return (
        <div className="flex items-center justify-center min-h-screen p-10">
            <div className="max-w-4xl w-full">
                <LoginForm setIsLoggedIn={setIsLoggedIn} />
            </div>
        </div>
    )
}

export default Login
