import"../../admin.bundle-DI9_jvUJ.js";import"../../main-d77jCppw.js";document.addEventListener("DOMContentLoaded",function(){let t=document.querySelector("#fileCount");r();const o=document.querySelector('input[type="file"]'),c=o.closest("label");o.addEventListener("change",function(e){e.target.files.length>0&&(Array.from(e.target.files).forEach(n=>{d(n)}),o.value="",r())});function d(e){const n=document.querySelector("#filesContainer"),i=(e.size/(1024*1024)).toFixed(2);let l="ri-file-text-line";const f=e.type.split("/")[0],a=e.name.split(".").pop().toLowerCase();f==="image"?l="ri-file-image-line":a==="pdf"?l="ri-file-pdf-2-line":["zip","rar","7z","tar","gz"].includes(a)&&(l="ri-file-zip-line");const s=document.createElement("div");s.className="col",s.innerHTML=`
        <div class="card text-center">
          <div class="card-body">
            <i class="${l} fs-2"></i>
            <h6 class="mt-3 mb-1">
              <a href="#!" class="text-reset stretched-link">${e.name}</a>
            </h6>
            <p class="text-muted">${i} MB</p>
          </div>
        </div>
      `,n.insertBefore(s,c.parentElement)}function r(){const n=document.querySelectorAll(".col .card:not(.card-h-100)").length;if(t)t.textContent=`Files (${n})`;else{t=document.createElement("h5"),t.className="mb-5",t.textContent=`Files (${n})`;const i=document.querySelector("#filesContainer");i.parentNode.insertBefore(t,i)}}});
