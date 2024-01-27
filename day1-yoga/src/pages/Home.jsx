import { Link } from "react-router-dom";
import "../assets/css/home.css"
function Home(){
    return(
        <div className="homebg" style={{backgroundColor:'black' ,width:'400px',marginLeft:'100px'}}>
        <h1 style={{ color: 'white', fontSize: '40px', fontWeight: 'bold',fontFamily:'sans-serif',marginTop:'250px',marginLeft:'100px' }}>Yoga Practice </h1>
        <h2 style={{ color: 'white', fontSize: '30px', fontWeight: 'bold',fontFamily:'sans-serif',marginLeft:'100px' }}>For Good Health</h2>
        <br></br>
        <Link to="/login"><button style={{ margin: '10px', padding: '10px', fontSize: '20px',marginLeft:'100px' }}>Join Now</button></Link>
        <button style={{ margin: '10px', padding: '10px', fontSize: '20px' }}>Contact Us</button>
  
        
        </div>
    )
}
export default Home;