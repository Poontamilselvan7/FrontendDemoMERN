import React from "react";
function SBook(){
    return(
        <div className="book">
            <center>
            <fieldset className="sb">
                <legend>SlamBook</legend>
                <form>
                    <div className="sc">
                    <label for="name">Name: </label>
                    <input type="text" id="name" style={{
            fontSize: "18px", 
            padding: "15px",  
            width: "200px",   
            height: "10px",   
            transform: "scale(1.2)", 
            borderRadius: "5px", 
            border: "1px solid #ccc", 
          }}></input>
                    </div>
                    <div className="sc">
                    <label for="nickname">Nickname: </label>
                    <input type="text" id="nickname" style={{
            fontSize: "18px", 
            padding: "15px",  
            width: "200px",   
            height: "10px",   
            transform: "scale(1.2)", 
            borderRadius: "5px", 
            border: "1px solid #ccc", 
          }}></input>
                    </div>
                    <div className="sc">
                        <label for="address">Address: </label>
                        <input type="text" id="address" style={{
            fontSize: "18px", 
            padding: "15px",  
            width: "200px",   
            height: "10px",   
            transform: "scale(1.2)", 
            borderRadius: "5px", 
            border: "1px solid #ccc", 
          }}/>
                    </div>
                    <div className="sc">
                        <label for="phonenumber">Phone Number: </label>
                        <input type="text" id="phonenumber" style={{
            fontSize: "18px", 
            padding: "15px",  
            width: "200px",   
            height: "10px",   
            transform: "scale(1.2)", 
            borderRadius: "5px", 
            border: "1px solid #ccc", 
          }}/>
                    </div>
                    <div className="sc">
                        <label for="memories">Memories: </label>
                        <textarea id="memories" style={{
            fontSize: "18px", 
            padding: "15px",  
            width: "200px",   
            height: "10px",   
            transform: "scale(1.2)", 
            borderRadius: "5px", 
            border: "1px solid #ccc", 
          }}></textarea>
                    </div>
                    <div className="sc">
                        <label for="gender">Gender: </label>
                        <input type="radio" style={{
            width: "20px",
            height: "20px",
            transform: "scale(1.5)",
            marginRight: "10px", 
          }}/>
                        <label >Male</label>
                        <input type="radio" style={{
            width: "20px",
            height: "20px",
            transform: "scale(1.5)", 
            marginRight: "10px", 
          }}/>
                        <label >Female</label>

                    </div>
                    <div >
                        <label for="fv">Favorite Actors: </label>
                        <input type="checkbox" style={{
            width: "25px",
            height: "25px",
            transform: "scale(1.5)", 
            marginRight: "10px",
          }}/>
                        <label >Sivakarthikeyan</label>
                        <input type="checkbox" style={{
            width: "25px",
            height: "25px",
            transform: "scale(1.5)",
            marginRight: "10px",
          }}/>
                        <label >Vijay</label>
                        <input type="checkbox" style={{
            width: "25px",
            height: "25px",
            transform: "scale(1.5)", 
            marginRight: "10px", 
          }}/>
                        <label >Ajith</label>
                    </div>
                    <div className="sc">
                        <label for="school">School: </label>
                        <select style={{
            fontSize: "18px", 
            padding: "1px",
            width: "300px",
            height: "40px", 
            transform: "scale(1.2)",
          }}>
                            <option>ERK Higher Secondary School</option>
                            <option v>IMS Higher Secondary School</option>
                        </select>
                    </div>
                    <center><button className="button">Submit</button></center>
                </form>
            </fieldset>
            </center>
        </div>
    )
}


export default SBook;