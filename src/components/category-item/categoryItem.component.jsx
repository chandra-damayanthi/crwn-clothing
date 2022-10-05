import "./category-item.styles.scss";

function CategoryItem({ title, image, id }) {
  return (
    <div className="category-container" key={id}>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="background-image"
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop</p>
      </div>
    </div>
  );
}

export default CategoryItem;
