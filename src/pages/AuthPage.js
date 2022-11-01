import SignUpForm from "../components/SignUpForm"

const AuthPage = (props) => {
    const {setUser} = props
    return(
        <main>
            <h1>Auth Page</h1>
            <SignUpForm setUser={setUser}/>
        </main>
    )
}

export default AuthPage