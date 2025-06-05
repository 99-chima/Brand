import testi from './dfff-min.jpeg';
import girl from './girl.jpeg';
function Testimonial (){
    const testiSec ={
        width: "1265px",
        position: "relative",
        bottom: "200px",
    };
    const girlCard = {
        background: "white",
        width: "500px",
      position: "relative",
      bottom: "672px",
      left: "80px",
        padding: "20px",
        zIndex: "1",
    };
    const girlpic = {
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        marginLeft: "200px",
    };
    const lorem = {
        lineHeight: "2", 
        marginLeft: "50px",
    };
    const images = {
        textAlign: "center",
        marginTop: "30px",
    };
    const freepik = {
        textDecoration: "underline",
    };
    const jennie = {
        fontWeight: "800",
        fontSize: "22px",
        fontFamily: "Oswald",
        textAlign: "center",
    };
    const sales = {
        fontSize: "15px",
        textAlign: "center",
        position: "relative",
        bottom: "22px",
        fontWeight: "300",
    }
    return (
       <div>
        <img style={testiSec} src={testi} alt="" />
        <div style={girlCard}>
            <img style={girlpic} src={girl} alt="" />
            <p style={lorem}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore magna <br /> aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br /> ullamco laboris."</p>
            <p style={images}>Images from <span style={freepik}>Freepik</span></p>
            <h5 style={jennie}>Jennie Roberts</h5>
            <h6 style={sales}>Sales Manager</h6>
        </div>
       </div>
         
    )
}
export default Testimonial;
