
const Category = ({id, src, title, onClick, active, onClickToggle}) => {
  return (
    <div className={active ? "category active" : "category"} >
      <div className="category-item">
        <img src={src} alt="." className="category-icon" />
        <span>{title}</span>
        <div className="action-scope" onClick={onClick} data-id={id} data-title={title}></div>
      </div>
      <div className="category-item-selection">
        <div className="dot">
          <div className="panel-action-scope" onClick={onClickToggle} data-id={id} data-title={title}></div>
          </div>
      </div>
    </div>
  )
}

export const CategoryCollection = ({ categories, onClick, onClickToggle }) => {
  const nowCategoryId = localStorage.getItem('nowCategoryId')
  const listItems = categories.map(category => {
    return (
      <Category key={category.id}
        id={category.id}
        src={category.src}
        title={category.title}
        active={category.id === Number(nowCategoryId) ? true : false}
        onClick={onClick}
        onClickToggle={onClickToggle}
      />
    )
  }
  )
  return listItems
}