import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const navbar = () => {
  return (
      <div>
          <nav class="navbar navbar-expand-md navbar-dark bg-dark p-2">
            <Link to="/home">
            <a class="navbar-brand" href="#"><b>TeamName</b></a>
            </Link>
            <ul class="navbar-nav justify-content-start">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                      <Link to="/quiz">
                      <a class="nav-link" href="#">Covid Quiz <span class="sr-only">(current)</span></a>
                      </Link>
                    </li>
                    <li class="nav-item active">
                      <Link to="/selfdiagnosis">
                      <a class="nav-link" href="#">Self-Diagnosis</a>
                      </Link>
                    </li>
                    <li class="nav-item active">
                      <Link to="/aboutus"><a class="nav-link" href="#">About Us</a></Link>
                    </li>
                </ul>
              </ul> 
            </nav>
      </div>
  )
}

export default navbar




