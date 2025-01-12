/* eslint-disable react/prop-types */

import "../index.css";
const ProfileCard = (props) => {
    return (
        <div className="container">
            {props.profileInfo.map((info) => (
                <div key={info.id} className="card">
                    <div className="picture">
                        <img
                            className="image img-fluid"
                            src={info.profilePic}
                            alt={info.profilePic}
                            key={info.profilePic}
                        />
                    </div>
                    <div className="details">
                        <p key={info.name}>{info.name}</p>
                        <p key={info.profession}>{info.profession}</p>
                        <p key={info.age} className="bg-primary">
                            Age : {info.age}
                        </p>
                        <Button variant="primary">Click</Button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProfileCard;
