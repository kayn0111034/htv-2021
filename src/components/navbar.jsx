const navbar = () => {
  return (
      <div>
          <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <a class="navbar-brand" href="#">TeamName</a>
            <ul class="navbar-nav flex-grow-1 navbar-collapse collapse">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                      <a class="nav-link" href="#">Covid Quiz <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Self-Diagnosis</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">About Us</a>
                    </li>
                </ul>
              </ul> 
            </nav>
      </div>
  )
}

export default navbar




