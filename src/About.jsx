import clockfoto from './fggf-min.jpeg';
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
    const clock ={
        width: "800px",
        height: "800px",
        borderRadius: "50%",
        position: "relative",
        left: "200px",
        bottom: "80px",
        zIndex: "1",
    };
      const redBoxes={
        display: "flex",
        flexDirection: "row",
        columnGap: "50px",
        marginLeft: "500px",
        position: "relative",
        bottom: "300px",
       zIndex: "1",
    };
    const redBox={
        background: "#ff4300",
        width: "300px",
    };
    const project ={
        color: "white",
        textAlign: "center",
        fontSize: "25px",
        fontWeight: "400",
        fontFamily: "Oswald",
        letterSpacing: "2px",
    };
    const number ={
        color: "white",
        textAlign: "center",
        fontSize: "25px",
        fontWeight: "200",
    };
    const redBoxes2={
        display: "flex",
        flexDirection: "row",
        columnGap: "50px",
        marginLeft: "500px",
        marginTop: "20px",
        position: "relative",
        bottom: "300px",
       zIndex: "1",
    };    
    return (
        <div style={Box}>
            <h2 style={About}>About Branding Agency</h2>
            <p style={text}>Sample text. Click to select the text box. Click again or double click to start editing the text. </p>
            <p style={comment}>Image from <span style={freepik}>freepik</span></p>
            <button style={moreBtn}>learn more</button>
        </div>  
        <img style={clock} src={clockfoto} alt="" />
 <div style={redBoxes}>
            <div style={redBox}>
                <h4 style={project}>PROJECTS</h4>
                <p style={number}>100</p>
            </div>
            <div style={redBox}>
                <h4 style={project}>CLIENTS</h4>
                <p style={number}>40</p>
            </div>
    </div>
        <div style={redBoxes2}>
        <div style={redBox}>
                <h4 style={project}>OUR TEAM</h4>
                <p style={number}>20</p>
            </div>
            <div style={redBox}>
                <h4 style={project}>AWARDS</h4>
                <p style={number}>76</p>
            </div>
        </div>    
        )
}
export default About;
