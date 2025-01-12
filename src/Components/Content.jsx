import { useParams } from "react-router-dom";

const Content = () => {
    const { contentId } = useParams();
    console.log(contentId);
    return (
        <div>
            <footer>this is content Component {contentId}</footer>
        </div>
    );
};

export default Content;
