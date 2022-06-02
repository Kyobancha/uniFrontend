function submit(){
    console.log("Submit-button pressed")
}

function Form() {
    return (
    <form onSubmit={submit}>
        <label>Name:</label>
        <input />
        <label>E-Mail-Address:</label>
        <input />
        <label>Message:</label>
        <textarea></textarea>
        <input type="submit"></input>
    </form>)
}

export default Form