import '../../index.css'

type ICategoriesParams = {
  value: number;
  onClickCategory: (i: number) => void;
}

const Categories = ({ value, onClickCategory }: ICategoriesParams) => {
  const categories = [
    'All',
    'Romance',
    'Drama',
    'Fantastic',
    'Thriller',
    'Crime',
    'Horror'
  ];
  return (
    <div className="categories">
      <ul className="movies-select__wrapper">
        {
          categories.map((categoryName, i) => (
            <li key={categoryName} onClick={() => onClickCategory(i)}
              className={value === i ? 'active' : ''}>
              {categoryName}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Categories;