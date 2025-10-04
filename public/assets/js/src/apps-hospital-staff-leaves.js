import{c as S,i as L}from"../../admin.bundle-DI9_jvUJ.js";/* empty css                               */import"../../main-d77jCppw.js";document.addEventListener("DOMContentLoaded",function(){const d=[{id:"PEA-15015",leaveType:"Vacation",startDate:"15 June, 2024",endDate:"21 June, 2024",days:7,reason:"Family vacation",approvedBy:"",requestDate:"12 June, 2024",approvedDate:"14 June, 2024",status:"Pending"},{id:"PEA-15016",leaveType:"Sick Leave",startDate:"10 July, 2024",endDate:"14 July, 2024",days:5,reason:"Medical",approvedBy:"HR",requestDate:"8 July, 2024",approvedDate:"9 July, 2024",status:"Approved"},{id:"PEA-15017",leaveType:"Personal",startDate:"1 Aug, 2024",endDate:"3 Aug, 2024",days:3,reason:"Personal reasons",approvedBy:"Manager",requestDate:"28 July, 2024",approvedDate:"30 July, 2024",status:"Approved"},{id:"PEA-15018",leaveType:"Vacation",startDate:"20 Aug, 2024",endDate:"27 Aug, 2024",days:8,reason:"Travel",approvedBy:"",requestDate:"15 Aug, 2024",approvedDate:"18 Aug, 2024",status:"Pending"},{id:"PEA-15019",leaveType:"Maternity Leave",startDate:"5 Sep, 2024",endDate:"5 Sep, 2024",days:1,reason:"Mom Birthday",approvedBy:"HR",requestDate:"1 Sep, 2024",approvedDate:"3 Sep, 2024",status:"Approved"},{id:"PEA-15020",leaveType:"Sick Leave",startDate:"12 Sep, 2024",endDate:"16 Sep, 2024",days:5,reason:"Surgery recovery",approvedBy:"",requestDate:"10 Sep, 2024",approvedDate:"11 Sep, 2024",status:"Pending"},{id:"PEA-15021",leaveType:"Vacation",startDate:"1 Oct, 2024",endDate:"10 Oct, 2024",days:10,reason:"Honeymoon",approvedBy:"Admin",requestDate:"25 Sep, 2024",approvedDate:"28 Sep, 2024",status:"Approved"},{id:"PEA-15022",leaveType:"Personal",startDate:"20 Oct, 2024",endDate:"22 Oct, 2024",days:3,reason:"Personal reasons",approvedBy:"Manager",requestDate:"18 Oct, 2024",approvedDate:"19 Oct, 2024",status:"Rejected"},{id:"PEA-15023",leaveType:"Sick Leave",startDate:"5 Nov, 2024",endDate:"7 Nov, 2024",days:3,reason:"Flu",approvedBy:"HR",requestDate:"3 Nov, 2024",approvedDate:"4 Nov, 2024",status:"Approved"},{id:"PEA-15024",leaveType:"Vacation",startDate:"15 Nov, 2024",endDate:"22 Nov, 2024",days:8,reason:"Holiday",approvedBy:"",requestDate:"10 Nov, 2024",approvedDate:"12 Nov, 2024",status:"Pending"},{id:"PEA-15025",leaveType:"Personal",startDate:"5 Dec, 2024",endDate:"6 Dec, 2024",days:2,reason:"Personal matter",approvedBy:"Manager",requestDate:"1 Dec, 2024",approvedDate:"3 Dec, 2024",status:"Approved"}];let o=1;const u=10;let f=Math.ceil(d.length/u),i=[...d],y="id",v="asc";A(),l(i,o),p(),w(),k(),P(),M();function A(){document.querySelectorAll("thead th").forEach(t=>{if(t.textContent.trim()==="Actions")return;t.textContent.trim().toLowerCase().replace(/\s+/g,""),t.style.cursor="pointer",t.classList.add("sortable");const a=document.createElement("span");a.className="sort-indicator ms-2",a.innerHTML='<i data-lucide="arrow-up" class="size-3 d-none"></i><i data-lucide="arrow-down" class="size-3 d-none"></i>',t.appendChild(a),t.addEventListener("click",function(){const n=I(t.textContent.trim());y===n?v=v==="asc"?"desc":"asc":(y=n,v="asc"),h(n,v),E(t),o=1,l(i,o),p()})}),S({icons:L})}function E(e){document.querySelectorAll("thead th.sortable").forEach(a=>{const n=a.querySelector('[data-lucide="arrow-up"]'),s=a.querySelector('[data-lucide="arrow-down"]');a===e?v==="asc"?(n.classList.remove("d-none"),s.classList.add("d-none")):(n.classList.add("d-none"),s.classList.remove("d-none")):(n.classList.add("d-none"),s.classList.add("d-none"))})}function I(e){return{ID:"id","Leave Type":"leaveType","Start Date":"startDate","End Date":"endDate",Days:"days",Reason:"reason","Approved By":"approvedBy","Request Date":"requestDate","Approved Date":"approvedDate",Status:"status"}[e]||e.toLowerCase()}function h(e,t){i.sort((a,n)=>{let s=a[e],c=n[e];return(e==="startDate"||e==="endDate"||e==="requestDate"||e==="approvedDate")&&(s=b(s),c=b(c)),e==="days"?(s=parseInt(s,10),c=parseInt(c,10),t==="asc"?s-c:c-s):s<c?t==="asc"?-1:1:s>c?t==="asc"?1:-1:0})}function b(e){if(!e)return new Date(0);const t=e.split(" ");if(t.length<3)return new Date(0);const a=parseInt(t[0],10),n=t[1].replace(",",""),s=parseInt(t[2],10),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].findIndex(g=>n.startsWith(g));return new Date(s,r,a)}function l(e,t){const a=document.querySelector("tbody");if(a.innerHTML="",e.length===0){const r=document.createElement("tr");r.innerHTML=`
                <td colspan="11" class="text-center py-4">
                    <div class="d-flex flex-column align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="mx-auto size-12" viewBox="0 0 48 48">
                            <linearGradient id="SVGID_1" x1="34.598" x2="15.982" y1="15.982" y2="34.598" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#60e8fe"></stop>
                                <stop offset=".033" stop-color="#6ae9fe"></stop>
                                <stop offset=".197" stop-color="#97f0fe"></stop>
                                <stop offset=".362" stop-color="#bdf5ff"></stop>
                                <stop offset=".525" stop-color="#dafaff"></stop>
                                <stop offset=".687" stop-color="#eefdff"></stop>
                                <stop offset=".846" stop-color="#fbfeff"></stop>
                                <stop offset="1" stop-color="#ffffff"></stop>
                            </linearGradient>
                            <path fill="url(#SVGID_1)" d="M40.036,33.826L31.68,25.6c0.847-1.739,1.335-3.684,1.335-5.748
                                c0-7.27-5.894-13.164-13.164-13.164S6.688,12.582,6.688,19.852c0,7.27,5.894,13.164,13.164,13.164
                                c2.056,0,3.995-0.485,5.728-1.326l3.914,4.015l4.331,4.331c1.715,1.715,4.496,1.715,6.211,0
                                C41.751,38.321,41.751,35.541,40.036,33.826z">
                            </path>
                            <path fill="none" stroke="#10cfe3" stroke-linecap="round" stroke-linejoin="round"
                                stroke-miterlimit="10" stroke-width="3"
                                d="M31.95,25.739l8.086,8.086c1.715,1.715,1.715,4.496,0,6.211l0,0c-1.715,1.715-4.496,1.715-6.211,0l-4.331-4.331">
                            </path>
                            <path fill="none" stroke="#10cfe3" stroke-linecap="round" stroke-linejoin="round"
                                stroke-miterlimit="10" stroke-width="3"
                                d="M7.525,24.511c-1.771-4.694-0.767-10.196,3.011-13.975c3.847-3.847,9.48-4.817,14.228-2.912">
                            </path>
                            <path fill="none" stroke="#10cfe3" stroke-linecap="round" stroke-linejoin="round"
                                stroke-miterlimit="10" stroke-width="3"
                                d="M30.856,12.603c3.376,5.114,2.814,12.063-1.688,16.565c-4.858,4.858-12.565,5.129-17.741,0.814">
                            </path>
                        </svg>
                        <p class="mt-2 text-center text-gray-500 dark:text-dark-500">No matching records found</p>
                        <p class="text-muted mb-0">We couldn't find any categories matching your search.</p>
                    </div>
                </td>
            `,a.appendChild(r),document.querySelector("#paginationResult").style.display="none";return}else document.querySelector("#paginationResult").style.display="flex";const n=(t-1)*u,s=Math.min(n+u,e.length);e.slice(n,s).forEach(r=>{const g=document.createElement("tr");let D="";r.status==="Approved"?D="bg-success-subtle text-success border border-success-subtle":r.status==="Pending"?D="bg-warning-subtle text-warning border border-warning-subtle":r.status==="Rejected"&&(D="bg-danger-subtle text-danger border border-danger-subtle"),g.innerHTML=`
                <td>${r.id}</td>
                <td>${r.leaveType}</td>
                <td>${r.startDate}</td>
                <td>${r.endDate}</td>
                <td>${r.days}</td>
                <td>${r.reason}</td>
                <td>${r.approvedBy}</td>
                <td>${r.requestDate}</td>
                <td>${r.approvedDate}</td>
                <td>
                    <span class="badge ${D}">${r.status}</span>
                </td>
                <td>
                    <div class="d-flex align-items-center gap-2">
                        <button class="btn btn-light size-8 btn-icon edit-btn" data-id="${r.id}"><i class="ri-pencil-line"></i></button>
                        <button class="btn btn-sub-success size-8 btn-icon approve-btn" data-id="${r.id}"><i class="ri-check-line"></i></button>
                        <button class="btn btn-sub-danger size-8 btn-icon reject-btn" data-id="${r.id}"><i class="ri-close-line"></i></button>
                    </div>
                </td>
            `,a.appendChild(g)}),x(e),B()}function x(e){const t=e.length,a=t>0?(o-1)*u+1:0,n=Math.min(o*u,t);document.querySelector("#showingResults p").innerHTML=`Showing <b class="me-1">${a}-${n}</b>of<b class="ms-1">${t}</b> Results`}function p(){f=Math.max(1,Math.ceil(i.length/u)),o>f&&(o=f);const e=document.querySelector(".pagination");e.innerHTML="";const t=document.createElement("li");t.className=`page-item ${o===1?"disabled":""}`,t.innerHTML='<a class="page-link" href="#!"><i data-lucide="chevron-left" class="size-4"></i> Previous</a>',e.appendChild(t),t.addEventListener("click",function(){o>1&&(o--,l(i,o),p())});for(let n=1;n<=Math.min(f,3);n++){const s=document.createElement("li");s.className=`page-item ${o===n?"active":""}`,s.innerHTML=`<a class="page-link" href="#!">${n}</a>`,e.appendChild(s),s.addEventListener("click",function(){o=n,l(i,o),p()})}const a=document.createElement("li");a.className=`page-item ${o===f?"disabled":""}`,a.innerHTML='<a class="page-link" href="#!">Next <i data-lucide="chevron-right" class="size-4"></i></a>',e.appendChild(a),a.addEventListener("click",function(){o<f&&(o++,l(i,o),p())}),S({icons:L})}function w(){const e=document.getElementById("statusSelect");e.innerHTML=`
            <select class="form-select" id="statusFilter">
                <option value="">All Status</option>
                <option value="Approved">Approved</option>
                <option value="Pending">Pending</option>
                <option value="Rejected">Rejected</option>
            </select>
        `,document.getElementById("statusFilter").addEventListener("change",m)}function k(){document.querySelector('input[placeholder="Select Data Range"]').addEventListener("click",function(){this.getAttribute("data-active")==="true"?this.setAttribute("data-active","false"):this.setAttribute("data-active","true")})}function P(){document.getElementById("searchLeaveInput").addEventListener("input",function(){m()})}function M(){document.querySelector("#filterNow").addEventListener("click",function(){m()})}function m(){const e=document.getElementById("searchLeaveInput").value.toLowerCase(),t=document.getElementById("statusFilter").value;i=d.filter(a=>{const n=a.id.toLowerCase().includes(e)||a.leaveType.toLowerCase().includes(e)||a.reason.toLowerCase().includes(e),s=t===""||a.status===t;return n&&s}),o=1,y&&h(y,v),l(i,o),p()}function B(){document.querySelectorAll(".approve-btn").forEach(e=>{e.addEventListener("click",function(){const t=this.getAttribute("data-id"),a=d.findIndex(n=>n.id===t);if(a!==-1){d[a].status="Approved",d[a].approvedBy="Lucas Ethan",d[a].approvedDate=new Date().toLocaleDateString("en-US",{day:"numeric",month:"short",year:"numeric"});const n=i.findIndex(s=>s.id===t);n!==-1&&(i[n]={...d[a]}),l(i,o),p()}})}),document.querySelectorAll(".reject-btn").forEach(e=>{e.addEventListener("click",function(){const t=this.getAttribute("data-id"),a=d.findIndex(n=>n.id===t);if(a!==-1){d[a].status="Rejected";const n=i.findIndex(s=>s.id===t);n!==-1&&(i[n]={...d[a]}),l(i,o),p()}})})}window.testNoRecordsFound=function(){document.getElementById("searchLeaveInput").value="nonexistentrecord",m()}});
