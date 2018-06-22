import React from 'react';
import moment from 'moment';







const Work = (props) => {

  
  const getWork = props.workData.map(function(item, index) {
     let getEndDate;
     const startDate = moment(item.startDate).format('MMM, YYYY');
     if (item.endDate == '') {
       getEndDate = "Present"
     }else {
       getEndDate = moment(item.endDate).format('MMM, YYYY');
     }
    
   
      const listItems = item.environments.map((number) =>
        <li key={number}>{number}</li>
      );

     return (
         <div className="box-list__box" key={index}>
           <h3 className="section-box-title">{item.company}</h3>
           <div>{startDate} - {getEndDate}</div>
           <span>{item.position},{item.location}</span>
           <div>{item.summary}</div>
           <br/>
           <div>
              Environments:
              <ul>{listItems}</ul>
           </div>
         </div>
     )
  });

  return  (
    <section className="section section__work">
      <h2 className="section__title">Work</h2>
      <div className="section-content">
        <div className="box-list">
          {getWork}
        </div>
      </div>
    </section>
  );
};

export default Work;
