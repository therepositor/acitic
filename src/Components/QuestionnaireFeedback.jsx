import React from 'react';
import HomeNavBar from './HomeNavBar'
import Relateditems from './Relateditems';

const QuestionnaireFeedback = () => {
    return (
        <div className='ideaStage-questionnaire-feedback'>
            <HomeNavBar />
            <section className="feedback">
                <p>Your response has been recorded and will be notified via Email</p>
            </section>
            <Relateditems />
        </div>
    )
}

export default QuestionnaireFeedback
