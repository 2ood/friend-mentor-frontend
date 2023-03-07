import React, {useState} from "react";
import back from "img/back.png";
import clear from "img/clear.png";
import * as Styled from "styles/ComponentStyles";
import { useNavigate } from 'react-router';
import HorizonLine from "util/HorizontalLine";


function SignInPage() {
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
 
    const navigateToMain = () => {
    navigate("/");
    };
    return (  
        <div classname="SignIn"
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <Styled.SignInUpBar>
            <img style={{width:'50px'}} src={back} onClick={navigateToMain}/>
            <div style={{color:"#595959", fontSize:"18px", fontFamily:"Gulim", fontWeight:"bold"}}>Sign in</div>
            <img style={{width:'50px'}} src={clear}/>
            </Styled.SignInUpBar>

            <div style={{marginTop: '80px',marginBottom: "20px",marginRight: "130px"}}>
                <label
                style={{
                    outline: "none",
                    fontSize: "18px",
                    fontWeight: "normal",
                    fontFamily : "Gulim",
                    color: "#595959",
                    marginBottom: "20px",
                    
                }}> ID </label>
            </div>
            <div>
            <input id = "id"
                placeholder="Enter your id"
                value={id}
                style={{
                    outline: "none",
                    paddingLeft: "15px", 
                    fontSize: "14px", 
                    fontFamily: "Gulim",
                    border: "0px",
                    borderRadius: "20px", 
                    width:'180px',  
                    paddingTop: '8px', 
                    paddingBottom: '8px',
                    paddingTop: '8px', }}
                onChange={(e)=>{
                    setId(e.target.value);
                }}
                /> 
                <HorizonLine/>
            </div>
            <div style={{marginTop: '50px',marginBottom: "20px",marginRight: "70px"}}>
                <label
                style={{
                    outline: "none",
                    fontSize: "18px",
                    fontWeight: "normal",
                    fontFamily : "Gulim",
                    color: "#595959",
                }}> Password </label>
            </div>
            <div>
            <input id = "pwd" 
                placeholder="Enter your password"
                value={password}
                type='password'
                style={{
                    outline: "none",
                    paddingLeft: "15px", 
                    fontSize: "14px", 
                    fontFamily: "Gulim",
                    border: "0px",
                    borderRadius: "20px", 
                    width:'180px',  
                    paddingTop: '8px', 
                    paddingBottom: '8px',
                    paddingTop: '8px', }}
                onChange={(e)=>{
                    setPassword(e.target.value);
                }}
                /> 
                <HorizonLine/>
            </div>
            <div>
                <button      
                style={{
                    border: "2px solid white",
                    width: "250px",
                    height: "50px",
                    borderRadius: "20px",
                    margin: "10px 10px 10px 10px",
                    backgroundColor: "#40A7D7",
                    color: "#ffffff",
                    fontSize: "16px",
                    fontFamily : "Gulim",
                    fontWeight: "bold",
                    marginTop: '80px',
                }}> Sign in </button>
            </div>
        </div>
    );
};
export {SignInPage};