export const Input = ({inputValue, setInputValue}) => {

    const resetValue = "";
    const onInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value)
    }

    return (
        <input type="text" value={inputValue} onChange={onInputChange} onFocus={(e) => e.target.value = resetValue}/>
    )
}