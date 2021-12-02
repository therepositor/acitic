import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Home from '../Components/Home';
import IdeaStage from '../Components/IdeaStage';
import IdeaStageQuestionnaire from '../Components/IdeaStageQuestionnaire';
import BuildStage from '../Components/BuildStage';
import BuildStageQuestionnaire from '../Components/BuildStageQuestionnaire';
import GoalsAndExecutiveSummary from '../Components/GoalsAndExecutiveSummary';
import LeaderShipTeams from '../Components/LeaderShipTeams';
import OurOfferings from '../Components/OurOfferings';
import ContactUs from '../Components/ContactUs';
import SignIn from '../Components/SignIn';
import SignUp from '../Components/SignUp';
import QuestionnaireFeedback from '../Components/QuestionnaireFeedback';
import BuildStageQuestionnaireFeedback from '../Components/BuildStageQuestionnaireFeedBack';

const Index = ({ buttonRef,
                 onClick,
                 handleOnClickAboutUs,
                 aboutUsRef,
                 handleOnclickMenuOptions,
                 optionsButtonRef,
                 sortDownRef,
                 handleMobileOptionsbutton,
                 onSubmit
                 }) =>  (
        <BrowserRouter>
            <Header
             buttonRef={buttonRef}
             onClick={onClick}
             handleOnClickAboutUs={handleOnClickAboutUs}
             aboutUsRef={aboutUsRef}
             handleOnclickMenuOptions={handleOnclickMenuOptions}
             optionsButtonRef={optionsButtonRef}
             sortDownRef={sortDownRef}
             handleMobileOptionsbutton={handleMobileOptionsbutton}></Header>
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/idea-stage'onSubmit={onSubmit} exact element={<IdeaStage />} />
                <Route path='/idea_stage' element={<IdeaStage />} />
                <Route path='/idea_stage_questionnaire' element={<IdeaStageQuestionnaire />} />
                <Route path='/build-stage' exact element={<BuildStage />} />
                <Route path='/build_stage_questionnaire' exact element={<BuildStageQuestionnaire />} />
                <Route path='questionnaire_feedback' exact element={<QuestionnaireFeedback />} />
                <Route path='/build_stage_questionnaire_feedback' exact element={<BuildStageQuestionnaireFeedback />} />
                <Route path='/goals_&_executive_summary' exact element={<GoalsAndExecutiveSummary />} />
                <Route path='/leadership_teams' element={<LeaderShipTeams />} />
                <Route path='/our_offerings' element={<OurOfferings />} />
                <Route path='/contact' element={<ContactUs />} />
                <Route path='/sign_in' element={<SignIn />} />
                <Route path='/get_started'exact element={<SignUp />} />
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
)


export default Index
