import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">LogoImage</span>
        <div className="navItems">
          <div className="itemList">Reserve stays</div>
          <div className="itemList">Book flight</div>
          <div className="itemList">Get ride</div>
          <div className="itemList">Destination</div>
          <div className="itemList">My trips</div>
          <div className="itemList">Support</div>
          <div className="itemList">Currency</div>
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar