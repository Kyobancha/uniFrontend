import { Button } from "react-bootstrap"

function submit() {
    console.log("Submit-button pressed")
}

function Form() {
    return (
        <form onSubmit={submit} className="flex flex-col items-center">
            <div className="flex flex-col w-96">
                <label>Name:</label>
                <input className="border-2 rounded"/>
            </div>
            <div className="flex flex-col w-96 mt-3">
                <label>E-Mail-Address:</label>
                <input className="border-2 rounded"/>
            </div>
            <div className="flex flex-col w-96 mt-3">
                <label>Message:</label>
                <textarea className="h-32 border-2 rounded"></textarea>
                <Button className="self-end  mt-2">Submit</Button>
            </div>
        </form>)
}

// render() {
//     const { name, job } = this.state;
//     return (
//         <form>
//             <label htmlFor="name">Name</label>
//             <input type="text" name="name" id="name" value={name}
//                 onChange={this.handleChange} />
//             <label htmlFor="job">Job</label>
//             <input type="text„ name=" job„ id="job„ value={job}
//             onChange={this.handleChange} />
//         </form>
//     );
// }

export default Form