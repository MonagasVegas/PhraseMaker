import  './index.css'


const SearchBar = ({ value, onChange, placeholder, id = "" }) => {
  return (
    <div  className="input-search">
      <form
        action="#"
        autoComplete="off"
      >
        <input
          name={"search" + id}
          type="search"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete="off"
        />
      </form>
    </div>
  );
};

export default SearchBar;