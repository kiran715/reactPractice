import Child from "./Child";

const Parent = () => {
    const details = [
        {
            name: "John Doe",
            age: 30,
            profession: "Full Stack Developer",
            picture:
                "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=",
        },
        {
            name: "Steve Jobs",
            age: 30,
            profession: "CEO",
            picture:
                "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=",
        },
    ];

    return (
        <div>
            <h1>This is parent component</h1>
            <Child details={details} />
        </div>
    );
};

export default Parent;
