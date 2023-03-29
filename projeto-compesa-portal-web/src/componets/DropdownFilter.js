const DropdownFilter = ({ options }) => {
  return (
    <>
      <select
        className="form-select"
        aria-label="Default select example"
        defaultValue={0}
      >
        {options?.map((option, index) => {
          return (
            <option key={index} value={index}>
              {option}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default DropdownFilter;
