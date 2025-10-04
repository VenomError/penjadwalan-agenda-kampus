import{c as g,i as m}from"../../admin.bundle-DI9_jvUJ.js";import{u as p}from"../../apexcharts.esm-BofaT7g3.js";import{S as f}from"../../swiper-bundle-BRj3juaA.js";import"../../main-d77jCppw.js";function y(i){const t=getComputedStyle(document.documentElement).getPropertyValue(i).trim();return/^\d{1,3},\s*\d{1,3},\s*\d{1,3}$/.test(t)?`rgb(${t})`:t}var l=[];const b=i=>{const t=JSON.parse(JSON.stringify(i)),e=s=>{for(const a in s)typeof s[a]=="string"&&s[a].startsWith("--dx-")?s[a]=y(s[a]):typeof s[a]=="object"&&s[a]!==null&&e(s[a])};return e(t),t};function u(i=""){i&&document.documentElement.setAttribute("data-colors",i),l.forEach(t=>{const e=JSON.parse(JSON.stringify(t[0].data)),s=b(structuredClone(e));t[0].chart&&t[0].chart.destroy();var a=new p(document.querySelector("#"+t[0].id),s);a.render(),t[0].chart=a})}document.querySelectorAll('input[name="data-colors"]').forEach(i=>{i.addEventListener("change",function(){d(this.value)})});document.querySelectorAll('input[name="data-bs-theme"]').forEach(i=>{i.addEventListener("change",function(){d(this.value)})});var h;(h=document.getElementById("darkModeButton"))==null||h.addEventListener("click",function(){d(this.value)});function d(i){setTimeout(()=>{u(i)},0)}var c={series:[44,55],chart:{height:180,type:"donut"},legend:{show:!0,position:"bottom"},labels:["Process","In Process"],plotOptions:{pie:{startAngle:-90,endAngle:270}},dataLabels:{enabled:!1},fill:{type:"gradient"},colors:["--dx-border-color","--dx-primary"]};l.push([{id:"courseActivitiesChart",data:c}]);var c={series:[{data:[{x:"2018",y:[241,100]},{x:"2019",y:[150,41]},{x:"2020",y:[210,100]},{x:"2021",y:[200,10]},{x:"2022",y:[100,10]},{x:"2023",y:[190,120]},{x:"2024",y:[154,241]}]}],chart:{height:272,type:"rangeBar",zoom:{enabled:!1}},plotOptions:{bar:{isDumbbell:!0,columnWidth:3,dumbbellColors:[["--dx-primary","--dx-pink"]]}},legend:{show:!0,showForSingleSeries:!0,position:"top",horizontalAlign:"center",customLegendItems:["New Students","Leave Students"]},fill:{type:"gradient",gradient:{type:"vertical",gradientToColors:["--dx-primary"],inverseColors:!0,stops:[0,100]}},grid:{padding:{bottom:-10,right:0},xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}}},xaxis:{tickPlacement:"on"},colors:["--dx-pink","--dx-primary"]};l.push([{id:"totalStudentsChart",data:c}]);u();new f(".holiday-swiper",{spaceBetween:24,grabCursor:!0,slidesPerView:1,loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}});class v{constructor(t,e){this.container=document.querySelector(t),this.scrollContainer=this.container.querySelector(".d-flex"),this.dateWidgetItems=this.container.querySelectorAll(".date-widget-item"),this.activeDate=this.container.querySelector(".date-widget-item.active"),this.currentDateElement=document.querySelector(e),this.dateWidgetItems=this.container.querySelectorAll(".date-widget-item"),this.today=new Date,this.currentDay=this.today.getDate(),this.init()}init(){this.displayCurrentDate(),this.scrollToActiveDate(),this.highlightToday(),this.addEventListeners()}displayCurrentDate(){const t={weekday:"long",year:"numeric",month:"long",day:"numeric"},e=this.today.toLocaleDateString("en-US",t);this.currentDateElement.textContent=e}highlightToday(){this.dateWidgetItems.forEach(t=>{parseInt(t.textContent)===this.currentDay&&t.classList.add("active")})}scrollToActiveDate(){this.activeDate&&setTimeout(()=>{const t=this.container.getBoundingClientRect(),e=this.activeDate.getBoundingClientRect(),s=e.left+e.width/2-(t.left+t.width/2);this.container.scrollLeft=s},100)}addEventListeners(){this.dateWidgetItems.forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),this.dateWidgetItems.forEach(o=>{o.classList.remove("active"),o.style.backgroundColor="",o.style.color=""}),t.classList.add("active");const s=parseInt(t.textContent),a=new Date(this.today.getFullYear(),this.today.getMonth(),s),n={weekday:"long",year:"numeric",month:"long",day:"numeric"},r=a.toLocaleDateString("en-US",n);this.currentDateElement.textContent=r})})}}class D{constructor(t,e,s,a=5){this.tableContainer=document.getElementById(t),this.paginationContainer=document.getElementById(e),this.resultsInfoElement=document.getElementById(s),this.pageSize=a,this.currentPage=1,this.data=[],this.filteredData=[],this.totalItems=0,this.initializeData()}initializeData(){this.data=S,this.filteredData=[...this.data],this.totalItems=this.data.length,this.renderTable(),this.renderPagination(),this.updateResultsInfo()}renderTable(){const t=(this.currentPage-1)*this.pageSize,e=Math.min(t+this.pageSize,this.filteredData.length),s=this.filteredData.slice(t,e);let a=`
      <div class="table-responsive">
        <table class="table table-borderless text-nowrap mb-0">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Score</th>
              <th>Date</th>
              <th>Grade</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
      `;s.forEach(n=>{const r=n.status==="Pass"?"bg-success-subtle border border-success-subtle text-success":"bg-danger-subtle border border-danger-subtle text-danger";a+=`
          <tr>
            <td>${n.name}</td>
            <td>${n.score}</td>
            <td>${n.date}</td>
            <td>${n.grade}</td>
            <td><span class="badge ${r}">${n.status}</span></td>
          </tr>
        `}),a+=`
          </tbody>
        </table>
      </div>
      `,this.tableContainer.innerHTML=a}renderPagination(){const t=Math.ceil(this.filteredData.length/this.pageSize);let e=`
        <ul class="pagination justify-content-center justify-content-md-end mb-0">
          <li class="page-item ${this.currentPage===1?"disabled":""}">
            <a class="page-link" href="#!" data-page="prev">
              <i data-lucide="chevron-left" class="size-4"></i> Previous
            </a>
          </li>
      `;for(let a=1;a<=t;a++)e+=`
          <li class="page-item ${this.currentPage===a?"active":""}">
            <a class="page-link" href="#!" data-page="${a}">${a}</a>
          </li>
        `;e+=`
          <li class="page-item ${this.currentPage===t?"disabled":""}">
            <a class="page-link" href="#!" data-page="next">
              Next <i data-lucide="chevron-right" class="size-4"></i>
            </a>
          </li>
        </ul>
      `,this.paginationContainer.innerHTML=e,this.paginationContainer.querySelectorAll(".page-link").forEach(a=>{a.addEventListener("click",n=>{n.preventDefault();const r=a.getAttribute("data-page");r==="prev"&&this.currentPage>1?this.goToPage(this.currentPage-1):r==="next"&&this.currentPage<t?this.goToPage(this.currentPage+1):isNaN(parseInt(r))||this.goToPage(parseInt(r))})}),g({icons:m})}updateResultsInfo(){const t=(this.currentPage-1)*this.pageSize+1,e=Math.min(t+this.pageSize-1,this.filteredData.length);this.resultsInfoElement.innerHTML=`
        Showing <b class="me-1">${t}-${e}</b> of <b class="ms-1">${this.filteredData.length}</b> Results
      `}goToPage(t){this.currentPage=t,this.renderTable(),this.renderPagination(),this.updateResultsInfo()}search(t){if(!t.trim())this.filteredData=[...this.data];else{const e=t.toLowerCase().trim();this.filteredData=this.data.filter(s=>s.name.toLowerCase().includes(e)||s.score.toLowerCase().includes(e)||s.date.toLowerCase().includes(e)||s.grade.toLowerCase().includes(e)||s.status.toLowerCase().includes(e))}this.currentPage=1,this.renderTable(),this.renderPagination(),this.updateResultsInfo()}}const S=[{name:"Dorothy Daley",score:"498/600",date:"12 Jan, 2024",grade:"A",status:"Pass"},{name:"Silvia Hoover",score:"140/600",date:"12 Jan, 2024",grade:"D",status:"Fail"},{name:"Jonathan Davis",score:"450/600",date:"12 Jan, 2024",grade:"A",status:"Pass"},{name:"Martha Stewart",score:"320/600",date:"12 Jan, 2024",grade:"B",status:"Pass"},{name:"Harold Finch",score:"275/600",date:"12 Jan, 2024",grade:"C",status:"Pass"},{name:"John Smith",score:"510/600",date:"15 Jan, 2024",grade:"A",status:"Pass"},{name:"Emma Wilson",score:"180/600",date:"15 Jan, 2024",grade:"D",status:"Fail"},{name:"Michael Brown",score:"350/600",date:"17 Jan, 2024",grade:"B",status:"Pass"},{name:"Olivia Taylor",score:"420/600",date:"18 Jan, 2024",grade:"A",status:"Pass"},{name:"James Anderson",score:"290/600",date:"19 Jan, 2024",grade:"C",status:"Pass"},{name:"Sophia Martinez",score:"130/600",date:"20 Jan, 2024",grade:"D",status:"Fail"},{name:"William Johnson",score:"460/600",date:"22 Jan, 2024",grade:"A",status:"Pass"}];document.addEventListener("DOMContentLoaded",()=>{const i=new D("resultsTable","pagination","showingResults");new v("section[data-simplebar]","#current-date");const t=document.getElementById("searchInput");t&&t.addEventListener("input",e=>{i.search(e.target.value)})});
