export default function SocialButtons() {
    const styles = {
        image: {
            backgroundImage:
                "url(https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?cs=srgb&dl=pexels-krisof-1252890.jpg&fm=jpg)",
        },
    };
    return (
        <div>
            <div
                className="h-screen bg-no-repeat bg-cover bg-center w-screen flex flex-col items-center justify-center gap-10"
                style={styles.image}>
                <h1 className="text-white text-7xl font-bold">
                    Social Buttons
                </h1>
                <div className="flex gap-12">
                    <button className="bg-orange-300 px-8 py-2 rounded-md shadow-md text-white">
                        Like
                    </button>
                    <button className="bg-white px-8 py-2 rounded-md shadow-md">
                        Comment
                    </button>
                    <button className=" bg-blue-500 px-8 py-2 rounded-md shadow-md text-white">
                        Share
                    </button>
                </div>
            </div>
        </div>
    );
}
