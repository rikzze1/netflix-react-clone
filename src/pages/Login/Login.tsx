import userProfile from "@/assets/profile/user.png";
import userProfile2 from "@/assets/profile/user2.png";
import userProfile3 from "@/assets/profile/user3.png";

import "./Login.scss";

interface Profile {
    path: string;
    label: string;
}

const Login = () => {

    const profiles: Profile[] = [
        {
            path: userProfile,
            label: "You"
        },
        {
            path: userProfile2,
            label: "Not you"
        },
        {
            path: userProfile3,
            label: "Someone"
        },
    ]

    return (
        <div className="login">
            <h1 className="login__header">Who's whatching?</h1>
            <div className="login__profile">
                {profiles.map((item, index) => {
                    return (
                        <div className="profile" key={index} >
                            <img src={item.path} alt={item.label} />
                            <p>{item.label}</p>
                        </div>
                    )
                })}
                <div className="profile">
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