function Cards (){
    const cards ={
        display: "flex",
        flexDirection: "row",
        marginTop: "60px",
        marginLeft: "100px",
        columnGap: "30px",
    };
    const firstCard ={
        background: "white",
        boxShadow: "0px 10px 50px rgba(0, 0, 0,0.3)",
        padding: "25px",
        border: "2px solid #ff4300",
    };
    const number = {
        color: "#999999",
        fontSize: "30px",
        fontFamily: "Oswald",
    };
    const quality ={
        color: "black",
        fontSize: "45px",
        fontFamily: "Oswald",
        fontWeight: "bolder",
    };
    const text ={
        color: "#999999",
        lineHeight: "2",
    };
    const moreBtn ={
        background: "#ff4300",
        color: "white",
        width: "100px",
        padding: "15px",
        border: "1px solid #ff4300",
        marginTop: "20px",
    }
    return(
        <div style={cards}>
        <div style={firstCard}>
            <p style={number}>01</p>
            <h2 style={quality}>high quality</h2>
            <p style={text}>Volutpat commodo sed egestas egestas <br /> fringilla phasellus faucibus scelerisque <br /> eleifend. Pretium vulputate sapien nec <br /> sagittis aliquam malesuada bibendum.</p>
            <button style={moreBtn}>more</button>
        </div>
        <div style={firstCard}>
            <p style={number}>02</p>
            <h2 style={quality}>branding</h2>
            <p style={text}>Volutpat commodo sed egestas egestas <br /> fringilla phasellus faucibus scelerisque <br /> eleifend. Pretium vulputate sapien nec <br /> sagittis aliquam malesuada bibendum.</p>
            <button style={moreBtn}>more</button>
        </div>
        <div style={firstCard}>
            <p style={number}>01</p>
            <h2 style={quality}>creativity</h2>
            <p style={text}>Volutpat commodo sed egestas egestas <br /> fringilla phasellus faucibus scelerisque <br /> eleifend. Pretium vulputate sapien nec <br /> sagittis aliquam malesuada bibendum.</p>
            <button style={moreBtn}>more</button>
        </div>
        </div>
  )
}
export default Cards;