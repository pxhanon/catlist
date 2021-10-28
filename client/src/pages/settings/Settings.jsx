import { useContext } from "react";
import "./settings.css";

import { Context } from "../../context/Context";

export default function Settings() {

    const { user } = useContext(Context);

    return (
        <>
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsTitleUpdate">Account Settings</span>
                    <span className="settingsTitleDelete">Delete Account</span>
                </div>
                    <form className="settingsForm">
                        <label>Profile Picture</label>
                        <div className="settingsPP">
                            <img
                                src={user.profilePic}
                                alt=""
                            />
                            <label htmlFor="fileInput">
                                <i className="settingsPPIcon far fa-user-circle"></i>{" "}
                            </label>
                            <input
                                id="fileInput"
                                type="file"
                                style={{ display: "none" }}
                                className="settingsPPInput"
                            />
                        </div>
                        <label>Username</label>
                        <input className="inputSettings" type="text" placeholder="Pxhanon" name="name" />
                        <label>Email</label>
                        <input className="inputSettings" type="email" placeholder="pxhanon@gmail.com" name="email" />
                        <label>Password</label>
                        <input className="inputSettings" type="password" placeholder="Password" name="password" />
                        <button className="settingsSubmitButton" type="submit">
                            Update
                        </button>
                    </form>
            </div>
        </div>
        </>
    );
}
