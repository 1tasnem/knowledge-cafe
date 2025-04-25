
import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookmarks ,readingTime}) => {
    return (
        <div className="w-1/3 bg-gray-300 ml-2 pt-4">
            <div>
                <h3 className="text-4xl ">Reading Time:{readingTime}</h3>
            </div>
            <h2 className="text-3xl text-center bg-gray-300 ml-4 mt-2 pt-4">BookMarks Blog:{bookmarks.length}</h2>
            {bookmarks.map((bookmark,idx) => (
      <Bookmark key={idx} bookmark={bookmark} />
    ))}
        </div>
    );
};
Bookmarks.propTypes = {
bookmarks: PropTypes.array,
readingTime:PropTypes.number,
}
export default Bookmarks;