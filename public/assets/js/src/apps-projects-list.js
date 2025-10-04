import{c as y,i as P}from"../../admin.bundle-DI9_jvUJ.js";/* empty css                               */import{A as w}from"../../air-datepicker-DlUcrly3.js";import{l as A}from"../../en-BXs2wRZT.js";import"../../main-d77jCppw.js";VirtualSelect.init({ele:"#assignedSelect",options:[{label:"Max Boucaut",value:"Max Boucaut"},{label:"Natasha Tegg",value:"Natasha Tegg"},{label:"Ethan Zahel",value:"Ethan Zahel"},{label:"Ryan Frazer",value:"Ryan Frazer"},{label:"Julian Marconi",value:"Julian Marconi"},{label:"Poppy Dalley",value:"Poppy Dalley"}],selectedValue:0,multiple:!0});VirtualSelect.init({ele:"#statusSelect2",options:[{label:"Active",value:"Active"},{label:"On Hold",value:"On Hold"},{label:"Pending",value:"Pending"},{label:"Completed",value:"Completed"}]});VirtualSelect.init({ele:"#filterStatusSelect",options:[{label:"Active",value:"Active"},{label:"On Hold",value:"On Hold"},{label:"Pending",value:"Pending"},{label:"Completed",value:"Completed"}]});VirtualSelect.init({ele:"#filterSelect",options:[{label:"Weekly",value:"Weekly"},{label:"Monthly",value:"Monthly"},{label:"Yearly",value:"Yearly"}]});class D{constructor(e){this.tableContainer=document.querySelector(e.tableContainer||".table-responsive"),this.paginationContainer=document.querySelector(e.paginationContainer||".pagination"),this.searchInput=document.getElementById(e.searchInputId||"searchProjectsInput"),this.itemsPerPage=e.itemsPerPage||10,this.currentPage=1,this.projects=[],this.filteredProjects=[],this.totalPages=0,this.modalId=e.modalId||"addProjectModal",this.modal=null,this.sortColumn=null,this.sortDirection="asc",e.initialData&&(this.projects=e.initialData,this.filteredProjects=[...this.projects]),this.init()}init(){this.modal=new window.bootstrap.Modal(document.getElementById(this.modalId)),this.addEventListeners(),this.updateProgressBarInForm(),this.render()}updateProgressBarInForm(){const e=document.getElementById("progressInput"),t=document.querySelector(".progress .progress-bar");t.style.width="0%",t.parentElement.setAttribute("aria-valuenow",0),e.addEventListener("input",function(){let s=parseInt(this.value)||0;s>100&&(s=100,this.value=100),t.style.width=s+"%",t.parentElement.setAttribute("aria-valuenow",s)})}addEventListeners(){this.searchInput&&this.searchInput.addEventListener("input",this.handleSearch.bind(this));const e=document.querySelector(`#${this.modalId} form`);e&&e.addEventListener("submit",this.handleAddProject.bind(this));const t=document.querySelector(`#${this.modalId} #addProjectBtn`);t&&t.addEventListener("click",this.handleAddProject.bind(this));const s=document.getElementById("checAllData");s&&s.addEventListener("change",this.handleMasterCheckbox.bind(this));const a=document.querySelector(".trash-btn");a&&a.addEventListener("click",this.handleBulkDelete.bind(this)),this.tableContainer.addEventListener("click",this.handleTableActions.bind(this)),this.addSortableHeaderListeners()}addSortableHeaderListeners(){const e=this.tableContainer.querySelectorAll("th[data-sort]");e.length&&e.forEach(t=>{t.style.cursor="pointer",t.addEventListener("click",()=>{const a=t.getAttribute("data-sort");this.sortProjects(a)});const s=document.createElement("span");s.className="sort-indicator ms-1",s.innerHTML="",t.appendChild(s)})}handleSearch(e){const t=e.target.value.toLowerCase();this.filteredProjects=this.projects.filter(s=>s.id.toLowerCase().includes(t)||s.name.toLowerCase().includes(t)||s.client.toLowerCase().includes(t)),this.currentPage=1,this.render()}handleAddProject(e){e.preventDefault(),this.clearValidationErrors();const t=document.getElementById("projectTitleInput").value,s=document.getElementById("clientName").value,a=b.value,r=document.getElementById("totalAmountInput").value;let o=document.getElementById("progressInput").value;const d=document.querySelector("#statusSelect2"),h=d&&d.value?d.value:"Active";let i=!0;if(t.trim()||(this.showValidationError("projectTitleInput","Project title is required"),i=!1),s.trim()||(this.showValidationError("clientName","Client name is required"),i=!1),r&&(isNaN(parseFloat(r))||parseFloat(r)<0)&&(this.showValidationError("totalAmountInput","Please enter a valid amount"),i=!1),o&&(isNaN(parseInt(o))||parseInt(o)<0||parseInt(o)>100)&&(this.showValidationError("progressInput","Progress must be between 0 and 100"),i=!1),!i)return;o=o?Math.min(parseInt(o),100).toString():"0";const l=document.querySelector("#assignedSelect"),p=l?l.value:[];let u=[];Array.isArray(p)&&p.forEach(n=>{n=="Max Boucaut"?u.push("assets/images/avatar/user-14.png"):n=="Poppy Dalley"?u.push("assets/images/avatar/user-17.png"):n=="Ethan Zahel"?u.push("assets/images/avatar/user-16.png"):n=="Ryan Frazer"?u.push("assets/images/avatar/user-18.png"):n=="Natasha Tegg"?u.push("assets/images/avatar/user-15.png"):n=="Julian Marconi"&&u.push("assets/images/avatar/user-20.png")}),u.length===0&&(u=["assets/images/avatar/user-14.png","assets/images/avatar/user-16.png"]);const g=document.querySelector(`#${this.modalId} form`).dataset.editId;if(g){const n=this.projects.findIndex(m=>m.id===g);n!==-1&&(this.projects[n]={...this.projects[n],name:t,client:s,dueDate:a||this.projects[n].dueDate,totalAmount:r?`$${parseInt(r).toLocaleString()}`:this.projects[n].totalAmount,progress:o,assignedTo:u,status:h},this.filteredProjects=[...this.projects],document.getElementById("addProjectModalLabel").textContent="Add Project",document.querySelector(`#${this.modalId} .btn-primary`).textContent="Add Project",delete document.querySelector(`#${this.modalId} form`).dataset.editId)}else{const n={id:`PEP-${Math.floor(1e4+Math.random()*9e4)}`,name:t,client:s,assignedTo:u,dueDate:a||new Date().toLocaleDateString("en-US",{day:"numeric",month:"short",year:"numeric"}),totalAmount:r?`$${parseInt(r).toLocaleString()}`:"$0",progress:o,status:h};this.projects.unshift(n),this.filteredProjects=[...this.projects]}this.modal.hide();const f=document.querySelector(".progress .progress-bar");if(f.style.width="0%",f.parentElement.setAttribute("aria-valuenow",0),document.querySelector(`#${this.modalId} form`).reset(),window.VirtualSelect&&typeof window.VirtualSelect.reset=="function"&&l)try{window.VirtualSelect.reset(l)}catch(n){if(console.warn("Could not reset VirtualSelect assignedSelect:",n),typeof VirtualSelect.setValue=="function")try{VirtualSelect.setValue(l,[])}catch(m){console.warn("Could not setValue for VirtualSelect assignedSelect:",m)}}if(window.VirtualSelect&&typeof window.VirtualSelect.reset=="function"&&d)try{window.VirtualSelect.reset(d)}catch(n){if(console.warn("Could not reset VirtualSelect statusSelect:",n),typeof VirtualSelect.setValue=="function")try{VirtualSelect.setValue(d,"Active")}catch(m){console.warn("Could not setValue for VirtualSelect statusSelect:",m)}}this.render()}showValidationError(e,t){const s=document.getElementById(e);if(!s)return;s.classList.add("is-invalid");const a=document.createElement("div");a.className="invalid-feedback",a.textContent=t,a.style.display="block",s.parentNode.insertBefore(a,s.nextSibling)}clearValidationErrors(){document.querySelectorAll(".invalid-feedback").forEach(e=>e.remove()),document.querySelectorAll(".is-invalid").forEach(e=>e.classList.remove("is-invalid"))}isValidDate(e){if(!/^\d{4}-\d{2}-\d{2}$/.test(e)&&!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(e)&&!/^\d{1,2}-\d{1,2}-\d{4}$/.test(e)&&!/^[A-Za-z]{3} \d{1,2}, \d{4}$/.test(e))return!1;const t=new Date(e);return!isNaN(t.getTime())}handleEditProject(e){const t=this.projects.find(h=>h.id===e);if(!t)return;document.getElementById("projectTitleInput").value=t.name,document.getElementById("clientName").value=t.client,k.selectDate(new Date(t.dueDate)),document.getElementById("totalAmountInput").value=t.totalAmount.replace("$","").replace(",","");const s=document.getElementById("progressInput"),a=document.querySelector(".progress .progress-bar");s.value=t.progress,a.style.width=t.progress+"%",a.parentElement.setAttribute("aria-valuenow",t.progress);const r=new Event("input",{bubbles:!0});s.dispatchEvent(r);const o=document.querySelector("#statusSelect2");if(window.VirtualSelect&&o&&t.status)try{VirtualSelect.setValue(o,t.status)}catch(h){console.warn("Could not set status value:",h)}const d=document.querySelector("#assignedSelect");if(window.VirtualSelect&&d&&t.assignedTo){const h=t.assignedTo.map(i=>i.includes("user-14")?"Max Boucaut":i.includes("user-17")?"Poppy Dalley":i.includes("user-16")?"Ethan Zahel":i.includes("user-18")?"Ryan Frazer":i.includes("user-15")?"Natasha Tegg":i.includes("user-20")?"Julian Marconi":null).filter(Boolean);try{VirtualSelect.setValue(d,h)}catch(i){console.warn("Could not set assignee values:",i)}}this.modal.show(),document.getElementById("addProjectModalLabel").textContent="Edit Project",document.querySelector(`#${this.modalId} .btn-primary`).textContent="Update Project",document.querySelector(`#${this.modalId} form`).dataset.editId=e}handleDeleteProject(e){confirm("Are you sure you want to delete this project?")&&(this.projects=this.projects.filter(t=>t.id!==e),this.filteredProjects=this.filteredProjects.filter(t=>t.id!==e),this.render())}handleBulkDelete(){const e=this.tableContainer.querySelectorAll(".form-check-input:checked:not(#checAllData)");if(e.length!==0&&confirm(`Are you sure you want to delete ${e.length} projects?`)){const t=Array.from(e).map(r=>r.closest("tr").querySelector("td:nth-child(2)").textContent.trim());this.projects=this.projects.filter(r=>!t.includes(r.id)),this.filteredProjects=this.filteredProjects.filter(r=>!t.includes(r.id));const s=document.querySelector(".btn-danger.btn-icon");s&&s.classList.add("d-none");const a=document.getElementById("checAllData");a&&(a.checked=!1),this.render()}}handleMasterCheckbox(e){const t=e.target.checked,s=this.tableContainer.querySelectorAll(".form-check-input:not(#checAllData)");s.forEach(r=>{r.checked=t});const a=document.querySelector(".btn-danger.btn-icon");a&&(t&&s.length>0?a.classList.remove("d-none"):a.classList.add("d-none"))}handleCheckboxChange(){const e=this.tableContainer.querySelectorAll(".form-check-input:checked:not(#checAllData)"),t=document.querySelector(".btn-danger.btn-icon");t&&(e.length>0?t.classList.remove("d-none"):t.classList.add("d-none"))}handleTableActions(e){const t=e.target;if(t.classList.contains("form-check-input")&&t.id!=="checAllData"){this.handleCheckboxChange();return}if(t.classList.contains("ri-pencil-line")||t.closest(".dropdown-item")&&t.closest(".dropdown-item").querySelector(".ri-pencil-line")){const a=t.closest("tr").querySelector("td:nth-child(2)").textContent.trim();this.handleEditProject(a);return}if(t.classList.contains("ri-delete-bin-line")||t.closest(".dropdown-item")&&t.closest(".dropdown-item").querySelector(".ri-delete-bin-line")){const a=t.closest("tr").querySelector("td:nth-child(2)").textContent.trim();this.handleDeleteProject(a);return}}sortProjects(e){this.sortColumn===e?this.sortDirection=this.sortDirection==="asc"?"desc":"asc":(this.sortColumn=e,this.sortDirection="asc"),this.filteredProjects.sort((t,s)=>{let a=t[e],r=s[e];return e==="totalAmount"?(a=parseFloat(a.replace(/[^0-9.-]+/g,"")),r=parseFloat(r.replace(/[^0-9.-]+/g,""))):e==="dueDate"?(a=new Date(a).getTime(),r=new Date(r).getTime()):(e==="progress"||!isNaN(a)&&!isNaN(r))&&(a=parseFloat(a),r=parseFloat(r)),a<r?this.sortDirection==="asc"?-1:1:a>r?this.sortDirection==="asc"?1:-1:0}),this.renderTable()}renderTable(){const e=(this.currentPage-1)*this.itemsPerPage,t=e+this.itemsPerPage,s=this.filteredProjects.slice(e,t);if(this.totalPages=Math.ceil(this.filteredProjects.length/this.itemsPerPage),s.length===0){this.tableContainer.innerHTML=`
        <table class="table align-middle text-nowrap mb-0">
            <thead class="bg-light border-bottom">
              <tr>
                <th>
                  <div class="form-check check-primary">
                    <input class="form-check-input" type="checkbox" aria-label="checkbox" id="checAllData">
                    <label class="form-check-label d-none" for="checAllData">
                      Check All Data
                    </label>
                  </div>
                </th>
                <th class="fw-medium text-muted" data-sort="id">ID</th>
                <th class="fw-medium text-muted" data-sort="name">Project and Client Name</th>
                <th class="fw-medium text-muted">Assigned To</th>
                <th class="fw-medium text-muted" data-sort="dueDate">Due Date</th>
                <th class="fw-medium text-muted" data-sort="totalAmount">Total Amount ($)</th>
                <th class="fw-medium text-muted" data-sort="progress">% Complete</th>
                <th class="fw-medium text-muted" data-sort="status">Status</th>
                <th class="fw-medium text-muted">Action</th>
              </tr>
            </thead>
            <tbody id="projectsTableBody">
              <tr>
                <td colspan="9" class="text-center py-4">
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
                      <path fill="url(#SVGID_1__h35ynqzIJzH4_gr1)" d="M40.036,33.826L31.68,25.6c0.847-1.739,1.335-3.684,1.335-5.748c0-7.27-5.894-13.164-13.164-13.164 S6.688,12.582,6.688,19.852c0,7.27,5.894,13.164,13.164,13.164c2.056,0,3.995-0.485,5.728-1.326l3.914,4.015l4.331,4.331    c1.715,1.715,4.496,1.715,6.211,0C41.751,38.321,41.751,35.541,40.036,33.826z"></path>
                      <path fill="none" stroke="#10cfe3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M31.95,25.739l8.086,8.086c1.715,1.715,1.715,4.496,0,6.211l0,0c-1.715,1.715-4.496,1.715-6.211,0 l-4.331-4.331"></path>
                      <path fill="none" stroke="#10cfe3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M7.525,24.511c-1.771-4.694-0.767-10.196,3.011-13.975c3.847-3.847,9.48-4.817,14.228-2.912"></path>
                      <path fill="none" stroke="#10cfe3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M30.856,12.603c3.376,5.114,2.814,12.063-1.688,16.565c-4.858,4.858-12.565,5.129-17.741,0.814"></path>
                    </svg>
                    <p class="mt-2 text-center text-gray-500 dark:text-dark-500">No matching records found</p>
                    <p class="text-muted mb-0">We couldn't find any categories matching your search.</p>
                  </div>
                </td>
              </tr>
            </tbody>
        </table>`,this.addSortableHeaderListeners();return}const a=s.map((i,l)=>`
        <tr>
          <td>
            <div class="form-check check-primary">
              <input class="form-check-input" type="checkbox" aria-label="checkbox" id="checData${l+1}">
              <label class="form-check-label d-none" for="checData${l+1}">
                Check Data ${l+1}
              </label>
            </div>
          </td>
          <td>${i.id}</td>
          <td>
            <a href="#!" class="link link-custom fw-semibold">${i.name}</a>
            <p class="text-muted fs-sm">${i.client}</p>
          </td>
          <td>
            <div class="avatar-group">
              ${i.assignedTo.map(p=>`
                <a href="#!" class="avatar-group-item" aria-label="avatar-link">
                  <img src="${p}" loading="lazy" alt="" class="size-8">
                </a>
              `).join("")}
            </div>
          </td>
          <td>${i.dueDate}</td>
          <td>${i.totalAmount}</td>
          <td>
            <div class="d-flex align-items-center gap-2">
              <p class="flex-shrink-0">${i.progress}%</p>
              <div class="progress progress-1 flex-grow-1" role="progressbar" aria-label="${i.name}" aria-valuenow="${i.progress}" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style="width: ${i.progress}%"></div>
              </div>
            </div>
          </td>
          <td><span class="badge bg-${i.status==="Active"?"secondary":"danger"}-subtle text-${i.status==="Active"?"secondary":"danger"} border border-${i.status==="Active"?"secondary":"danger"}-subtle">${i.status}</span></td>
          <td>
            <div class="dropdown">
              <a href="#!" class="link link-custom-primary" aria-label="dropdown button" id="actionDropdown${l+1}" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="ri-more-2-fill"></i>
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="actionDropdown${l+1}">
                <li><a class="dropdown-item" href="#"> <i class="ri-eye-line me-2"></i>Overview</a></li>
                <li><a class="dropdown-item" href="#"><i class="ri-pencil-line me-2"></i>Edit</a></li>
                <li><a class="dropdown-item" href="#"> <i class="ri-delete-bin-line me-2"></i>Delete</a></li>
              </ul>
            </div>
          </td>
        </tr>
      `).join(""),r=`
      <table class="table align-middle text-nowrap mb-0">
        <thead class="bg-light border-bottom">
          <tr>
            <th>
              <div class="form-check check-primary">
                <input class="form-check-input" type="checkbox" aria-label="checkbox" id="checAllData">
                <label class="form-check-label d-none" for="checAllData">
                  Check All Data
                </label>
              </div>
            </th>
            <th class="fw-medium text-muted" data-sort="id">ID ${this.sortColumn==="id"?this.sortDirection==="asc"?"↑":"↓":""}</th>
            <th class="fw-medium text-muted" data-sort="name">Project and Client Name ${this.sortColumn==="name"?this.sortDirection==="asc"?"↑":"↓":""}</th>
            <th class="fw-medium text-muted">Assigned To</th>
            <th class="fw-medium text-muted" data-sort="dueDate">Due Date ${this.sortColumn==="dueDate"?this.sortDirection==="asc"?"↑":"↓":""}</th>
            <th class="fw-medium text-muted" data-sort="totalAmount">Total Amount ($) ${this.sortColumn==="totalAmount"?this.sortDirection==="asc"?"↑":"↓":""}</th>
            <th class="fw-medium text-muted" data-sort="progress">% Complete ${this.sortColumn==="progress"?this.sortDirection==="asc"?"↑":"↓":""}</th>
            <th class="fw-medium text-muted" data-sort="status">Status ${this.sortColumn==="status"?this.sortDirection==="asc"?"↑":"↓":""}</th>
            <th class="fw-medium text-muted">Action</th>
          </tr>
        </thead>
        <tbody id="projectsTableBody">
          ${a}
        </tbody>
      </table>
    `;this.tableContainer.innerHTML=r;const o=document.getElementById("checAllData");o&&o.addEventListener("change",this.handleMasterCheckbox.bind(this)),this.tableContainer.querySelectorAll(".form-check-input:not(#checAllData)").forEach(i=>{i.addEventListener("change",this.handleCheckboxChange.bind(this))}),this.tableContainer.querySelectorAll("th[data-sort]").forEach(i=>{i.style.cursor="pointer",i.addEventListener("click",()=>{const l=i.getAttribute("data-sort");this.sortProjects(l)})})}renderPagination(){let e=`
      <div class="row align-items-center g-3 mt-2">
        <div class="col-md-6">
          <p class="text-muted text-center text-md-start mb-0">
            Showing <b class="me-1">${(this.currentPage-1)*this.itemsPerPage+1}-${Math.min(this.currentPage*this.itemsPerPage,this.filteredProjects.length)}</b>
            of<b class="ms-1">${this.filteredProjects.length}</b> Results
          </p>
        </div>
        <div class="col-md-6">
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center justify-content-md-end mb-0">
              <li class="page-item ${this.currentPage===1?"disabled":""}">
                <a class="page-link" href="#!" data-page="${this.currentPage-1}">
                  <i data-lucide="chevron-left" class="size-4"></i> Previous
                </a>
              </li>
    `;for(let s=1;s<=this.totalPages;s++)e+=`
        <li class="page-item ${this.currentPage===s?"active":""}">
          <a class="page-link" href="#!" data-page="${s}">${s}</a>
        </li>
      `;e+=`
              <li class="page-item ${this.currentPage===this.totalPages?"disabled":""}">
                <a class="page-link" href="#!" data-page="${this.currentPage+1}">
                  Next <i data-lucide="chevron-right" class="size-4"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    `;const t=document.querySelector(".row.align-items-center.g-3.mt-2");if(t)t.innerHTML=e;else{const s=document.createElement("div");s.innerHTML=e,this.tableContainer.after(s)}document.querySelectorAll(".page-link").forEach(s=>{s.addEventListener("click",a=>{a.preventDefault();const r=parseInt(a.currentTarget.dataset.page);!isNaN(r)&&r>0&&r<=this.totalPages&&(this.currentPage=r,this.render())})})}render(){this.renderTable(),this.renderPagination(),y({icons:P})}filterByStatus(e){!e||e==="All"?this.filteredProjects=[...this.projects]:this.filteredProjects=this.projects.filter(t=>t.status===e),this.currentPage=1,this.render()}filterByDate(e){this.render()}filterByAssignee(e){this.render()}setData(e){this.projects=e,this.filteredProjects=[...e],this.currentPage=1,this.render()}getData(){return this.projects}}const S=[{id:"PEC-24567",name:"Mobile App Development",client:"FitLife",assignedTo:["assets/images/avatar/user-12.png","assets/images/avatar/user-20.png"],dueDate:"30 Sep, 2024",totalAmount:"$48,000",progress:"30",status:"Active"},{id:"PEC-24623",name:"CRM System Overhaul",client:"BizWorks",assignedTo:["assets/images/avatar/user-14.png","assets/images/avatar/user-1.png"],dueDate:"22 Dec, 2024",totalAmount:"$75,000",progress:"80",status:"Completed"},{id:"PEC-24888",name:"Data Migration",client:"CloudNet",assignedTo:["assets/images/avatar/user-18.png","assets/images/avatar/user-30.png"],dueDate:"18 Mar, 2025",totalAmount:"$28,000",progress:"55",status:"Active"},{id:"PEC-24990",name:"SEO Optimization",client:"MediaGenix",assignedTo:["assets/images/avatar/user-4.png","assets/images/avatar/user-8.png"],dueDate:"12 May, 2025",totalAmount:"$10,000",progress:"90",status:"Pending"},{id:"PEC-25001",name:"Inventory Management System",client:"WarehousePro",assignedTo:["assets/images/avatar/user-6.png","assets/images/avatar/user-23.png"],dueDate:"03 Aug, 2024",totalAmount:"$55,000",progress:"35",status:"Active"},{id:"PEC-25123",name:"HR Portal Revamp",client:"PeopleFirst",assignedTo:["assets/images/avatar/user-15.png","assets/images/avatar/user-19.png"],dueDate:"25 Apr, 2025",totalAmount:"$20,000",progress:"12",status:"Pending"},{id:"PEC-25245",name:"Digital Marketing Campaign",client:"ClickPoint",assignedTo:["assets/images/avatar/user-13.png","assets/images/avatar/user-10.png"],dueDate:"08 Jun, 2025",totalAmount:"$16,000",progress:"78",status:"Active"},{id:"PEC-25367",name:"Website Audit & Fix",client:"WebInsight",assignedTo:["assets/images/avatar/user-27.png","assets/images/avatar/user-21.png"],dueDate:"01 Feb, 2025",totalAmount:"$8,000",progress:"92",status:"Completed"},{id:"PEC-25488",name:"Blockchain Integration",client:"CoinTrust",assignedTo:["assets/images/avatar/user-28.png","assets/images/avatar/user-7.png"],dueDate:"11 Oct, 2024",totalAmount:"$70,000",progress:"20",status:"Active"},{id:"PEC-25590",name:"Desktop App for Analytics",client:"DataMine",assignedTo:["assets/images/avatar/user-25.png","assets/images/avatar/user-22.png"],dueDate:"15 Nov, 2024",totalAmount:"$43,000",progress:"40",status:"Pending"},{id:"PEC-25701",name:"UX Research & Testing",client:"DesignHive",assignedTo:["assets/images/avatar/user-11.png","assets/images/avatar/user-26.png"],dueDate:"05 Dec, 2024",totalAmount:"$12,000",progress:"70",status:"Active"},{id:"PEC-25812",name:"Payment Gateway Setup",client:"PayHub",assignedTo:["assets/images/avatar/user-17.png","assets/images/avatar/user-2.png"],dueDate:"20 Jul, 2024",totalAmount:"$18,000",progress:"22",status:"Pending"},{id:"PEC-25923",name:"Cloud Backup Solution",client:"SecureStor",assignedTo:["assets/images/avatar/user-24.png","assets/images/avatar/user-29.png"],dueDate:"29 Sep, 2025",totalAmount:"$39,000",progress:"50",status:"Active"},{id:"PEC-26034",name:"Social Media Management Tool",client:"InstaTools",assignedTo:["assets/images/avatar/user-16.png","assets/images/avatar/user-3.png"],dueDate:"13 Aug, 2024",totalAmount:"$25,000",progress:"10",status:"Pending"},{id:"PEC-26145",name:"Email Automation Platform",client:"MailLaunch",assignedTo:["assets/images/avatar/user-5.png","assets/images/avatar/user-20.png"],dueDate:"07 Jan, 2025",totalAmount:"$30,000",progress:"60",status:"Active"}],b=document.getElementById("dueDateInput"),k=new w(b,{autoClose:!0,locale:A,dateFormat:c=>{const e=c.getDate(),t=c.toLocaleString("en-US",{month:"short"}),s=c.getFullYear();return`${e} ${t}, ${s}`}});document.addEventListener("DOMContentLoaded",function(){const c=new D({tableContainer:".table-responsive",searchInputId:"searchProjectsInput",modalId:"addProjectModal",itemsPerPage:10,initialData:S});window.tableManager=c,typeof v=="function"&&v(c)});function v(c){var e,t;(e=document.getElementById("filterStatusSelect"))==null||e.addEventListener("change",function(s){c.filterByStatus(s.target.value)}),(t=document.getElementById("filterSelect"))==null||t.addEventListener("change",function(s){c.filterByDate(s.target.value)}),document.querySelectorAll("#filterAssigneeDropdown .form-check-input").forEach(s=>{s.addEventListener("change",function(){const a=Array.from(document.querySelectorAll("#filterAssigneeDropdown .form-check-input:checked")).map(r=>r.value);c.filterByAssignee(a)})})}
