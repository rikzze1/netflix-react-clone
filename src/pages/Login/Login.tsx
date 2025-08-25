const Login = () => {
    return (
        <div className="login">
            <h1 className="login__header">Who's whatching?</h1>
            <div className="login__profile">
                <div className="profile">
                    <img src="" alt="your profile" />
                    <h4>You</h4>
                </div>
                <div className="profile--kids">
                    <img src="" alt="kids profile" />
                    <h4>Kids</h4>
                </div>
                <div className="profile--add"></div>
            </div>
            <button className="button-profiles">Manage Profiles</button>
        </div>
    )
}

export default Login;