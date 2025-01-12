const Child = ({ details }) => {
    return (
        <div className="flex h-screen gap-8">
            {details.map((info) => {
                return (
                    <div className="border-2">
                        <div>
                            <img src={info.picture} alt="" />
                        </div>
                        <div>
                            <h2>Name : {info.name}</h2>
                            <h3>Profession : {info.profession}</h3>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Child;
