import{c as C,i as S}from"../../admin.bundle-DI9_jvUJ.js";import"../../main-d77jCppw.js";const h=[{id:1,logo:"assets/images/brands/img-02.png",title:"Marketing Strategy Review",amount:12500,date:"15 Apr 2024",company:"MarketBoost Inc.",description:"Review and update marketing strategies for Q2.",status:{expired:!0,active:!0}},{id:2,logo:"assets/images/brands/img-03.png",title:"Product Launch Event",amount:2e4,date:"11 Jun 2024",company:"TechNex Corporation",description:"Plan and execute the launch event for our new product line.",status:{expired:!0,active:!1}},{id:3,logo:"assets/images/brands/img-04.png",title:"Quarterly Financial Review",amount:18200,date:"28 May 2024",company:"FinanceWise Ltd.",description:"Review financial performance for the first quarter of 2024.",status:{expired:!0,active:!0}},{id:4,logo:"assets/images/brands/img-05.png",title:"Client Meeting",amount:8500,date:"05 Jun 2024",company:"Client Solutions Inc.",description:"Meeting with potential clients to discuss project requirements.",status:{expired:!0,active:!1}},{id:5,logo:"assets/images/brands/img-06.png",title:"Website Redesign",amount:14e3,date:"01 May 2024",company:"WebWorks Ltd.",description:"Redesign the company website for better user experience.",status:{expired:!0,active:!0}},{id:6,logo:"assets/images/brands/img-07.png",title:"Employee Training Program",amount:1e4,date:"01 Jun 2024",company:"TalentHub Solutions",description:"Develop and implement a comprehensive training program for employees.",status:{expired:!0,active:!0}},{id:7,logo:"assets/images/brands/img-08.png",title:"Social Media Campaign",amount:16500,date:"10 May 2024",company:"SocialNet Inc.",description:"Launch a targeted social media campaign to increase brand visibility.",status:{expired:!0,active:!1}},{id:8,logo:"assets/images/brands/img-09.png",title:"Supply Chain Optimization",amount:22e3,date:"01 Jun 2024",company:"LogiTech Solutions",description:"Optimize the supply chain to reduce costs and improve efficiency.",status:{expired:!0,active:!1}},{id:9,logo:"assets/images/brands/img-02.png",title:"Data Analysis Project",amount:17500,date:"20 Jun 2024",company:"DataSmart Analytics",description:"Analyze customer data to identify trends and opportunities.",status:{expired:!1,active:!0}},{id:10,logo:"assets/images/brands/img-03.png",title:"Mobile App Development",amount:25e3,date:"30 Jul 2024",company:"AppGenius Ltd.",description:"Develop a mobile application for customer engagement.",status:{expired:!1,active:!0}},{id:11,logo:"assets/images/brands/img-04.png",title:"Cloud Migration",amount:3e4,date:"15 Aug 2024",company:"CloudTech Solutions",description:"Migrate company infrastructure to cloud-based services.",status:{expired:!1,active:!0}},{id:12,logo:"assets/images/brands/img-05.png",title:"SEO Optimization",amount:9500,date:"01 Jul 2024",company:"SearchPro Consulting",description:"Optimize website for better search engine rankings.",status:{expired:!1,active:!0}},{id:13,logo:"assets/images/brands/img-06.png",title:"Customer Feedback Analysis",amount:13200,date:"22 Jul 2024",company:"FeedbackPro Inc.",description:"Analyze customer feedback and implement improvements.",status:{expired:!1,active:!0}},{id:14,logo:"assets/images/brands/img-07.png",title:"Cybersecurity Audit",amount:19800,date:"10 Aug 2024",company:"SecureNet Technologies",description:"Conduct a comprehensive audit of cybersecurity measures.",status:{expired:!1,active:!0}},{id:15,logo:"assets/images/brands/img-08.png",title:"Content Creation Strategy",amount:11500,date:"25 Jun 2024",company:"ContentWise Media",description:"Develop a content creation and distribution strategy.",status:{expired:!1,active:!0}},{id:16,logo:"assets/images/brands/img-09.png",title:"HR Systems Integration",amount:15700,date:"05 Jul 2024",company:"HRTech Solutions",description:"Integrate various HR systems for better efficiency.",status:{expired:!1,active:!0}},{id:17,logo:"assets/images/brands/img-02.png",title:"Business Expansion Plan",amount:29e3,date:"15 Sep 2024",company:"GrowthMax Consulting",description:"Develop a comprehensive plan for business expansion.",status:{expired:!1,active:!0}},{id:18,logo:"assets/images/brands/img-03.png",title:"Financial Forecasting",amount:21500,date:"01 Sep 2024",company:"ForecastPro Finance",description:"Create financial forecasts for the upcoming fiscal year.",status:{expired:!1,active:!0}},{id:19,logo:"assets/images/brands/img-04.png",title:"Customer Onboarding Optimization",amount:12800,date:"20 Aug 2024",company:"OnboardPro Solutions",description:"Optimize the customer onboarding process for better retention.",status:{expired:!1,active:!0}},{id:20,logo:"assets/images/brands/img-05.png",title:"Vendor Management System",amount:18900,date:"10 Sep 2024",company:"VendorTech Systems",description:"Implement a new vendor management system for better collaboration.",status:{expired:!1,active:!0}}];document.addEventListener("DOMContentLoaded",()=>{let a=1,l=[...h],p=Math.ceil(h.length/8);const y=document.getElementById("searchDealInput");y&&y.addEventListener("input",M),x(a),k(a,p);function M(s){const o=s.target.value.toLowerCase().trim();o===""?l=[...h]:l=h.filter(r=>r.title.toLowerCase().includes(o)||r.company.toLowerCase().includes(o)||r.description.toLowerCase().includes(o)||r.date.toLowerCase().includes(o)||r.amount.toString().includes(o)),a=1,p=Math.ceil(l.length/8),x(a),k(a,p)}function x(s){const o=(s-1)*8,r=Math.min(o+8,l.length),b=l.slice(o,r),m=document.querySelector("#gridView .row:not(:last-child)");if(m.innerHTML="",b.length===0){const i=document.createElement("div");i.className="col-12 text-center py-5",i.innerHTML=`
            <div class="d-flex flex-column align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="mx-auto size-12" viewBox="0 0 48 48">
                <linearGradient id="SVGID_1__h35ynqzIJzH4_gr1" x1="34.598" x2="15.982" y1="15.982" y2="34.598" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#60e8fe"></stop>
                  <stop offset=".033" stop-color="#6ae9fe"></stop>
                  <stop offset=".197" stop-color="#97f0fe"></stop>
                  <stop offset=".362" stop-color="#bdf5ff"></stop>
                  <stop offset=".525" stop-color="#dafaff"></stop>
                  <stop offset=".687" stop-color="#eefdff"></stop>
                  <stop offset=".846" stop-color="#fbfeff"></stop>
                  <stop offset="1" stop-color="#fff"></stop>
                </linearGradient>
                <path fill="url(#SVGID_1__h35ynqzIJzH4_gr1)" d="M40.036,33.826L31.68,25.6c0.847-1.739,1.335-3.684,1.335-5.748c0-7.27-5.894-13.164-13.164-13.164S6.688,12.582,6.688,19.852c0,7.27,5.894,13.164,13.164,13.164c2.056,0,3.995-0.485,5.728-1.326l3.914,4.015l4.331,4.331c1.715,1.715,4.496,1.715,6.211,0C41.751,38.321,41.751,35.541,40.036,33.826z"></path>
                <path fill="none" stroke="#10cfe3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M31.95,25.739l8.086,8.086c1.715,1.715,1.715,4.496,0,6.211l0,0c-1.715,1.715-4.496,1.715-6.211,0l-4.331-4.331"></path>
                <path fill="none" stroke="#10cfe3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M7.525,24.511c-1.771-4.694-0.767-10.196,3.011-13.975c3.847-3.847,9.48-4.817,14.228-2.912"></path>
                <path fill="none" stroke="#10cfe3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M30.856,12.603c3.376,5.114,2.814,12.063-1.688,16.565c-4.858,4.858-12.565,5.129-17.741,0.814"></path>
              </svg>
              <p class="mt-2 text-center text-gray-500 dark:text-dark-500">No matching records found</p>
              <p class="text-muted mb-0">We couldn't find any categories matching your search.</p>
            </div>
          `,m.appendChild(i)}else b.forEach(i=>{const e=w(i);m.appendChild(e)});const f=document.querySelector("#pagination-courting-info");l.length>0?f.innerHTML=`Showing <b class="me-1">${o+1}-${r}</b>of<b class="ms-1">${l.length}</b> Results`:f.innerHTML='Showing <b class="me-1">0</b>of<b class="ms-1">0</b> Results'}function w(s){const o=document.createElement("div");return o.className="col-md-6 col-xxl-3",o.innerHTML=`
      <div class="card">
        <div class="card-body">
          <div class="d-flex align-items-center gap-3 mb-4">
            <div class="size-12 rounded border avatar">
              <img src="${s.logo}" loading="lazy" alt="" class="size-7">
            </div>
            <div class="flex-grow-1">
              <h6 class="mb-1"><a href="#!" class="text-reset">${s.title}</a></h6>
              <p class="text-muted"><span>$${s.amount.toLocaleString()}</span><span>- <span>${s.date}</span></span></p>
            </div>
          </div>
          <p class="fw-medium mb-1">${s.company}</p>
          <p class="text-muted">${s.description}</p>
          <div class="d-flex align-items-center gap-2 flex-wrap my-4">
            ${s.status.expired?'<span class="badge bg-pink-subtle text-pink border border-pink-subtle">Expired</span>':""}
            ${s.status.active?'<span class="badge bg-success-subtle text-success border border-success-subtle">Active</span>':'<span class="badge bg-light-subtle text-muted border border-light-subtle">Unactive</span>'}
          </div>
          <div class="d-flex gap-2 align-items-center flex-wrap">
            <button class="btn btn-dashed-warning" data-bs-toggle="modal" data-bs-target="#messageModal"><i class="ri-message-2-line me-1"></i>Message</button>
            <button class="btn btn-dashed-primary" data-bs-toggle="modal" data-bs-target="#callModal2"><i class="ri-phone-line me-1"></i>Call</button>
            <button class="btn btn-light btn-icon"><i data-lucide="trash" class="size-4"></i></button>
          </div>
        </div>
      </div>
    `,o}function k(s,o){const r=document.querySelector(".pagination");r.innerHTML="";const b=document.createElement("li");b.className=`page-item ${s===1?"disabled":""}`,b.innerHTML='<a class="page-link" href="#!"><i data-lucide="chevron-left" class="size-4"></i> Previous</a>',r.appendChild(b);for(let i=1;i<=o;i++){const e=document.createElement("li");e.className=`page-item ${s===i?"active":""}`,e.innerHTML=`<a class="page-link" href="#!" data-page="${i}">${i}</a>`,r.appendChild(e)}const m=document.createElement("li");m.className=`page-item ${s===o?"disabled":""}`,m.innerHTML='<a class="page-link" href="#!">Next <i data-lucide="chevron-right" class="size-4"></i></a>',r.appendChild(m),r.querySelectorAll(".page-link").forEach(i=>{i.addEventListener("click",e=>{e.preventDefault(),i.textContent.includes("Previous")&&s>1?g(s-1):i.textContent.includes("Next")&&s<o?g(s+1):i.dataset.page&&g(parseInt(i.dataset.page))})}),C({icons:S})}function g(s){a=s,x(a),k(a,p)}});document.addEventListener("DOMContentLoaded",()=>{let a=1,l=[...h],p=Math.ceil(h.length/8);const y=document.getElementById("searchDealInput");y&&y.addEventListener("input",k);const M=document.getElementById("grid-view-tab"),x=document.getElementById("list-view-tab");let w="grid";M&&x&&(M.addEventListener("click",()=>{w="grid",g(a),f(a,p)}),x.addEventListener("click",()=>{w="list",g(a),f(a,p)})),g(a),f(a,p);function k(e){const t=e.target.value.toLowerCase().trim();t===""?l=[...h]:l=h.filter(c=>c.title.toLowerCase().includes(t)||c.company.toLowerCase().includes(t)||c.description.toLowerCase().includes(t)||c.date.toLowerCase().includes(t)||c.amount.toString().includes(t)),a=1,p=Math.ceil(l.length/8),g(a),f(a,p)}function g(e){const t=(e-1)*8,c=Math.min(t+8,l.length),n=l.slice(t,c);w==="grid"?s(n,t,c):o(n,t,c)}function s(e,t,c){const n=document.querySelector("#gridView .row:not(:last-child)");if(n){if(n.innerHTML="",e.length===0){const d=document.createElement("div");d.className="col-12 text-center py-5",d.innerHTML=`
            <div class="d-flex flex-column align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="mx-auto size-12" viewBox="0 0 48 48">
                <linearGradient id="SVGID_1__h35ynqzIJzH4_gr1" x1="34.598" x2="15.982" y1="15.982" y2="34.598" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#60e8fe"></stop>
                  <stop offset=".033" stop-color="#6ae9fe"></stop>
                  <stop offset=".197" stop-color="#97f0fe"></stop>
                  <stop offset=".362" stop-color="#bdf5ff"></stop>
                  <stop offset=".525" stop-color="#dafaff"></stop>
                  <stop offset=".687" stop-color="#eefdff"></stop>
                  <stop offset=".846" stop-color="#fbfeff"></stop>
                  <stop offset="1" stop-color="#fff"></stop>
                </linearGradient>
                <path fill="url(#SVGID_1__h35ynqzIJzH4_gr1)" d="M40.036,33.826L31.68,25.6c0.847-1.739,1.335-3.684,1.335-5.748c0-7.27-5.894-13.164-13.164-13.164S6.688,12.582,6.688,19.852c0,7.27,5.894,13.164,13.164,13.164c2.056,0,3.995-0.485,5.728-1.326l3.914,4.015l4.331,4.331c1.715,1.715,4.496,1.715,6.211,0C41.751,38.321,41.751,35.541,40.036,33.826z"></path>
                <path fill="none" stroke="#10cfe3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M31.95,25.739l8.086,8.086c1.715,1.715,1.715,4.496,0,6.211l0,0c-1.715,1.715-4.496,1.715-6.211,0l-4.331-4.331"></path>
                <path fill="none" stroke="#10cfe3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M7.525,24.511c-1.771-4.694-0.767-10.196,3.011-13.975c3.847-3.847,9.48-4.817,14.228-2.912"></path>
                <path fill="none" stroke="#10cfe3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M30.856,12.603c3.376,5.114,2.814,12.063-1.688,16.565c-4.858,4.858-12.565,5.129-17.741,0.814"></path>
              </svg>
              <p class="mt-2 text-center text-gray-500 dark:text-dark-500">No matching records found</p>
              <p class="text-muted mb-0">We couldn't find any categories matching your search.</p>
            </div>
          `,n.appendChild(d)}else e.forEach(d=>{const v=r(d);n.appendChild(v)});m(t,c)}}function o(e,t,c){const n=document.querySelector("#listView .row:not(:last-child)");if(n){if(n.innerHTML="",e.length===0){const d=document.createElement("div");d.className="col-12 text-center py-5",d.innerHTML=`
            <div class="d-flex flex-column align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="mx-auto size-12" viewBox="0 0 48 48">
                <linearGradient id="SVGID_1__h35ynqzIJzH4_gr1" x1="34.598" x2="15.982" y1="15.982" y2="34.598" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#60e8fe"></stop>
                  <stop offset=".033" stop-color="#6ae9fe"></stop>
                  <stop offset=".197" stop-color="#97f0fe"></stop>
                  <stop offset=".362" stop-color="#bdf5ff"></stop>
                  <stop offset=".525" stop-color="#dafaff"></stop>
                  <stop offset=".687" stop-color="#eefdff"></stop>
                  <stop offset=".846" stop-color="#fbfeff"></stop>
                  <stop offset="1" stop-color="#fff"></stop>
                </linearGradient>
                <path fill="url(#SVGID_1__h35ynqzIJzH4_gr1)" d="M40.036,33.826L31.68,25.6c0.847-1.739,1.335-3.684,1.335-5.748c0-7.27-5.894-13.164-13.164-13.164S6.688,12.582,6.688,19.852c0,7.27,5.894,13.164,13.164,13.164c2.056,0,3.995-0.485,5.728-1.326l3.914,4.015l4.331,4.331c1.715,1.715,4.496,1.715,6.211,0C41.751,38.321,41.751,35.541,40.036,33.826z"></path>
                <path fill="none" stroke="#10cfe3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M31.95,25.739l8.086,8.086c1.715,1.715,1.715,4.496,0,6.211l0,0c-1.715,1.715-4.496,1.715-6.211,0l-4.331-4.331"></path>
                <path fill="none" stroke="#10cfe3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M7.525,24.511c-1.771-4.694-0.767-10.196,3.011-13.975c3.847-3.847,9.48-4.817,14.228-2.912"></path>
                <path fill="none" stroke="#10cfe3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M30.856,12.603c3.376,5.114,2.814,12.063-1.688,16.565c-4.858,4.858-12.565,5.129-17.741,0.814"></path>
              </svg>
              <p class="mt-2 text-center text-gray-500 dark:text-dark-500">No matching records found</p>
              <p class="text-muted mb-0">We couldn't find any categories matching your search.</p>
            </div>
          `,n.appendChild(d)}else e.forEach(d=>{const v=b(d);n.appendChild(v)});m(t,c)}}function r(e){const t=document.createElement("div");return t.className="col-md-6 col-xxl-3",t.innerHTML=`
      <div class="card">
        <div class="card-body">
          <div class="d-flex align-items-center gap-3 mb-4">
            <div class="size-12 rounded border avatar">
              <img src="${e.logo}" loading="lazy" alt="" class="size-7">
            </div>
            <div class="flex-grow-1">
              <h6 class="mb-1"><a href="#!" class="text-reset">${e.title}</a></h6>
              <p class="text-muted"><span>$${e.amount.toLocaleString()}</span><span>- <span>${e.date}</span></span></p>
            </div>
          </div>
          <p class="fw-medium mb-1">${e.company}</p>
          <p class="text-muted">${e.description}</p>
          <div class="d-flex align-items-center gap-2 flex-wrap my-4">
            ${e.status.expired?'<span class="badge bg-pink-subtle text-pink border border-pink-subtle">Expired</span>':""}
            ${e.status.active?'<span class="badge bg-success-subtle text-success border border-success-subtle">Active</span>':'<span class="badge bg-light-subtle text-muted border border-light-subtle">Unactive</span>'}
          </div>
          <div class="d-flex gap-2 align-items-center flex-wrap">
            <button class="btn btn-dashed-warning" data-bs-toggle="modal" data-bs-target="#messageModal"><i class="ri-message-2-line me-1"></i>Message</button>
            <button class="btn btn-dashed-primary" data-bs-toggle="modal" data-bs-target="#callModal2"><i class="ri-phone-line me-1"></i>Call</button>
            <button class="btn btn-light btn-icon"><i data-lucide="trash" class="size-4"></i></button>
          </div>
        </div>
      </div>
    `,t}function b(e){const t=document.createElement("div");return t.className="col-12",t.innerHTML=`
      <div class="card">
        <div class="card-body d-flex flex-column flex-md-row justify-content-between gap-2 gap-md-5 text-nowrap">
          <div class="d-flex align-items-center gap-3">
            <div class="size-12 rounded border avatar">
              <img src="${e.logo}" loading="lazy" alt="" class="size-7">
            </div>
            <div class="flex-grow-1">
              <h6 class="mb-1"><a href="#!" class="text-reset">${e.title}</a></h6>
              <p class="text-muted">$${e.amount.toLocaleString()}</p>
            </div>
          </div>
          <p class="min-w-28 text-truncate text-muted">${e.date}</p>
          <p class="min-w-28 text-truncate text-muted">${e.company}</p>
          <div class="d-flex gap-2 w-28">
            ${e.status.expired?'<div><span class="badge bg-pink-subtle text-pink border border-pink-subtle">Expired</span></div>':""}
            ${e.status.active?'<div><span class="badge bg-success-subtle text-success border border-success-subtle">Active</span></div>':'<div><span class="badge bg-light-subtle text-muted border border-light-subtle">Unactive</span></div>'}
          </div>
          <div class="d-flex gap-2 align-items-center flex-wrap">
            <button class="btn btn-dashed-warning" data-bs-toggle="modal" data-bs-target="#messageModal"><i class="ri-message-2-line me-1"></i>Message</button>
            <button class="btn btn-dashed-primary" data-bs-toggle="modal" data-bs-target="#callModal2"><i class="ri-phone-line me-1"></i>Call</button>
            <button class="btn btn-light btn-icon"><i data-lucide="trash" class="size-4"></i></button>
          </div>
        </div>
      </div>
    `,t}function m(e,t){document.querySelectorAll(".text-muted.text-center.text-md-start.mb-0").forEach(n=>{l.length>0?n.innerHTML=`Showing <b class="me-1">${e+1}-${t}</b>of<b class="ms-1">${l.length}</b> Results`:n.innerHTML='Showing <b class="me-1">0</b>of<b class="ms-1">0</b> Results'})}function f(e,t){document.querySelectorAll(".pagination").forEach(n=>{n.innerHTML="";const d=document.createElement("li");d.className=`page-item ${e===1?"disabled":""}`,d.innerHTML='<a class="page-link" href="#!"><i data-lucide="chevron-left" class="size-4"></i> Previous</a>',n.appendChild(d);for(let u=1;u<=t;u++){const L=document.createElement("li");L.className=`page-item ${e===u?"active":""}`,L.innerHTML=`<a class="page-link" href="#!" data-page="${u}">${u}</a>`,n.appendChild(L)}const v=document.createElement("li");v.className=`page-item ${e===t||t===0?"disabled":""}`,v.innerHTML='<a class="page-link" href="#!">Next <i data-lucide="chevron-right" class="size-4"></i></a>',n.appendChild(v),n.querySelectorAll(".page-link").forEach(u=>{u.addEventListener("click",L=>{L.preventDefault(),u.textContent.includes("Previous")&&e>1?i(e-1):u.textContent.includes("Next")&&e<t?i(e+1):u.dataset.page&&i(parseInt(u.dataset.page))})})}),C({icons:S})}function i(e){a=e,g(a),f(a,p)}});
