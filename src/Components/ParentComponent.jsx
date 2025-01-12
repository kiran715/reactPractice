import ProfileCard from "./ProfileCard";

const ParentComponent = () => {
    const details = [
        {
            id: 1,
            name: "John",
            age: 20,
            profession: "Full stack developer",
            profilePic:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIEd2zxEc_4IQ1jHyniHLECu15zRjkHTBJzA&s",
        },
        {
            id: 2,
            name: "Robert",
            age: 28,
            profession: "Software Engineer",
            profilePic:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_qdjOz3Yd0X_dV97PD6hK86tnoG5NTxCSUQ&s",
        },
        {
            id: 3,
            name: "Albert",
            age: 35,
            profession: "Senior Software Developer",
            profilePic:
                "https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg=",
        },
    ];

    return (
        <div>
            <ProfileCard profileInfo={details}></ProfileCard>
        </div>
    );
};

export default ParentComponent;
