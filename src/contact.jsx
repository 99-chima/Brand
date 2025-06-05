import social from './social.jpeg';
function Contact (){
    const contactSec = {
        background: "#ff4300",
        marginTop: "300px",
        height: "620px",
    };
    const formContact = {
        display: "flex",
        flexDirection: "row",
        columnGap: "80px",
        paddingTop: "50px",
        marginLeft: "80px",
    };
    const nameInput = {
        background: "white", 
        width: "500px",
        height: "40px",
        position: "relative",
        top: "40px",
        padding: "8px",
        border: "1px solid white",
    };
    const contact = {
        color: "white",
        fontSize: "55px",
        fontFamily: "Oswald",
        fontWeight: "bold",
    };
    const formcontact = {
        display: "flex",
        flexDirection: "row",
        columnGap: "80px",
        marginLeft: "80px",
    };
    const nameInput2 ={
        background: "white", 
        width: "500px",
        height: "40px",
        position: "relative",
        bottom: "20px",
        padding: "8px",
        border: "1px solid white",
    };
    const message = {
        marginLeft: "80px",
        marginTop: "20px",
    };
    const submitBtn = {
        background: "transparent",
        color: "white",
        textTransform: "uppercase",
        textAlign: "center",
        padding: "30px",
        width: "515px",
        height: "40px",
        marginLeft: "80px",
        marginTop: "20px",
        border: "1px solid white",
    };
    const number = {
        color: "white",
        marginLeft: "700px",
        position: "relative",
        bottom: "220px",
        fontSize: "35px",
        fontWeight: "400",
        lineHeight: "1.7",
    }
    return (
        <div style={contactSec}>
            <div style={formContact}>
                <input style={nameInput} type="text" placeholder="Enter your Name" />
                <h2 style={contact}>Contact Us</h2>
            </div>
            <div style={formcontact}>
            <input style={nameInput2} type="text" placeholder="Enter a valid email address" />
            <img src={social} alt="" />
            </div>
            <textarea style={message} name="" id="" cols="62" rows="10" ></textarea>
            <div> 
                <button style={submitBtn}>submit</button>
                <h6 style={number}>1 (234) 567-891 <br /> 1 (234) 987-654</h6>
            </div>
        </div>
    )
}
export default Contact;
