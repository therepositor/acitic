import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const LeaderShipTeams = () => {
    return (
        <div className='leadership-teams'>
            <nav className='homenavbar'>
                <span>
                    <h3>About Us</h3>     
                </span>
                <span>
                    <FontAwesomeIcon icon={faAngleRight} />
                </span>
                <span>
                    Leadership Team
                </span>   
             </nav>
             <div className="cards">
                 <div className="card">
                    <div className='img-container'>
                        <img src="images/team1.jpg" alt="Obiofong Micheal" />
                    </div>
                    <div className='about-team-member'>
                        <h4>Obiofong Micheal</h4>
                        <h4>Founder</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus adipisci possimus perspiciatis aperiam fugit laborum quod, optio eligendi earum doloremque beatae cupiditate, commodi omnis sit veritatis necessitatibus itaque incidunt corporis!</p>
                    </div>
                 </div>
                 <div className="card">
                 <div className='about-team-member'>
                        <h4>Obiofong Micheal</h4>
                        <h4>Founder</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus adipisci possimus perspiciatis aperiam fugit laborum quod, optio eligendi earum doloremque beatae cupiditate, commodi omnis sit veritatis necessitatibus itaque incidunt corporis!</p>
                    </div>
                    <div className='img-container'>
                        <img src="images/team2.jpg" alt="Obiofong Micheal" />
                    </div>
                 </div>
                 <div className="card">
                    <div className='img-container'>
                        <img src="images/team3.jpg" alt="Obiofong Micheal" />
                    </div>
                    <div className='about-team-member'>
                        <h4>Obiofong Micheal</h4>
                        <h4>Founder</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus adipisci possimus perspiciatis aperiam fugit laborum quod, optio eligendi earum doloremque beatae cupiditate, commodi omnis sit veritatis necessitatibus itaque incidunt corporis!     
                        </p>
                    </div>
                 </div>
             </div>
        </div>
    )
}

export default LeaderShipTeams
