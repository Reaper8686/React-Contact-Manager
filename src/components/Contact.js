import ContactIn from "./ContactIn";

function Contact(props){
    return (
        <div className="shadow-sm p-3 mb-5 bg-body rounded">
            <h2 className="mt-3 mb-3">Contact Info</h2>
            {props.data.map((value) => {
                 return <ContactIn id = {value.id} name={value.name} email={value.email} remove={props.remove}></ContactIn>
            })}
        </div>
    );
}

export default Contact;