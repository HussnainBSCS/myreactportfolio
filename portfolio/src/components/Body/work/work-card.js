import React from 'react';
import './work-card.css';

function WorkCard ({item}) {
    return <div className="work-card">
        <img src={item.companyLogo} alt="logo" className="work-logo" />
        <div className="work-info">
        <label className="company-name">{item.company} </label>
        <div className="workdates">
            <label><span style={{color: "#01fe87"}}>From:</span> {item.datejoining}</label><label><span style={{color: "#01fe87"}}> To:</span> {item.dateEnd}</label>
        </div>
        <div className="work-desc">
            <p>{item.Work}</p>
        </div>

        </div>
    </div>
}

export default WorkCard
