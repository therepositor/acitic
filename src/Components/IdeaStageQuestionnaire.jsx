import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


const IdeaStageQuestionnaire = ({ handleQuestionnaireChange }) => {
    

    const handleQuestionnaireSubmit = (e)   =>  {
        e.preventDefault();
        window.location.href = './questionnaire_feedback'
    }
    return (
        <div className='questionnaire'>
            <nav className='homenavbar'>
                <span>
                    <h3>Home</h3>     
                </span>
                <span>
                    <FontAwesomeIcon icon={faAngleRight} />
                </span>
                <span>
                    Idea Stage
                </span>
                <span>
                    <FontAwesomeIcon icon={faAngleRight} />
                </span>
                <span>
                    Questionnaire
                </span>
            </nav>
            <form action="" onSubmit={handleQuestionnaireSubmit}>
                <div className="form-input business-name">
                    <label htmlFor="business_name">Business Name</label>
                    <input type="text" id='business_name' name='business_name' onChange={handleQuestionnaireChange} />
                </div>
                <div className="form-input business-owner-name">
                    <label htmlFor="business_owner_name">Business Owner Name</label>
                    <input type="text" id='business_owner_name' name='business_owner_name' onChange={handleQuestionnaireChange} />
                </div>
                <div className="form-input country-gender-owners">
                    <div className='form-input-container country'>
                        <label htmlFor="country">Country</label>
                        <input type="text" name='country' id='country' onChange={handleQuestionnaireChange} />
                    </div>
                    <div className='form-input-container gender'>
                        <label htmlFor="gender">Gender</label>
                        <select name="gender" id="gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className='form-input-container owners'>
                        <label htmlFor="owners">Number of Owners</label>
                        <select name="owners" id="owners">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                </div>
                <div className="form-input state-city-street-zip">
                    <div className="form-input-container state">
                        <label htmlFor="state">State</label>
                        <input type="text" id='state' name='state' onChange={handleQuestionnaireChange} />
                    </div>
                    <div className="form-input-container city">
                        <label htmlFor="city">City</label>
                        <input type="text" name='city' id='city' onChange={handleQuestionnaireChange} />
                    </div>
                    <div className="form-input-container street">
                        <label htmlFor="street">Street</label>
                        <input type="text" name='street' id='street' onChange={handleQuestionnaireChange} />
                    </div>
                    <div className="form-input-container zip-code">
                        <label htmlFor="zip-code">Zip Code</label>
                        <input type="text" name='zip-code' id='zip-code' onChange={handleQuestionnaireChange} />
                    </div>
                </div>
                <div className="form-input property-duration">
                    <div className="form-input-container property-ownership">
                        <label htmlFor="property-ownership">Do you own the current property where your business is located?</label>
                        <select name="property_ownership" id="property_ownership">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="form-input-container property-ownership-duration">
                        <label htmlFor="property_ownership_duration">How long have you been at the current location?</label>
                        <input type="text" name='property_ownership_duration' id='property_ownership_duration' onChange={handleQuestionnaireChange} />
                    </div>
                </div>
                <div className="form-input year-businessType-industry">
                    <div className="form-input-container year-established">
                        <label htmlFor="years_established">Year Established</label><input type="text" name='years_established' id='years_established' onChange={handleQuestionnaireChange} />
                    </div>
                    <div className="form-input-container business-type">
                        <label htmlFor="business_type">Type of Business</label>
                        <input type="text" name='business_type' id='business_type' onChange={handleQuestionnaireChange} />
                    </div>
                    <div className="form-input-container industry">
                        <label htmlFor="industry">Industry</label>
                        <input type="text" id='industry' name='industry' onChange={handleQuestionnaireChange} />
                    </div>
                </div>
                <div className="form-input phoneNumber-email">
                    <div className="form-input-container phone-number">
                        <label htmlFor="phone_number">Phone Number</label><input type="tel" name="phone_number" id="phone_number" onChange={handleQuestionnaireChange} />
                    </div>
                    <div className="form-input-container email">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" onChange={handleQuestionnaireChange} />
                    </div>
                </div>
                <div className="form-input employees-demography-region">
                    <div className="form-input-container employees">
                        <label htmlFor="employees">Employees</label>
                        <input type="text" name='employees' id='employees' onChange={handleQuestionnaireChange} />
                    </div>
                    <div className="form-input-container demography">
                        <label htmlFor="demography">Demography</label>
                        <input type="text" id='demography' name='demography' onChange={handleQuestionnaireChange}/>
                    </div>
                    <div className="form-input-container region">
                        <label htmlFor="region">Region</label>
                        <input type="text" name='region' id='region' onChange={handleQuestionnaireChange} />
                    </div>
                </div>
                <div className="form-input residence-country">
                    <div className="form-input-container residence-status">
                        <label htmlFor="residency_status">Residency Status</label>
                        <select name="resisdency_status" id="residency_status">
                            <option value="citizen">Citizen</option>
                            <option value="permanent_resident">Permanent Resident</option>
                            <option value="work_visa">Work Visa</option>
                        </select>
                    </div>
                    <div className="form-input-container resident-country">
                        <label htmlFor="resident_country">Country</label>
                        <input type="text" id='resident_country' name='resident_country' onChange={handleQuestionnaireChange} />
                    </div>
                </div>
                <div className="form-input lawyer-accountant-banker">
                    <div className="form-input-container lawyer">
                        <label htmlFor="lawyer">Do you have a Lawyer?</label>
                        <select name="lawyer" id="lawyer">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="form-input-container accountant">
                        <label htmlFor="">Do you have an Accountant?</label>
                        <select name="accountant" id="accountant">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="form-input-container banker">
                        <label htmlFor="banker">Do you have a personal Banker?</label>
                        <select name="banker" id="banker">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                </div>
                <div className="submit-container">
                    <input type="submit" value="Submit" />
                </div>      
            </form>
        </div>
    )
}

export default IdeaStageQuestionnaire
