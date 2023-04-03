import React from 'react';

export default class Footer extends React.Component{
    render(){
        return(
          <div className="container-fluid" id="footer">
          <footer className="py-3 my-0">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Top Reviews</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Movies A-Z</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Account</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
            </ul>
            <p class="text-center text-muted">© 2023 CritHub, Inc</p>
          </footer>
        </div>
        )
    }
}