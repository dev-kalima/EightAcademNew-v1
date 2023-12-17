
import { Component } from "react"
import { MenuData1 } from "./MenuData1";
import "./NavbarStyle1.css"
import elogo from '../components/image/elogo.png'
import eightmainlogo from '../components/image/eightmainlogo.png'
import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';

class Navbar1 extends Component {



    state = { clicked: false };
    handleClick = () => {

        this.setState({ clicked: !this.state.clicked })
    }

    render() {

        return (

            <>

                <div className="logonum"><img src={elogo} alt="" className="eightlogo" />
                    <div className="mainlogo"> <img src={eightmainlogo} alt="" /></div><div className="psbox"> <a href="tel:87448 97916"> <i className={"fa-solid fa-phone"}></i></a> <span className="number"><a href="tel:87448 97916">+91 8744897916</a></span></div></div>

                <nav className="NavbarItems">
                    {/* <h1 className="logo">Eight Academy <i className="fab fa-react"></i> </h1> */}
                    <h1 className="logo"><img src={elogo} alt="" /></h1>
                    <div className="menu-icons" onClick={this.handleClick}>

                        <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    {/* <ul className="nav-menu"> */}
                    <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                        {MenuData1.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link className={item.cName} to={item.url} >
                                        <i className={item.icon}></i>{item.title}</Link>
                                </li>
                            )
                        })}

                    </ul>
                </nav>

            </>
        )
    }
}
export default Navbar1;