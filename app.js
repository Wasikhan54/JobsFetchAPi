// function data() {
//     fetch('https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=40&pageNo=2&keyWord=&category=')
//         .then(response => response.json())
//         .then(data => {
//             const jobListingsContainer = document.querySelector('#job-listings');
//             const result = data.data;

//             result.forEach(element => {
//                 const card = document.createElement('div');
//                 card.className = 'col-md-6';

//                 const cardContent = `
//                     <div class="card">
//                         <div class="card-body">
//                             <div class="name">
//                                 <div class="username">${element.companyName}</div>
//                                 <img src="/images/M.png" alt="Company Logo">
//                             </div>
//                             <h5 class="card-title">${element.designation}</h5>
//                             <p class="card-text">RS ${element.payRangeStart}</p>
//                             <p class="card-text">Location: ${element.location || 'N/A'}</p>
//                             <div class="name">
//                                 <p class="time">${calculateHoursDifference(element.updatedAt)} hours ago</p>
//                                 <p class="views">${element.views} views</p>
//                             </div>
//                         </div>
//                     </div>
//                 `;

//                 card.innerHTML = cardContent;
//                 jobListingsContainer.appendChild(card);
//             });
//         })
//         .catch(error => console.error('Error fetching job data:', error));
// }

// function calculateHoursDifference(updatedAt) {
//     const updatedAtDate = new Date(updatedAt);
//     const now = new Date();
//     const hoursDifference = Math.floor((now - updatedAtDate) / (1000 * 60 * 60));
//     return hoursDifference;
// }

// data();
function data() {
    fetch('https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=40&pageNo=2&keyWord=&category=')
            .then(response => response.json())
            .then(data => {

                const jobsList = document.querySelector("#job-listings");
                const result = data.data;
                result.forEach(element => {
                   const card = document.createElement('div');
                   card.className = "col-md-6";                    

                   const cardContent = ` <div class="card">
                        <div class="card-body">
                            <div class="name">
                                <div class="username">${element.companyName}</div>
                                <img src="/images/M.png" alt="Company Logo">
                            </div>
                            <h5 class="card-title">${element.designation}</h5>
                            <p class="card-text" style =' color:   rgb(104, 81, 255); Font-weight:600 ;' >RS ${element.payRangeStart || 'not mention' }</p>
                            <p class="card-text" style ='margin-top:30px; Font-weight:600 ;'>Location: ${element.city   || 'N/A'} ${ element.country} </p>
                            <div class="name">
                                 <p class="time">${calculateTimeDifference(element.updatedAt)} ago</p>
                                <p class="views">${element.views} views</p>
                            </div>
                        </div>
                    </div>`;
                    card.innerHTML = cardContent;
                    jobsList.appendChild(card);
                });

            })
            .catch(error => console.error('Error fetching job data:', error));
            }
            
            function calculateTimeDifference(updatedAt) {
                const updatedAtDate = new Date(updatedAt);
                const now = new Date();
                const timeDifference = now - updatedAtDate;
                const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
            
                if (hoursDifference >= 24) {
                    const daysDifference = Math.floor(hoursDifference / 24);
                    return `${daysDifference} day${daysDifference > 1 ? 's' : ''}`;
                }
            
                return `${hoursDifference} hour${hoursDifference > 1 ? 's' : ''}`;
            }
            
            data()