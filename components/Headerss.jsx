import React, {useState} from 'react'
import img1 from '../assets/teacher.png'
import Login from '../login'


function Headerss() {

    const [isRegisterHovered, setRegisterHovered] = useState(false);
    const [isCodeHovered, serCodeHovered] = useState(false);

    const handleRegisterHover = () => {
        setRegisterHovered(true);
    };
    const handleRegisterLeave = () => {
        setRegisterHovered(false);
    };
    const handleCodeHover = () => {
        serCodeHovered(true);
    };
    const handleCodeLeave = () => {
        serCodeHovered(false);
    };

    const styles = {
        header: {
            width: "100%",
            height: "100vh",
            backgroundImage: "linear-gradient(225deg, #f2f6ed 0%, #f2f6ed 1%, #c1dde0 100%)"
        },
        ul: {
            padding: "20px 60px",
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        regis: {
            color: "#66b2ba",
            textDecoration: 'none',
            border: '1.5px solid #66b2ba',
            borderRadius: '5px',
            padding: '5px 22px',
            fontSize: '20px',
            background: isRegisterHovered ? "#00000000" : "#66b2ba",
            color: isRegisterHovered ? "#66b2ba" : "#fff",
            marginRight: "30px",
            transition: "background-color 0.2s, color 0.2s",
        },
        textBox: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "80%",
            height: "70vh",
            // background: "#33333310"
            display:"flex"
        },
        lt: {
            width:"50%",
            padding:"120px 30px 60px 30px"
        },
        rt: {
            display: "flex",
            alignItems: "center",
            paddingLeft: "100px"
        },
        img1: {
            display: "flex",
            justifyContent:"center",
            alignItems: "center"
        },
        BtnRegister: {
            color:"#fff",
            border: "1px solid #66b2ba",
            textDecoration: "none",
            fontSize: "24px",
            padding: "4px 60px",
            borderRadius:"50px",
            background: "#66b2ba",
            marginRight: "30px",
            background: isRegisterHovered ? "#00000000" : "#66b2ba",
            color: isRegisterHovered ? "#66b2ba" : "#fff",
            marginRight: "30px",
            transition: "background-color 0.2s, color 0.2s",
        },
        BtnCoderoom: {
            color:"#66b2ba",
            border: "1px solid #66b2ba",
            textDecoration: "none",
            fontSize: "24px",
            padding: "4px 60px",
            borderRadius:"50px",
            background: isCodeHovered ? "#66b2ba" : "#00000000",
            color: isCodeHovered ? "#fff" : "#66b2ba",
            transition: "background-color 0.2s, color 0.2s",
        }
      }
  return (
    <div>
      <div style={styles.header}>
            <ul style={styles.ul}>
                <div className="logo">
                    <h3 style={{fontSize:32}}>PROEDGE</h3>
                </div>
                <div>
                    <a href="" style={styles.regis} onMouseEnter={handleRegisterHover} onMouseLeave={handleRegisterLeave}>Sign in with Google</a>
                </div>
            </ul>
      </div>
        <div style={styles.textBox}>
            <div style={styles.lt}>
                <h1 style={{fontSize: 102, fontWeight: 800, marginBottom: 20, lineHeight:1.2}}>เว็บไซต์ป้องกันการโกงข้อสอบ</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam molestias qui tempore odit minima at aliquid totam excepturi, sapiente perspiciatis.</p>
                <div style={{marginTop:40}}>
                    {/* <a href="" style={styles.BtnRegister} onMouseEnter={handleRegisterHover} onMouseLeave={handleRegisterLeave}>Register</a> */}
                    <a href="" style={styles.BtnCoderoom} onMouseEnter={handleCodeHover} onMouseLeave={handleCodeLeave}>Join a game</a>
                </div>
            </div>
            <div style={styles.rt}>
                <img style={styles.img1} src={img1} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Headerss
