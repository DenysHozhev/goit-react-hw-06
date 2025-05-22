const SearchBox = ({ inputValue, setInputValue }) => {
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search"
      />
      <p>{inputValue}</p>
    </div>
  );
};

export default SearchBox;
