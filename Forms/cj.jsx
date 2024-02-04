import CreateRoom from "./Create/create";
import JoinRoom from "./Join/join";
import './cj.css';

const Forms = ()=> {
    const style = {
        box: {
            width: "480px",
            height: "540px",
            // border: "1px solid #eee",
            borderRadius: "10px",
            padding: "32px",
            margin: "15px",
            alignItems: "center",
            backgroundImage: "linear-gradient(225deg, #f2f6ed 0%, #f2f6ed 1%, #c1dde0 100%)"
        },
        textHeader: {
            fontWeight: "bold",
            color: "#66b2ba",
            paddingTop: "24px"
        },
    }
    return (
        <div className="container">
            <div className="row">
                <div style={style.box}>
                    <h1 style={style.textHeader}>Create Room</h1>
                    <CreateRoom />
                </div>
                <div style={style.box}>
                    <h1 style={style.textHeader}>Join Room</h1>
                    <JoinRoom />
                </div>
            </div>
        </div>
    );
};

export default Forms;