import person from './person.jpeg';
function Brand (){
    const brandSec ={
        background: "#f2f2f2",
        height: "1200px",
        position: "relative",
        bottom: "200px",
    };
    const redCircle ={
       background: "#ff4300",
       width: "200px",
       height: "200px",
       borderRadius: "50%",
       position: "relative",
       top: "50px",
       left: "80px", 
    };
    const brands = {
        display: "flex",
        flexDirection: "row",
        columnGap: "30px",
        marginLeft: "170px",
        position: "relative",
        bottom: "40px",
    };
    const brandBox = {
       background: "white" ,
       boxShadow: "0px 10px 50px rgba(0, 0, 0,0.3)",
       padding: "25px",
       width: "270px",
       zIndex: "1",
    };
    const brand = {
        color: "black",
        fontWeight: "bold",
        fontSize: "25px",
        fontFamily: "Montserrat",
        letterSpacing: "2px",
        lineHeight: "1.5",
    };
    const list ={
        listStyleType: "none",
        lineHeight: "2",
        position: "relative",
        bottom: "20px",
        right: "33px",
        fontFamily: "Montserrat",
        fontSize: "20px",
    };
    const redbox = {
        backgroundColor: "#ff4300",
        width: "970px",
        height: "300px",
        position: "relative",
        left: "250px",
        bottom: "180px",
        zIndex: "0",
    };
    const whoUs ={
        display: "flex",
        flexDirection: "row",
        columnGap: "50px",
        marginLeft: "100px",
        position: "relative",
        bottom: "250px",
    };
    const personfoto ={
        width: "500px",
        height: "500px",
        borderRadius: "50%",
    };
const whoBox ={
    backgroundColor: "white",
    boxShadow: "0px 10px 50px rgba(0, 0, 0,0.5)",
    width: "500px",
    height: "300px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
};
const redCircle2 ={
    background: "#ff4300",
       width: "70px",
       height: "70px",
       borderRadius: "50%",
       marginLeft: "30px",
       position: "relative",
       top: "20px",
};
const what = {
    color: "black",
   fontSize: "50px",
   fontFamily: "Oswald",
   fontWeight: "bold",
   marginLeft: "30px",
};
const quality = {
    color: "black",
    fontSize: "25px",
    fontFamily: "Oswald",
    marginLeft: "30px",
    position: "relative",
    bottom: "30px",
};
    return (
        <div style={brandSec}>
            <div style={redCircle}></div>
            <div style={brands}>
                <div style={brandBox}>
                    <h4 style={brand}>BRAND STRATEGY</h4>
                    <ul style={list}>
                        <li>- Brand equity audit</li>
                        <li>- Audience analysis</li>
                        <li>- Competitive review</li>
                        <li>- Strategic direction</li>
                    </ul>
                </div>
                <div style={brandBox}>
                    <h4 style={brand}>BRAND IDENTITY</h4>
                    <ul style={list}>
                        <li>- Visual positioning</li>
                        <li>- Visual identity system</li>
                        <li>- Icon & illustration guides</li>
                        <li>- Brand application</li>
                    </ul>
                </div>
                <div style={brandBox}>
                    <h4 style={brand}>COMMUNICATION STRATEGY</h4>
                    <ul style={list}>
                        <li>- Verbal identity</li>
                        <li>- Tagline exploration</li>
                        <li>- Communication style guide</li>
                       
                    </ul>
                </div>
            </div>
            <div style={redbox}></div>
            <div style={whoUs}>
                <img style={personfoto} src={person} alt="" />
                <div style={whoBox}>
                <div style={redCircle2}></div>
                <h2 style={what}>What we Do</h2>
                <h4 style={quality}>HIGH-QUALITY DESIGN</h4>
                </div>
            </div>
        </div>
    )
}
export default Brand;
