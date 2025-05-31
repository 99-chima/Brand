function About (){
    const Box = {
        background : "white",
        boxShadow: "0px 10px 50px rgba(0, 0, 0,0.3)",
        marginTop : "150px",
        marginLeft: "100px",
        padding: "25px",
        width: "450px",
        border: "2px solid #ff4300",
    };
    const About ={
        color: "black",
        fontWeight: "bold",
        fontSize: "35px",
        fontFamily: "Oswald",
    };
    const text = {
        color: "black",
        lineHeight: "2",
    };
    const comment = {
        color: "black",   
    };
    const freepik = {
        color: "black",
        textDecoration: "underline",
        fontSize: "20px",
    };
    const moreBtn ={
        background: "#ff4300",
        color: "white",
        width: "100px",
        padding: "15px",
        border: "1px solid #ff4300",
        marginTop: "20px",
    };
    return (
        <div style={Box}>
            <h2 style={About}>About Branding Agency</h2>
            <p style={text}>Sample text. Click to select the text box. Click again or double click to start editing the text. </p>
            <p style={comment}>Image from <span style={freepik}>freepik</span></p>
            <button style={moreBtn}>learn more</button>
        </div>
    )
}
export default About;