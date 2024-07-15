function MyForm({name, inputV, setInputV}) {

    const handleInputChange = (event) => {
    setInputV(event.target.value);
    };

    const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputV);
    };
    return (
    <>
    <form onSubmit={handleSubmit} style={{display: 'inline-block', float: 'right',marginTop: '0px', borderRadius:'10px'}}>
        <label htmlFor="numberInput">
        {name}
        <input style={{fontSize: '20px', padding: '5px', height: '30px', width: '220px', paddingTop:'12px', paddingBottom:'12px'}} type="text" value={inputV} onChange={handleInputChange} />
        </label>
 
    </form>
    </>);
}

export default MyForm;