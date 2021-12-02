import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Relateditems from './Relateditems';

const BuildStageQuestionnaireFeedBack = () => {
    return (
        <div className='buildStage-questionnaire-feedback'>
            <nav className='homenavbar'>
                <span>
                    <h3>Home</h3>     
                </span>
                <span>
                    <FontAwesomeIcon icon={faAngleRight} />
                </span>
                <span>
                    Building Stage
                </span>
                <span>
                    <FontAwesomeIcon icon={faAngleRight} />
                </span>
                <span>
                    Questionnaire
                </span>
            </nav>
            <section className="feedback">
                <p>Your response has been recorded and will be notified via Email</p>
            </section>
            <Relateditems />
        </div>
    )
}

export default BuildStageQuestionnaireFeedBack
