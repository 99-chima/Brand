function Footer (){
    const footer = {
        background: "#333333",
        textAlign: "center",
        position: "relative",
        bottom: "30px",
        height: "280px",
    };
    const sample = {
        color: "white",
        paddingTop: "50px",
        lineHeight: "1.5",
    };
    const site = {
        color: "white",
        paddingTop: "90px",
    };
    const nicepage = {
        color: "#ffb499",
        textDecoration: "underline",
    }
    return(
        <div style={footer}>
            <p style={sample}>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit <br /> nullam nunc justo sagittis suscipit ultrices.</p>
            <p style={site}>This site was created with the <span style={nicepage}>Nicepage</span></p>
        </div>
    )
}
export default Footer;
