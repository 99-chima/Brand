import Logo from './default-logo.png';
import teamimg from './xcdf-min.jpeg';
function Header (){
    const navBarstyle = {
        display: "flex",
        flexDirection: "row",
    };
    const logo = {
        padding: "50px",
        marginLeft: "30px",
        width:"100px",
    };
    const lists ={
        listStyleType: "none",
        display: "flex",
        flexDirection: "row",
        columnGap: "50px",
        padding: "50px",  
        marginLeft: "400px",
    };
    const home ={
        color: "#ff4300",
        fontWeight: "bold",
    };
    const list ={
        color: "#1a1a1a",
        fontWeight: "bold",
    };
    const headerSection = {
        background: "#f2f2f2",
        height: "900px",
        marginTop: "30px",
    };
    const team ={
        width: "900px",
        height: "500px",
     marginLeft: "200px",
        position: "relative",
        bottom: "650px",
      zIndex:"1",
    };
    const blackBox = {
        background: "black",
        zIndex: "1",
      width: "400px",
      height: "300px",
      padding: "40px",
      position:"relative",
      bottom: "1100px",
      left: "50px",
    };
    const brand = {
        color: "white",
        letterSpacing: "2px", 
        fontFamily: "Oswald",
        fontSize: "25px",
    };
    const brandDesign = {
        color: "white",
        fontWeight: "bold",
        fontSize: "3.7rem",
        fontFamily: "Oswald",
    };
    const comment = {
        color: "white",   
    };
    const freepik = {
        color: "white",
        textDecoration: "underline",
        fontSize: "20px",
    };
    const column = {
        backgroundColor: "#ff4300",
        height: "700px",
        width: "200px",
        marginLeft: "100px",
    };
    const boxes = {
        display: "flex",
        flexDirection: "row",
    };
    const firstBox ={
        backgroundColor: "white",
        boxShadow: "0px 10px 50px rgba(0, 0, 0,0.3)",
        padding: "18px",
        width: "500px",
        height: "250px",
        position: "relative",
        left: "250px",
        top: "30px",
    }
    const strategy ={ 
        color: "black",
        fontSize: "20px",
        fontWeight: "400",
    };
    const plans ={
        background: "#ff4300",
        padding: "10px",
        borderRadius: "50%",
        marginRight: "10px",
    };
    const text ={
        lineHeight: "1.4",
    };
    const secondBox ={
        backgroundColor: "white",
        boxShadow: "0px 10px 50px rgba(0, 0, 0,0.3)",
        padding: "18px",
        width: "500px",
        height: "250px",
        position: "relative",
        top: "30px",
        left: "300px",
    };
    return(
        <>
        <div style={navBarstyle}>
            <img style={logo} src={Logo} alt="" />
            <div>
                <ul style={lists}>
                    <li style={home}>Home</li>
                    <li style={list}>About Company</li>
                    <li style={list}>Portfolio</li>
                    <li style={list}>Our Team</li>
                </ul>
            </div>
        </div>
        <section style={headerSection}>
        <div style={column}></div>
            <img style={team} src={teamimg} alt="" />
            <div style={blackBox}>
                <h3 style={brand}>BRAND IDENTITY</h3>
                <h1 style={brandDesign}>Brand Design Consultancy</h1>
                <p style={comment}>Image from <span style={freepik}>freepik</span></p>
                <div style={boxes}>
           <div style={firstBox}>
                    <h5 style={strategy}><span style={plans}>🗒</span>Strategy</h5>
                    <p style={text}>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                </div>
                <div style={secondBox}>
                    <h5 style={strategy}><span style={plans}>📔</span>Consultancy</h5>
                    <p style={text}>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                </div>
           </div>
            </div>    
        </section>
        </>
    )
}
export default Header;