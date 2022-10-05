import "./category-menu.styles.scss";
import CategoryItem from "../category-item/categoryItem.component";

function CategoryMenu({ categories }) {
  return (
    <div className="categories-container">
      {categories.map(({ id, title, image }) => (
        <CategoryItem id={id} title={title} key={id} image={image} />
      ))}
    </div>
  );
}

export default CategoryMenu;
