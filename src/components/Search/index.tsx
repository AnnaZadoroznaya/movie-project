import '../../index.css'
import Cross from '../../assets/img/cross.svg'
import Find from '../../assets/img/find.svg'


interface ISearchParams {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const Search: React.FC<ISearchParams> = ({ searchValue, setSearchValue }) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className='search-cross'>
      <img src={Find} className="find" />
      <input
        value={searchValue}
        onChange={onChange}
        className="search-turn"
        type="search"
        placeholder="Search movies TITLE" />
      {searchValue && <img src={Cross}
        className="cross"
        onClick={() => setSearchValue('')} />}
    </div>
  )
}

export default Search;