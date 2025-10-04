import"../../admin.bundle-DI9_jvUJ.js";import{i as w}from"../../index-u3wYLQ4o.js";import"../../main-d77jCppw.js";function C(t){const e=getComputedStyle(document.documentElement).getPropertyValue(t).trim();return/^\d{1,3},\s*\d{1,3},\s*\d{1,3}$/.test(e)?`rgb(${e})`:e}var y=[];const x=t=>{const e=JSON.parse(JSON.stringify(t)),d=n=>{for(const o in n)typeof n[o]=="string"&&n[o].startsWith("--dx-")?n[o]=C(n[o]):typeof n[o]=="object"&&n[o]!==null&&d(n[o])};return d(e),e};function f(t=""){t&&document.documentElement.setAttribute("data-colors",t),y.forEach(e=>{const d=JSON.parse(JSON.stringify(e[0].data)),n=x(structuredClone(d));var o=document.getElementById(e[0].id);if(o){e[0].chart&&e[0].chart.dispose();var i=w(o);e[0].chart=i,n&&typeof n=="object"&&i.setOption(n)}})}function m(t){window.chartUpdateTimeout&&clearTimeout(window.chartUpdateTimeout),window.chartUpdateTimeout=setTimeout(()=>{f(t)},50)}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll('input[name="data-colors"]').forEach(e=>{e.addEventListener("change",function(){m(this.value)})}),document.querySelectorAll('input[name="data-bs-theme"]').forEach(e=>{e.addEventListener("change",function(){m(this.value)})});const t=document.getElementById("darkModeButton");t&&t.addEventListener("click",function(){const d=(document.documentElement.getAttribute("data-colors")||document.documentElement.getAttribute("data-bs-theme"))==="light"?"dark":"light";document.documentElement.setAttribute("data-bs-theme",d),m(d)})});var F={series:[{type:"gauge",axisLine:{lineStyle:{width:20,color:[[.3,"--dx-info"],[.7,"--dx-primary"],[1,"--dx-danger"]]}},pointer:{itemStyle:{color:"auto"}},grid:{top:"0%",left:"0%",right:"0%",bottom:"0%",containLabel:!0},axisTick:{distance:-20,length:8,lineStyle:{color:"--dx-secondary-bg",width:2}},splitLine:{distance:-30,length:30,lineStyle:{color:"--dx-secondary-bg",width:4}},axisLabel:{color:"inherit",distance:25,fontSize:12},detail:{valueAnimation:!0,formatter:"{value} GB",fontSize:16,color:"inherit"},data:[{value:80}]}],grid:{top:"5%",left:"6%",right:"0%",bottom:"8%"}};y.push([{id:"basicBarChart",data:F}]);const p=[{id:1,name:"My Documents",details:"154 Files"},{id:2,name:"Images",details:"547 Images"},{id:3,name:"Design Templates File",details:"364 file"},{id:4,name:"Others Files",details:"21 Folder"}];let L=5,u=null,s=null;function S(){const t=document.getElementById("folder-container"),e=document.getElementById("folder-count"),d=document.getElementById("folderNameInput"),n=document.querySelector("#createFolderModal .btn.btn-primary"),o=document.getElementById("confirmDeleteBtn"),i=document.getElementById("searchFileInput"),g=document.querySelector("#createFolderModal .modal-header h6"),v=document.getElementById("createFolderModal");e.textContent=p.length,p.forEach(a=>{h(a.id,a.name,a.details,t)}),v.addEventListener("show.bs.modal",function(a){const l=a.relatedTarget;if(l&&l.classList.contains("edit-folder-btn")){g.textContent="Edit Folder",n.textContent="Update Folder";const c=l.closest(".card"),r=c.querySelector("h6 a").textContent;d.value=r,s=c}else g.textContent="Create Folder",n.textContent="Add Folder",d.value="",s=null}),n.addEventListener("click",()=>{const a=d.value.trim();if(a===""){alert("Please enter a folder name.");return}s?(s.querySelector("h6 a").textContent=a,s=null):h(L++,a,"0 Files",t),d.value="",window.bootstrap.Modal.getInstance(document.getElementById("createFolderModal")).hide()}),t.addEventListener("click",function(a){a.target.closest("[data-bs-target='#deleteModal']")&&(u=a.target.closest(".col-md-6"))}),o.addEventListener("click",()=>{u&&(u.remove(),b(t,e),u=null)}),i.addEventListener("input",()=>{const a=i.value.toLowerCase(),l=t.querySelectorAll(".col-md-6");l.forEach(r=>{const E=r.querySelector("h6 a").textContent.toLowerCase().includes(a);r.style.display=E?"":"none"});const c=[...l].filter(r=>r.style.display!=="none");e.textContent=c.length})}function h(t,e,d,n){const o=document.createElement("div");o.className="col-md-6 col-xxl-3",o.innerHTML=`
    <div class="card">
      <div class="card-body">
        <div class="dropdown float-end">
          <a href="#!" class="link link-custom-primary" type="button" id="folderDropdownMenuButton${t}" aria-label="Toggle dropdown" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="ri-more-2-fill"></i>
          </a>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="folderDropdownMenuButton${t}">
            <li>
              <a href="#!" class="dropdown-item edit-folder-btn" data-bs-toggle="modal" data-bs-target="#createFolderModal">
                Open Folder
              </a>
            </li>
            <li>
              <a href="#!" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#deleteModal">
                Delete
              </a>
            </li>
          </ul>
        </div>
        <img src="assets/images/file-manager/icons/folder.png" loading="lazy" alt="">
        <div class="mt-4">
          <h6 class="mb-1"><a href="#!" class="text-reset">${e}</a></h6>
          <p class="fs-sm text-muted">${d}</p>
        </div>
      </div>
    </div>
  `,n.appendChild(o),b(n,document.getElementById("folder-count"))}function b(t,e){e.textContent=t.children.length}document.addEventListener("DOMContentLoaded",()=>{f(),S(),window.addEventListener("resize",()=>{window.resizeTimeout&&clearTimeout(window.resizeTimeout),window.resizeTimeout=setTimeout(()=>{f()},250)})});
