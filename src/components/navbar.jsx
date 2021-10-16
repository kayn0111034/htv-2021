const navbar = () => {
  return (
      <div>
          <nav class="navbar navbar-expand-md d-flex navbar-dark bg-dark p-2">
            <a class="navbar-brand" href="/index"><b>TeamName</b></a>
            <ul class="navbar-nav flex-grow-1 navbar-collapse collapse">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                      <a class="nav-link" href="/CovidQuiz">Covid Quiz <span class="sr-only"></span></a>
                    </li>
                    <li class="nav-item active">
                      <a class="nav-link" href="/SelfDiagnosis">Self-Diagnosis</a>
                    </li>
                    <li class="nav-item active">
                      <a class="nav-link" href="/aboutus">About Us</a>
                    </li>
                </ul>
              </ul> 
            </nav>
      </div>
  )
}

export default navbar




