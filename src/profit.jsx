import manfoto from './errr.jpeg';
import girl from './d.jpeg';
import man1 from './man.jpeg';
import laptop from './laptop.jpeg';
import work from './gffg.jpeg';
function Profit (){
    const profitSec = {
        background: "#f2f2f2",
        position: "relative",
        bottom: "705px",
        height: "1200px",
    };
    const profit ={
        fontSize: "45px",
        marginLeft: "80px",
        fontWeight: "bold",
        fontFamily: "Montserrat",
        paddingTop: "50px",
        lineHeight: "1.5",
    };
    const achive = {
        display: "flex",
        flexDirection : "row",
        columnGap: "70px",
    };
    const man = {
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        marginLeft: "80px",
    };
    const qualityBox ={
        background: "#ff4300",
        padding: "25px",
        width: "250px",
        height: "250px",
    };
    const quality = {
        color: "white",
        fontSize: "25px",
        fontWeight: "bold",
        fontFamily: "Montserrat",
        lineHeight: "1.3",
    };
    const sample = {
        color: "white",
        lineHeight : "1.5",
    };
    const girlpic = {
        width: "170px",
        height: "170px",
        borderRadius: "50%",
        marginTop: "80px",
        marginLeft: "30px",
    };
    const achivement = {
        display: "flex",
        flexDirection: "row",
        columnGap: "70px",
        marginLeft: "100px",
        marginTop: "50px",
    };
    const comment = {
        color: "white",   
    };
    const freepik = {
        color: "white",
        textDecoration: "underline",
        fontSize: "20px",
    };
    const manpic = {
        width: "160px",
        height: "160px",
        borderRadius: "50%",
        marginTop: "30px",
        marginLeft: "40px",
    };
    const laptopic ={
        width: "350px",
        height: "350px",
        borderRadius: "50%",
        marginLeft: "60px",
        position: "relative",
        bottom: "70px",
    };
    const column = {
        backgroundColor: "#ff4300",
        height: "780px",
        width: "300px",
        position: "relative",
        right: "70px",
    };
    const last = {
        display: "flex",
        flexDirection: "row",
        columnGap: "10px",
    };
    const workshop = {
        marginLeft: "200px",
        marginTop: "30px",
        zIndex: "1",
        width: "850px",
        height: "700px",
    };
    const digitalBox = {
        width: "500px",
        background: "white",
        height: "300px",
        marginLeft: "100px",
        padding: "20px",
        position: "relative",
        bottom: "130px",
        zIndex: "1",
    };
    const digital = {
        color: "black",
        fontSize: "50px",
        fontWeight: "bolder",
        fontFamily: "Montserrat",
        lineHeight: "1.2",
    };
    const sample2 = {
        color: "black",
        lineHeight : "1.5",
    };
    const comment2 = {
        color: "black",   
    };
    const freepik2 = {
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
        <div style={profitSec}>
            <h2 style={profit}>We build successful, long-lasting, profitable <br /> products for our clients. We’re moving <br /> quickly to the final specification.</h2>
            <div style={achive}>
            <img style={man} src={manfoto} alt="" />
            <div style={qualityBox}>
                <h4 style={quality}>QUALITY SUPPORT</h4>
                <p style={sample}>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
            </div>
            <img style={girlpic} src={girl} alt="" />
            </div>
            <div style={achivement}>
                <div style={qualityBox}>
                <h4 style={quality}>UNLOCK CREATIVITY</h4>
                <p style={sample}>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                <p style={comment}>Image from <span style={freepik}>freepik</span></p>
                </div>
                <img style={manpic} src={man1} alt="" />
                <img style={laptopic} src={laptop} alt="" />
            </div>
            <div style={last}>
            <img style={workshop} src={work} alt="" />
            <div style={column}></div>
            </div>
            <div style={digitalBox}>
                <h2 style={digital}>Digital Marketing for Social Media</h2>
                <p style={sample2}>Sample text. Click to select the text box. Click again or double click to start editing the text. </p>
                <p style={comment2}>Image from <span style={freepik2}>freepik</span></p>
                <button style={moreBtn}>learn more</button>
            </div>
        </div>
    )
}
export default Profit;
