import{c as b,i as y}from"../../admin.bundle-DI9_jvUJ.js";/* empty css                               */import"../../progress-circle.init-BSjgPg28.js";import{A as c}from"../../air-datepicker-DlUcrly3.js";import{l as m}from"../../en-BXs2wRZT.js";import"../../main-d77jCppw.js";VirtualSelect.init({ele:"#stdFilterSelect",options:[{label:"All",value:"All"},{label:"STD 12",value:"12"},{label:"STD 11",value:"11"},{label:"STD 10",value:"10"},{label:"STD 9",value:"9"},{label:"STD 8",value:"8"},{label:"STD 7",value:"7"},{label:"STD 6",value:"6"}]});VirtualSelect.init({ele:"#dateFilterSelect",options:[{label:"All",value:"All"},{label:"Today",value:"Today"},{label:"Tomorrow",value:"Tomorrow"},{label:"Weekly",value:"Weekly"},{label:"Monthly",value:"Monthly"},{label:"Yearly",value:"Yearly"}]});VirtualSelect.init({ele:"#testCategorySelect",options:[{label:"Final Test",value:"Final Test"},{label:"Practice Test",value:"Practice Test"},{label:"Midterm Test",value:"Midterm Test"},{label:"Quarterly Test",value:"Quarterly Test"}]});VirtualSelect.init({ele:"#testTypeSelect",options:[{label:"General",value:"General"},{label:"Formative",value:"Formative"},{label:"Summative",value:"Summative"},{label:"Online",value:"Online"},{label:"Rejoining",value:"Rejoining"}]});VirtualSelect.init({ele:"#classSelect",options:[{label:"STD 6",value:"6"},{label:"STD 7",value:"7"},{label:"STD 8",value:"8"},{label:"STD 9",value:"9"},{label:"STD 10",value:"10"},{label:"STD 11",value:"11"},{label:"STD 12",value:"12"}]});VirtualSelect.init({ele:"#statusSelect",options:[{label:"New",value:"New"},{label:"Scheduled",value:"Scheduled"},{label:"Completed",value:"Completed"}]});const o={totalResults:12,pageSize:10,currentPage:1,data:[{id:"PEE-498",testName:"English",testCategory:"Final Test",testType:"General",class:"12",startDate:"12 Jan, 2024",endDate:"12 Jan, 2024",status:"New"},{id:"PEE-499",testName:"Computer",testCategory:"Practice Test",testType:"Formative",class:"12",startDate:"19 June, 2024",endDate:"19 June, 2024",status:"Scheduled"},{id:"PEE-500",testName:"Mathematics",testCategory:"Midterm Test",testType:"Summative",class:"11",startDate:"15 March, 2024",endDate:"15 March, 2024",status:"Scheduled"},{id:"PEE-501",testName:"Physics",testCategory:"Quarterly Test",testType:"Summative",class:"10",startDate:"01 July, 2024",endDate:"01 July, 2024",status:"Completed"},{id:"PEE-502",testName:"Chemistry",testCategory:"Final Test",testType:"General",class:"12",startDate:"20 Aug, 2024",endDate:"20 Aug, 2024",status:"New"},{id:"PEE-503",testName:"Biology",testCategory:"Practice Test",testType:"Formative",class:"11",startDate:"11 Feb, 2024",endDate:"11 Feb, 2024",status:"Scheduled"},{id:"PEE-504",testName:"History",testCategory:"Midterm Test",testType:"Summative",class:"10",startDate:"30 Sept, 2024",endDate:"30 Sept, 2024",status:"Completed"},{id:"PEE-505",testName:"Geography",testCategory:"Quarterly Test",testType:"Summative",class:"9",startDate:"25 May, 2024",endDate:"25 May, 2024",status:"Scheduled"},{id:"PEE-506",testName:"Economics",testCategory:"Final Test",testType:"Online",class:"12",startDate:"17 Oct, 2024",endDate:"17 Oct, 2024",status:"New"},{id:"PEE-507",testName:"Political Science",testCategory:"Practice Test",testType:"Formative",class:"11",startDate:"09 Nov, 2024",endDate:"09 Nov, 2024",status:"Scheduled"},{id:"PEE-508",testName:"Art",testCategory:"Final Test",testType:"General",class:"10",startDate:"12 Dec, 2024",endDate:"12 Dec, 2024",status:"New"},{id:"PEE-509",testName:"Music",testCategory:"Practice Test",testType:"Formative",class:"9",startDate:"05 Jan, 2025",endDate:"05 Jan, 2025",status:"Scheduled"}]};class D{constructor(t){this.tableData=t.data||[],this.originalData=[...this.tableData],this.totalResults=t.totalResults||this.tableData.length,this.tableContainer=t.tableContainer,this.pageSize=t.pageSize||10,this.currentPage=t.currentPage||1,this.paginationContainer=t.paginationContainer,this.resultsInfoContainer=t.resultsInfoContainer,this.addModalId=t.addModalId||"addExamScheduleModal",this.editModalId=t.editModalId||"ExamScheduleModal",this.deleteModalId=t.deleteModalId||"deleteModal",this.sortColumn=null,this.sortDirection=null,this.statusClasses={New:"bg-info-subtle border border-info-subtle text-info",Scheduled:"bg-warning-subtle border border-warning-subtle text-warning",Completed:"bg-success-subtle border border-success-subtle text-success"},this.testCategoryOptions=["Final Test","Practice Test","Midterm Test","Quarterly Test"],this.testTypeOptions=["General","Formative","Summative","Online"],this.classOptions=["9","10","11","12"],this.statusOptions=["New","Scheduled","Completed"],this.init()}init(){this.renderTable(),this.renderPagination(),this.updateResultsInfo(),this.setupFormSelects(),this.attachEventListeners()}renderTable(){if(!this.tableContainer)return;const t=(this.currentPage-1)*this.pageSize,e=Math.min(t+this.pageSize,this.tableData.length),s=this.tableData.slice(t,e),a=this.sortColumn||"",l=this.sortDirection||"",i=`
        <div class="table-card table-responsive">
          <table class="table table-borderless text-nowrap mb-0">
            <thead>
              <tr class="bg-light border-bottom">
                <th class="fw-medium text-muted sortable" data-sort="id">
                  ID ${a==="id"?l==="asc"?"↑":"↓":""}
                </th>
                <th class="fw-medium text-muted sortable" data-sort="testName">
                  Test Name ${a==="testName"?l==="asc"?"↑":"↓":""}
                </th>
                <th class="fw-medium text-muted sortable" data-sort="testCategory">
                  Test Category ${a==="testCategory"?l==="asc"?"↑":"↓":""}
                </th>
                <th class="fw-medium text-muted sortable" data-sort="testType">
                  Test Type ${a==="testType"?l==="asc"?"↑":"↓":""}
                </th>
                <th class="fw-medium text-muted sortable" data-sort="class">
                  Class ${a==="class"?l==="asc"?"↑":"↓":""}
                </th>
                <th class="fw-medium text-muted sortable" data-sort="startDate">
                  Start Date ${a==="startDate"?l==="asc"?"↑":"↓":""}
                </th>
                <th class="fw-medium text-muted sortable" data-sort="endDate">
                  End Date ${a==="endDate"?l==="asc"?"↑":"↓":""}
                </th>
                <th class="fw-medium text-muted sortable" data-sort="status">
                  Status ${a==="status"?l==="asc"?"↑":"↓":""}
                </th>
                <th class="fw-medium text-muted">Action</th>
              </tr>
            </thead>
            <tbody>
              ${s.length>0?s.map(n=>this.renderTableRow(n)).join(""):'<tr><td colspan="9" class="text-center">No data found</td></tr>'}
            </tbody>
          </table>
        </div>
        `;this.tableContainer.innerHTML=i,this.tableContainer.querySelectorAll("th.sortable").forEach(n=>{n.addEventListener("click",()=>{const u=n.getAttribute("data-sort");this.handleSort(u)})}),this.attachRowActionListeners()}renderTableRow(t){return`
        <tr data-id="${t.id}">
          <td>${t.id}</td>
          <td>${t.testName}</td>
          <td>${t.testCategory}</td>
          <td>${t.testType}</td>
          <td>${t.class}</td>
          <td>${t.startDate}</td>
          <td>${t.endDate}</td>
          <td><span class="badge ${this.statusClasses[t.status]||""}">${t.status}</span></td>
          <td>
            <div class="d-flex align-items-center gap-2">
              <button class="btn btn-sub-primary size-8 btn-icon edit-btn" data-id="${t.id}">
                <i class="ri-pencil-line"></i>
              </button>
              <button class="btn btn-sub-danger size-8 btn-icon delete-btn" data-id="${t.id}">
                <i class="ri-delete-bin-line"></i>
              </button>
            </div>
          </td>
        </tr>
        `}handleSort(t){this.sortColumn===t?this.sortDirection=this.sortDirection==="asc"?"desc":"asc":(this.sortColumn=t,this.sortDirection="asc"),this.sort(t,this.sortDirection)}sort(t,e="asc"){this.sortColumn=t,this.sortDirection=e,this.tableData.sort((s,a)=>{let l=s[t],i=a[t];return t==="startDate"||t==="endDate"?(l=this.parseDateString(l),i=this.parseDateString(i)):t==="class"&&(l=parseInt(l,10),i=parseInt(i,10)),e==="asc"?l<i?-1:l>i?1:0:l>i?-1:l<i?1:0}),this.renderTable()}parseDateString(t){const e=t.split(" "),s=parseInt(e[0],10),a=this.getMonthNumber(e[1].replace(",","")),l=parseInt(e[2],10);return new Date(l,a,s)}getMonthNumber(t){return{Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sept:8,Sep:8,Oct:9,Nov:10,Dec:11}[t]||0}renderPagination(){if(!this.paginationContainer)return;const t=Math.max(1,Math.ceil(this.totalResults/this.pageSize));let e=`
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center justify-content-md-end mb-0">
            <li class="page-item ${this.currentPage===1?"disabled":""}">
              <a class="page-link" href="#" data-page="${this.currentPage-1}">
                <i data-lucide="chevron-left" class="size-4"></i> Previous
              </a>
            </li>
      `;const s=5;let a=1,l=t;if(t>s){const i=Math.floor((s-1)/2);a=Math.max(1,this.currentPage-i),l=Math.min(t,a+s-1),l-a+1<s&&(a=Math.max(1,l-s+1))}a>1&&(e+=`
          <li class="page-item">
            <a class="page-link" href="#" data-page="1">1</a>
          </li>
        `,a>2&&(e+=`
            <li class="page-item disabled">
              <a class="page-link" href="#">...</a>
            </li>
          `));for(let i=a;i<=l;i++)e+=`
          <li class="page-item ${i===this.currentPage?"active":""}">
            <a class="page-link" href="#" data-page="${i}">${i}</a>
          </li>
        `;l<t&&(l<t-1&&(e+=`
            <li class="page-item disabled">
              <a class="page-link" href="#">...</a>
            </li>
          `),e+=`
          <li class="page-item">
            <a class="page-link" href="#" data-page="${t}">${t}</a>
          </li>
        `),e+=`
          <li class="page-item ${this.currentPage===t?"disabled":""}">
            <a class="page-link" href="#" data-page="${this.currentPage+1}">
              Next <i data-lucide="chevron-right" class="size-4"></i>
            </a>
          </li>
        </ul>
      </nav>
      `,this.paginationContainer.innerHTML=e,b({icons:y})}updateResultsInfo(){if(!this.resultsInfoContainer)return;if(this.totalResults===0){this.resultsInfoContainer.innerHTML=`
          <p class="text-muted text-center text-md-start mb-0">
            No results found
          </p>
        `;return}const t=(this.currentPage-1)*this.pageSize+1,e=Math.min(t+this.pageSize-1,this.totalResults);this.resultsInfoContainer.innerHTML=`
        <p class="text-muted text-center text-md-start mb-0">
          Showing <b class="me-1">${t}-${e}</b> of <b class="ms-1">${this.totalResults}</b> Results
        </p>
      `}setupFormSelects(){this.setupSelect("testCategorySelect",this.testCategoryOptions),this.setupSelect("testTypeSelect",this.testTypeOptions),this.setupSelect("classSelect",this.classOptions),this.setupSelect("statusSelect",this.statusOptions)}setupSelect(t,e){const s=document.getElementById(t);if(!s)return;let a=`<select class="form-select" id="${t}-dropdown" name="${t}">`;e.forEach(l=>{a+=`<option value="${l}">${l}</option>`}),a+="</select>",s.innerHTML=a}attachEventListeners(){this.paginationContainer&&this.paginationContainer.addEventListener("click",i=>{i.preventDefault();const r=i.target.closest("[data-page]");if(!r)return;const n=parseInt(r.dataset.page,10);isNaN(n)||n<1||n>Math.ceil(this.totalResults/this.pageSize)||this.goToPage(n)});const t=document.querySelector(`#${this.addModalId} form`);t?t.addEventListener("submit",i=>{i.preventDefault(),this.addExam(i.target)}):console.error(`Form not found in modal #${this.addModalId}`);const e=document.getElementById(this.addModalId);e&&e.addEventListener("show.bs.modal",()=>{const i=e.querySelector("form");i&&i.reset()});const s=document.getElementById(this.editModalId);s&&s.addEventListener("show.bs.modal",i=>{const n=i.relatedTarget.getAttribute("data-id");this.populateEditForm(n)});const a=s?s.querySelector("form"):null;a&&a.addEventListener("submit",i=>{i.preventDefault(),this.updateExam(i.target)});const l=document.getElementById(this.deleteModalId);if(l){l.addEventListener("show.bs.modal",r=>{const u=r.relatedTarget.getAttribute("data-id"),h=l.querySelector(".btn-danger");h&&h.setAttribute("data-id",u)});const i=l.querySelector(".btn-danger");i&&i.addEventListener("click",r=>{const n=r.target.getAttribute("data-id");this.deleteExam(n)})}}attachRowActionListeners(){this.tableContainer.querySelectorAll(".edit-btn").forEach(s=>{s.addEventListener("click",()=>{const a=s.getAttribute("data-id"),l=new window.bootstrap.Modal(document.getElementById(this.editModalId));s.setAttribute("data-bs-toggle","modal"),s.setAttribute("data-bs-target",`#${this.editModalId}`),this.populateEditForm(a),l.show()})}),this.tableContainer.querySelectorAll(".delete-btn").forEach(s=>{s.addEventListener("click",a=>{a.preventDefault();const l=s.getAttribute("data-id"),i=document.getElementById(this.deleteModalId);if(i){const r=i.querySelector(".btn-danger");r&&r.setAttribute("data-id",l),new window.bootstrap.Modal(i).show()}})})}goToPage(t){this.currentPage=t,this.renderTable(),this.renderPagination(),this.updateResultsInfo()}filter(t){const e=this.originalData.filter(t);this.tableData=e,this.totalResults=e.length,this.currentPage=1,this.init()}sort(t,e="asc"){this.tableData.sort((s,a)=>{const l=s[t],i=a[t];return e==="asc"?l>i?1:-1:l<i?1:-1}),this.renderTable()}reset(){this.tableData=[...this.originalData],this.totalResults=this.tableData.length,this.currentPage=1,this.init()}addExam(t){const e=new FormData(t),s=document.getElementById("testCategorySelect-dropdown"),a=document.getElementById("testTypeSelect-dropdown"),l=document.getElementById("classSelect-dropdown"),i=document.getElementById("statusSelect-dropdown"),r={id:this.generateNewId(),testName:e.get("testName"),testCategory:s?s.value:"Final Test",testType:a?a.value:"General",class:l?l.value:"12",startDate:g.value,endDate:p.value,status:i?i.value:"New"};this.tableData.unshift(r),this.originalData.unshift(r),this.totalResults++,t.reset(),this.currentPage=1,this.init();const n=window.bootstrap.Modal.getInstance(document.getElementById(this.addModalId));n&&n.hide()}populateEditForm(t){const e=this.tableData.find(n=>n.id===t);if(!e)return;const s=document.querySelector(`#${this.editModalId} form`);if(!s)return;let a=s.querySelector('input[name="examId"]');a||(a=document.createElement("input"),a.type="hidden",a.name="examId",s.appendChild(a)),a.value=e.id;const l=s.querySelector('input[name="testName"]');l&&(l.value=e.testName),this.setSelectValue("testCategorySelect-dropdown",e.testCategory),this.setSelectValue("testTypeSelect-dropdown",e.testType),this.setSelectValue("classSelect-dropdown",e.class),this.setSelectValue("statusSelect-dropdown",e.status);const i=s.querySelector('input[name="startDate"]');if(i){const n=c.getInstanceByInput(i);n?n.selectDate(new Date(e.startDate)):i.value=e.startDate}const r=s.querySelector('input[name="endDate"]');if(r){const n=c.getInstanceByInput(r);n?n.selectDate(new Date(e.endDate)):r.value=e.endDate}}setSelectValue(t,e){const s=document.getElementById(t);s&&s.tagName==="SELECT"&&(s.value=e)}updateExam(t){const e=new FormData(t),s=e.get("examId"),a=this.tableData.findIndex(n=>n.id===s);if(a===-1)return;const l={id:s,testName:e.get("testName"),testCategory:e.get("testCategorySelect")||this.tableData[a].testCategory,testType:e.get("testTypeSelect")||this.tableData[a].testType,class:e.get("classSelect")||this.tableData[a].class,startDate:e.get("startDate")||this.tableData[a].startDate,endDate:e.get("endDate")||this.tableData[a].endDate,status:e.get("statusSelect")||this.tableData[a].status};this.tableData[a]=l;const i=this.originalData.findIndex(n=>n.id===s);i!==-1&&(this.originalData[i]=l),this.renderTable();const r=window.bootstrap.Modal.getInstance(document.getElementById(this.editModalId));r&&r.hide()}deleteExam(t){this.tableData=this.tableData.filter(a=>a.id!==t),this.originalData=this.originalData.filter(a=>a.id!==t),this.totalResults--;const e=Math.max(1,Math.ceil(this.totalResults/this.pageSize));this.currentPage>e&&(this.currentPage=Math.max(1,e)),this.renderTable(),this.renderPagination(),this.updateResultsInfo();const s=window.bootstrap.Modal.getInstance(document.getElementById(this.deleteModalId));s&&s.hide()}generateNewId(){const t=this.originalData.map(s=>{const a=s.id.match(/PEE-(\d+)/);return a?parseInt(a[1],10):0});return`PEE-${(Math.max(...t,0)+1).toString().padStart(3,"0")}`}formatDate(t){const e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"],s=t.getDate(),a=e[t.getMonth()],l=t.getFullYear();return`${s} ${a}, ${l}`}}const g=document.getElementById("dueDateInput"),p=document.getElementById("endDateInput");new c(g,{dateFormat:"yyyy-MM-dd",autoClose:!0,locale:m});new c(p,{dateFormat:"yyyy-MM-dd",autoClose:!0,locale:m});document.addEventListener("DOMContentLoaded",function(){const d=new D({data:o.data,totalResults:o.totalResults,pageSize:o.pageSize,currentPage:o.currentPage,tableContainer:document.getElementById("exam-table-container"),paginationContainer:document.getElementById("pagination-container"),resultsInfoContainer:document.getElementById("results-info-container")}),t=document.getElementById("filter-by-status");t&&t.addEventListener("change",function(s){const a=s.target.value;a==="all"?d.reset(o.data):d.filter(l=>l.status===a)});const e=document.getElementById("sort-by-date");e&&e.addEventListener("click",function(){const s=this.dataset.direction||"asc";d.sort("startDate",s),this.dataset.direction=s==="asc"?"desc":"asc"})});
