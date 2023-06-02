import "./Category.scss";
import { useNavigate } from "react-router-dom";
import CATEGORY from "../../../utils/constants";

const Category = ({ categories }) => {
  const navigate = useNavigate();
  // console.log("###", categories.data);
  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories?.data?.map((item) => (
          <div
            key={item?.id}
            className="category"
            onClick={() => navigate(`/category/${item.id}`)}
          >
            <img
              src={
                // process.env.REACT_APP_DEV_URL +
                item?.attributes?.img?.data?.attributes?.url
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
