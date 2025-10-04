import{c as m,i as y}from"../../admin.bundle-DI9_jvUJ.js";import{A as g}from"../../air-datepicker-DlUcrly3.js";import{l as p}from"../../en-BXs2wRZT.js";import"../../main-d77jCppw.js";class f{constructor(t={}){this.options={itemsPerPage:10,containerSelector:".table-card",paginationSelector:".pagination",resultsInfoSelector:".col-md-6 p",addModalId:"addHolidayModal",deleteModalId:"deleteModal",dateFormat:"d MMM yyyy",...t},this.allData=[],this.currentPage=1,this.totalPages=1,this.editingIndex=null,this.sortColumn=null,this.sortDirection="asc",this.container=document.querySelector(this.options.containerSelector),this.paginationEl=document.querySelector(this.options.paginationSelector),this.resultsInfoEl=document.querySelector(this.options.resultsInfoSelector),this.addModal=document.getElementById(this.options.addModalId),this.deleteModal=document.getElementById(this.options.deleteModalId),this.datepicker=null,this.initializeData(),this.setupEventListeners()}initializeData(){this.allData=[{name:"Groundhog Day",date:"2 Feb 2024",day:"Friday"},{name:"Martin Luther King Jr. Day",date:"15 Jan 2024",day:"Monday"},{name:"Groundhog Day",date:"2 Feb 2024",day:"Friday"},{name:"Valentine's Day",date:"14 Feb 2024",day:"Wednesday"},{name:"Presidents' Day",date:"19 Feb 2024",day:"Monday"},{name:"St. Patrick's Day",date:"17 Mar 2024",day:"Sunday"},{name:"Easter",date:"31 Mar 2024",day:"Sunday"},{name:"April Fool's Day",date:"1 Apr 2024",day:"Monday"},{name:"Earth Day",date:"22 Apr 2024",day:"Monday"},{name:"Cinco de Mayo",date:"5 May 2024",day:"Sunday"},{name:"Mother's Day",date:"12 May 2024",day:"Sunday"},{name:"Memorial Day",date:"27 May 2024",day:"Monday"},{name:"Father's Day",date:"16 Jun 2024",day:"Sunday"},{name:"Juneteenth",date:"19 Jun 2024",day:"Wednesday"},{name:"Independence Day",date:"4 Jul 2024",day:"Thursday"},{name:"Labor Day",date:"2 Sep 2024",day:"Monday"},{name:"Columbus Day",date:"14 Oct 2024",day:"Monday"},{name:"Halloween",date:"31 Oct 2024",day:"Thursday"},{name:"Veterans Day",date:"11 Nov 2024",day:"Monday"},{name:"Thanksgiving",date:"28 Nov 2024",day:"Thursday"},{name:"Christmas Eve",date:"24 Dec 2024",day:"Tuesday"},{name:"Christmas",date:"25 Dec 2024",day:"Wednesday"},{name:"New Year's Eve",date:"31 Dec 2024",day:"Tuesday"},{name:"New Year's Day",date:"1 Jan 2024",day:"Monday"},{name:"Indigenous Peoples' Day",date:"14 Oct 2024",day:"Monday"},{name:"Flag Day",date:"14 Jun 2024",day:"Friday"},{name:"Pi Day",date:"14 Mar 2024",day:"Thursday"}],this.totalPages=Math.ceil(this.allData.length/this.options.itemsPerPage),this.renderTable(),this.renderPagination(),this.updateResultsInfo()}setupEventListeners(){const t=document.querySelector(`#${this.options.addModalId} form`);t&&t.addEventListener("submit",e=>{e.preventDefault(),this.handleFormSubmit()});const a=document.querySelector(`#${this.options.deleteModalId} .btn-danger`);a&&a.addEventListener("click",()=>{this.deleteIndex!==null&&(this.deleteHoliday(this.deleteIndex),this.deleteIndex=null)});const o=document.getElementById("dateInput");o&&(this.datepicker=new g(o,{dateFormat:this.options.dateFormat,autoClose:!0,onSelect:({date:e})=>{if(e){const n=this.getDayOfWeek(e),s=document.getElementById("daysInput");s&&(s.value=n)}},locale:p})),document.addEventListener("click",e=>{if(e.target.closest("th.sortable")){const s=e.target.closest("th.sortable").dataset.column;this.handleSort(s);return}if(e.target.closest(".pagination")){e.preventDefault();const n=e.target.closest(".page-link");if(!n)return;if(n.textContent.includes("Previous"))this.goToPage(this.currentPage-1);else if(n.textContent.includes("Next"))this.goToPage(this.currentPage+1);else{const s=parseInt(n.textContent);isNaN(s)||this.goToPage(s)}}if(e.target.closest(".btn-sub-primary")){const n=e.target.closest("tr"),s=Array.from(n.parentElement.children).indexOf(n),d=(this.currentPage-1)*this.options.itemsPerPage+s;this.editingIndex=d,this.populateEditForm(d)}if(e.target.closest(".btn-sub-danger")){const n=e.target.closest("tr"),s=Array.from(n.parentElement.children).indexOf(n),d=(this.currentPage-1)*this.options.itemsPerPage+s;this.deleteIndex=d}});const i=document.getElementById("tableSearch");i&&i.addEventListener("input",e=>{this.searchHolidays(e.target.value)})}getDayOfWeek(t){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t.getDay()]}handleSort(t){this.sortColumn===t?this.sortDirection=this.sortDirection==="asc"?"desc":"asc":(this.sortColumn=t,this.sortDirection="asc"),this.sortData(),this.renderTable()}sortData(){if(!this.sortColumn)return;const t=this.sortColumn,a=this.sortDirection;this.allData.sort((o,i)=>{let e=o[t],n=i[t];if(t==="date"){const s=d=>{const[l,u,r]=d.split(" "),c={Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11};return new Date(r,c[u],parseInt(l))};e=s(e),n=s(n)}return typeof e=="string"&&typeof n=="string"&&(e=e.toLowerCase(),n=n.toLowerCase()),e<n?a==="asc"?-1:1:e>n?a==="asc"?1:-1:0})}renderTable(){const t=(this.currentPage-1)*this.options.itemsPerPage,a=Math.min(t+this.options.itemsPerPage,this.allData.length),o=this.allData.slice(t,a);let i=`
        <table class="table table-borderless text-nowrap mb-0">
          <thead>
            <tr class="bg-light border-bottom">
              <th class="fw-medium text-muted sortable" data-column="name">
                Holiday Name
                ${this.getSortIcon("name")}
              </th>
              <th class="fw-medium text-muted sortable" data-column="date">
                Date
                ${this.getSortIcon("date")}
              </th>
              <th class="fw-medium text-muted sortable" data-column="day">
                Day
                ${this.getSortIcon("day")}
              </th>
              <th class="fw-medium text-muted">Action</th>
            </tr>
          </thead>
          <tbody>
      `;o.forEach(e=>{i+=`
          <tr>
            <td>${e.name}</td>
            <td>${e.date}</td>
            <td>${e.day}</td>
            <td>
              <div class="d-flex align-items-center gap-2">
                <button class="btn btn-sub-primary size-8 rounded btn-icon" data-bs-toggle="modal" data-bs-target="#${this.options.addModalId}">
                  <i class="ri-pencil-line"></i>
                </button>
                <button class="btn btn-sub-danger size-8 rounded btn-icon" data-bs-toggle="modal" data-bs-target="#${this.options.deleteModalId}">
                  <i class="ri-delete-bin-line"></i>
                </button>
              </div>
            </td>
          </tr>
        `}),i+=`
          </tbody>
        </table>
      `,this.container.innerHTML=i,m({icons:y})}getSortIcon(t){return this.sortColumn!==t?'<span class="sort-icon"></span>':this.sortDirection==="asc"?'<span class="sort-icon"><i data-lucide="arrow-up" class="size-4"></i></span>':'<span class="sort-icon"><i data-lucide="arrow-down" class="size-4"></i></span>'}renderPagination(){let t=`
        <ul class="pagination justify-content-center justify-content-md-end mb-0">
          <li class="page-item ${this.currentPage===1?"disabled":""}">
            <a class="page-link" href="#!">
              <i data-lucide="chevron-left" class="size-4"></i> Previous
            </a>
          </li>
      `;for(let a=1;a<=this.totalPages;a++)t+=`
          <li class="page-item ${a===this.currentPage?"active":""}">
            <a class="page-link" href="#!">${a}</a>
          </li>
        `;t+=`
        <li class="page-item ${this.currentPage===this.totalPages?"disabled":""}">
          <a class="page-link" href="#!">
            Next <i data-lucide="chevron-right" class="size-4"></i>
          </a>
        </li>
      </ul>
      `,this.paginationEl&&(this.paginationEl.innerHTML=t),m({icons:y})}updateResultsInfo(){const t=(this.currentPage-1)*this.options.itemsPerPage+1,a=Math.min(this.currentPage*this.options.itemsPerPage,this.allData.length);this.resultsInfoEl&&(this.resultsInfoEl.innerHTML=`Showing <b class="me-1">${t}-${a}</b>of<b class="ms-1">${this.allData.length}</b> Results`)}goToPage(t){t<1||t>this.totalPages||(this.currentPage=t,this.renderTable(),this.renderPagination(),this.updateResultsInfo())}populateEditForm(t){const a=this.allData[t];if(!a)return;if(document.getElementById("holidayInput").value=a.name,this.datepicker){const[e,n,s]=a.date.split(" "),d={Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11},l=new Date(s,d[n],parseInt(e));this.datepicker.selectDate(l)}else document.getElementById("dateInput").value=a.date;document.getElementById("daysInput").value=a.day;const o=document.querySelector(`#${this.options.addModalId} .modal-title`);o&&(o.textContent="Edit Holiday");const i=document.querySelector(`#${this.options.addModalId} form button[type="submit"]`);i&&(i.textContent="Update Holiday")}handleFormSubmit(){const t=document.getElementById("holidayInput").value;let a;if(this.datepicker&&this.datepicker.selectedDates[0]){const d=this.datepicker.selectedDates[0],l=d.getDate(),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][d.getMonth()],c=d.getFullYear();a=`${l} ${r} ${c}`}else a=document.getElementById("dateInput").value;const o=document.getElementById("daysInput").value;if(!t||!a||!o){alert("Please fill in all required fields");return}const i={name:t,date:a,day:o};this.editingIndex!==null?(this.allData[this.editingIndex]=i,this.editingIndex=null):(this.allData.unshift(i),this.totalPages=Math.ceil(this.allData.length/this.options.itemsPerPage)),this.sortColumn&&this.sortData(),document.getElementById("holidayInput").value="",this.datepicker?this.datepicker.clear():document.getElementById("dateInput").value="",document.getElementById("daysInput").value="";const e=document.querySelector(`#${this.options.addModalId} .modal-title`);e&&(e.textContent="Add Holiday");const n=document.querySelector(`#${this.options.addModalId} form button[type="submit"]`);n&&(n.textContent="Add Holidays");const s=window.bootstrap.Modal.getInstance(document.getElementById(this.options.addModalId));s&&s.hide(),this.renderTable(),this.renderPagination(),this.updateResultsInfo()}deleteHoliday(t){t<0||t>=this.allData.length||(this.allData.splice(t,1),this.totalPages=Math.ceil(this.allData.length/this.options.itemsPerPage),this.currentPage>this.totalPages&&(this.currentPage=this.totalPages||1),this.renderTable(),this.renderPagination(),this.updateResultsInfo())}getDataAsJSON(){return JSON.stringify(this.allData)}searchHolidays(t){if(!t){this.renderTable(),this.renderPagination(),this.updateResultsInfo();return}t=t.toLowerCase();const a=this.allData.filter(i=>i.name.toLowerCase().includes(t)||i.date.toLowerCase().includes(t)||i.day.toLowerCase().includes(t)),o=this.allData;this.allData=a,this.totalPages=Math.ceil(this.allData.length/this.options.itemsPerPage),this.currentPage=1,this.renderTable(),this.renderPagination(),this.updateResultsInfo(),this.allData=o}}document.addEventListener("DOMContentLoaded",()=>{if(typeof g>"u"){console.error("AirDatepicker is not loaded. Please include the AirDatepicker library.");return}const h=new f;window.tableManager=h});
