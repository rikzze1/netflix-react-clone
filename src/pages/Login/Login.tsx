import profile from "@/assets/profile/user.png";
import kidsProfile from "@/assets/profile/kids_profile.png";

import "./Login.scss";

const Login = () => {
    return (
        <div className="login">
            <h1 className="login__header">Who's whatching?</h1>
            <div className="login__profile">
                <div className="profile">
                    <img src={profile} alt="your profile" />
                    <p>You</p>
                </div>
                <div className="profile--kids">
                    <img src={kidsProfile} alt="kids profile" />
                    <p>Kids</p>
                </div>
                <div className="profile--add">
                    <div className="round-container">
                        <span></span>
                    </div>
                    <p>Add Profile</p>
                </div>
            </div>
            <button className="button-profiles">Manage Profiles</button>
        </div>
    )
}

export default Login;