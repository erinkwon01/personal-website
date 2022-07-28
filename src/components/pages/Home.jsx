import React from "react";
import erinPic from "../images/erinProfilePicture.jpg";

function Home() {

    return (
        <div className="home">
            <table cellspacing="20">
                <tr>
                    <td><img src={erinPic} width="230" height="300" alt="Erin Profile" /></td>
                    <td>
                        <h2>my name is</h2>
                        <h1 id="name">erin kwon</h1>
                        <p>welcome to my website &#9999;</p>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default Home;