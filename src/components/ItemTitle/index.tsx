import '../../index.css'

interface IItemTitleParams {
  title: string
}

const ItemTitle = ({ title }: IItemTitleParams) => {
  return (
    <div>
      <h3 className="search-title">{title}</h3>
    </div>
  )
}

export default ItemTitle