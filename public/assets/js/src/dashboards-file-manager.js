import"../../admin.bundle-DI9_jvUJ.js";import{u as c}from"../../apexcharts.esm-BofaT7g3.js";import{S as p}from"../../swiper-bundle-BRj3juaA.js";import"../../main-d77jCppw.js";function u(a){const t=getComputedStyle(document.documentElement).getPropertyValue(a).trim();return/^\d{1,3},\s*\d{1,3},\s*\d{1,3}$/.test(t)?`rgb(${t})`:t}var r=[];const f=a=>{const t=JSON.parse(JSON.stringify(a)),s=e=>{for(const o in e)typeof e[o]=="string"&&e[o].startsWith("--dx-")?e[o]=u(e[o]):typeof e[o]=="object"&&e[o]!==null&&s(e[o])};return s(t),t};function d(a=""){a&&document.documentElement.setAttribute("data-colors",a),r.forEach(t=>{const s=JSON.parse(JSON.stringify(t[0].data)),e=f(structuredClone(s));t[0].chart&&t[0].chart.destroy();var o=new c(document.querySelector("#"+t[0].id),e);o.render(),t[0].chart=o})}document.querySelectorAll('input[name="data-colors"]').forEach(a=>{a.addEventListener("change",function(){n(this.value)})});document.querySelectorAll('input[name="data-bs-theme"]').forEach(a=>{a.addEventListener("change",function(){n(this.value)})});var l;(l=document.getElementById("darkModeButton"))==null||l.addEventListener("click",function(){n(this.value)});function n(a){setTimeout(()=>{d(a)},0)}var i={series:[{name:"Total GB",data:[44,55,41,67,22]}],chart:{height:290,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{borderRadius:10,columnWidth:"50%"}},dataLabels:{enabled:!1},stroke:{width:1},grid:{padding:{right:-12,top:-18,bottom:-8,left:0}},xaxis:{labels:{rotate:-45},categories:["Dropbox","Cloud","Mega","Google","Drive"],tickPlacement:"on"},fill:{type:"gradient",gradient:{shade:"light",type:"horizontal",shadeIntensity:.25,gradientToColors:void 0,inverseColors:["--dx-primary"],opacityFrom:.85,opacityTo:.85,stops:[50,0,100]}},yaxis:{labels:{offsetX:-8}},colors:["--dx-primary"]};r.push([{id:"analyticsChart",data:i}]);var i={series:[44,55,41,17,15],chart:{height:252,type:"donut"},plotOptions:{pie:{startAngle:-90,endAngle:90,offsetY:5}},grid:{padding:{bottom:-80}},stroke:{width:0},fill:{type:"gradient"},labels:["Docs","Images","Video","Audio","Others"],legend:{position:"bottom"},colors:["--dx-primary","--dx-success","--dx-warning","--dx-secondary","--dx-danger"]};r.push([{id:"overviewStorageChart",data:i}]);d();new p(".favorites-swiper",{spaceBetween:24,grabCursor:!0,slidesPerView:1,loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});class h{constructor(t,s,e){this.tableElement=document.getElementById(t),this.searchInput=document.getElementById(s),this.data=e,this.init()}init(){this.renderTable(this.data),this.searchInput.addEventListener("input",()=>{this.handleSearch()})}handleSearch(){const t=this.searchInput.value.toLowerCase().trim();if(!t){this.renderTable(this.data);return}const s=this.data.filter(e=>e.name.toLowerCase().includes(t)||e.type.toLowerCase().includes(t)||e.size.toLowerCase().includes(t)||e.date.toLowerCase().includes(t));this.renderTable(s)}renderTable(t){const s=this.tableElement.querySelector("tbody");if(s.innerHTML="",t.length===0){const e=document.createElement("tr");e.innerHTML=`
         <td colspan="6" class="text-center py-4">
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
                                                <path fill="url(#SVGID_1__h35ynqzIJzH4_gr1)" d="M40.036,33.826L31.68,25.6c0.847-1.739,1.335-3.684,1.335-5.748c0-7.27-5.894-13.164-13.164-13.164	S6.688,12.582,6.688,19.852c0,7.27,5.894,13.164,13.164,13.164c2.056,0,3.995-0.485,5.728-1.326l3.914,4.015l4.331,4.331	c1.715,1.715,4.496,1.715,6.211,0C41.751,38.321,41.751,35.541,40.036,33.826z"></path>
                                                <path fill="none" stroke="#10cfe3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M31.95,25.739l8.086,8.086c1.715,1.715,1.715,4.496,0,6.211l0,0c-1.715,1.715-4.496,1.715-6.211,0	l-4.331-4.331"></path>
                                                <path fill="none" stroke="#10cfe3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M7.525,24.511c-1.771-4.694-0.767-10.196,3.011-13.975c3.847-3.847,9.48-4.817,14.228-2.912"></path>
                                                <path fill="none" stroke="#10cfe3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M30.856,12.603c3.376,5.114,2.814,12.063-1.688,16.565c-4.858,4.858-12.565,5.129-17.741,0.814"></path>
                                            </svg>
                                            <p class="mt-2 text-center text-gray-500 dark:text-dark-500">No matching records found</p>
                        <p class="text-muted mb-0">We couldn't find any categories matching your search.</p>
                    </div>
                </td>
        `,s.appendChild(e);return}t.forEach(e=>{const o=document.createElement("tr");o.innerHTML=`
          <td>
            <div class="d-flex gap-3 align-items-center">
              <img src="assets/images/file-manager/icons/${e.icon}" loading="lazy" alt="" class="size-8">
              <a href="#!" class="text-body">
                <h6 class="mb-0">${e.name}</h6>
              </a>
            </div>
          </td>
          <td>${e.type}</td>
          <td>${e.size}</td>
          <td>${e.date}</td>
          <td>
            <div class="d-flex gap-3">
              <a class="link link-custom-primary" href="#!" aria-label="overview"><i class="ri-edit-2-line"></i></a>
              <a class="link link-custom-primary" href="#!" aria-label="edit"><i class="ri-download-2-line"></i></a>
              <a href="#!" class="link link-custom-danger" aria-label="delete"><i class="ri-delete-bin-6-line"></i></a>
            </div>
          </td>
        `,s.appendChild(o)})}}const m=[{name:"Animation Project",type:"Document",size:"24 MB",date:"21 July, 2024",icon:"document.png"},{name:"UI Design",type:"Image",size:"154 MB",date:"28 May, 2024",icon:"picture.png"},{name:"Admin Tutorial",type:"Video",size:"149 MB",date:"02 Feb, 2024",icon:"video.png"},{name:"Brand Identity",type:"AI",size:"17 MB",date:"11 Feb, 2024",icon:"ai-file-format.png"},{name:"Resume",type:"PDF",size:"11 MB",date:"20 May, 2024",icon:"pdf.png"}];document.addEventListener("DOMContentLoaded",()=>{new h("fileTable","searchInput",m)});
