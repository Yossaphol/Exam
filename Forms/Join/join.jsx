const JoinRoom = ()=> {
    const style = {
        form : {
            width: "100%",
            display: "flex",
            paddingTop: "40px",
            flexDirection: "column"
        },
        append : {
            display: "flex",
            gap: "1",
        },
        br : {
            borderRadius: "0 5px 5px 0"
        }
    }
    return(
        <form action="" style={style.form}>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter your name" style={style.ip} />
            </div>
            <div className="form">
                <div className="input-group mt-2">
                    <input type="text" className="form-control" placeholder="Enter room code" style={style.ip}/>
                    
                </div>
            </div>
            <button type="submit" className="mt-4 btn-block form-control">Join Room</button>
        </form>
    );
}

export default JoinRoom