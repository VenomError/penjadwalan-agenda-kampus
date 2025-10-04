import"../../admin.bundle-DI9_jvUJ.js";import"../../main-d77jCppw.js";const l=document.getElementById("timeToLeftPage");let n=300;const u=setInterval(function(){const e=Math.floor(n/60),t=n%60;l.textContent=`${e}:${t<10?"0":""}${t}`,n--,n<0&&(clearInterval(u),window.location.href="apps-ecommerce-products-list.html")},1e3),d=[{id:1,category:"Fashion",title:"Crop Top Sweater Clothing",image:"assets/images/products/img-04.png",price:22.12,originalPrice:29.49,discount:25,quantity:1,selectedSize:"S",selectedColor:"bg-primary",colors:["bg-primary","bg-dark","bg-pink","bg-success","bg-danger"],sizes:["S","M","L","XL","2XL"]},{id:2,category:"Footwear",title:"Spar Men Black Running Shoes",image:"assets/images/products/img-03.png",price:71.56,quantity:2,selectedSize:"6",selectedColor:"bg-dark",colors:["bg-dark","bg-pink"],sizes:["6","7","8","9","10"]},{id:3,category:"Fashion",title:"Hoodie Jacket Letterman Sleeve Coat",image:"assets/images/products/img-09.png",price:44.49,quantity:1,selectedSize:"X",selectedColor:"bg-primary",colors:["bg-primary"],sizes:["X","L","XL"]}];function m(){const e=document.getElementById("cartProductList");e.innerHTML="",d.forEach(t=>{const s=t.colors.map(a=>`<a href="#!" class="avatar rounded-circle size-5 chart-icon-ring-primary ${a} outline-offset-0 color-option ${t.selectedColor===a?"border border-dark":""}" data-id="${t.id}" data-color="${a}"></a>`).join(""),i=t.sizes.map(a=>`<a href="#!" class="fw-medium size-option ${t.selectedSize===a?"text-success":"text-muted"}" data-id="${t.id}" data-size="${a}">${a}</a>`).join(""),c=(t.price*t.quantity).toFixed(2),o=document.createElement("div");o.className="card mb-4",o.setAttribute("data-id",t.id),o.innerHTML=`
        <div class="card-body">
          <button type="button" class="btn-close position-absolute top-0 end-0 mt-4 me-4 remove-item"></button>
          <div class="row g-5">
            <div class="col-lg-3">
            <div class="bg-light-subtle rounded-2">
                <img src="${t.image}" loading="lazy" alt="Product Image" class="img-fluid">
            </div>
            </div>
            <div class="col-lg-9">
              <span class="badge bg-light-subtle border border-dark-subtle text-dark">${t.category}</span>
              <h6 class="mt-2 mb-3"><a href="#!" class="text-body">${t.title}</a></h6>
              <div class="row g-5">
                <div class="col">
                  <h6 class="mb-0 lh-base">Select Colors</h6>
                  <div class="d-flex gap-3 align-items-center mt-2 flex-grow-1">${s}</div>
                </div>
                <div class="col">
                  <h6 class="mb-0 lh-base">Select Size</h6>
                  <div class="d-flex gap-2 mt-3">${i}</div>
                </div>
              </div>
              <h5 class="d-flex align-items-center gap-2 mt-4">
                <span class="fs-lg price-display">$${c}</span>
                ${t.originalPrice?`
                  <p class="text-muted text-decoration-line-through fw-normal fs-sm">$${t.originalPrice}</p>
                  <span class="badge bg-danger-subtle border border-danger-subtle text-danger">${t.discount}%</span>`:""}
              </h5>
              <div class="mt-5">
                <div class="input-spin-group input-borderless p-1 border rounded">
                  <button type="button" class="input-spin-minus btn bg-primary-subtle text-primary px-2 border-0 size-8 d-flex justify-content-center align-items-center" data-id="${t.id}"><i data-lucide="minus" class="size-4"></i></button>
                  <input type="text" class="input-spin form-control text-center border-0 h-8 quantity-display" readonly value="${t.quantity}">
                  <button type="button" class="input-spin-plus btn bg-primary-subtle text-primary px-2 border-0 size-8 d-flex justify-content-center align-items-center" data-id="${t.id}"><i data-lucide="plus" class="size-4"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,e.appendChild(o)}),p()}function p(){document.querySelectorAll(".input-spin-minus").forEach(e=>{e.addEventListener("click",()=>{const t=+e.dataset.id,s=d.find(i=>i.id===t);if(s.quantity>1){s.quantity--;const i=e.closest(".card");i.querySelector(".quantity-display").value=s.quantity,i.querySelector(".price-display").textContent=`$${(s.price*s.quantity).toFixed(2)}`,r()}})}),document.querySelectorAll(".input-spin-plus").forEach(e=>{e.addEventListener("click",()=>{const t=+e.dataset.id,s=d.find(c=>c.id===t);s.quantity++;const i=e.closest(".card");i.querySelector(".quantity-display").value=s.quantity,i.querySelector(".price-display").textContent=`$${(s.price*s.quantity).toFixed(2)}`,r()})}),document.querySelectorAll(".remove-item").forEach(e=>{e.addEventListener("click",()=>{const t=e.closest(".card"),s=+t.dataset.id,i=d.findIndex(c=>c.id===s);i!==-1&&(d.splice(i,1),t.remove(),r())})}),document.querySelectorAll(".size-option").forEach(e=>{e.addEventListener("click",()=>{const t=+e.dataset.id,s=e.dataset.size,i=d.find(o=>o.id===t);i.selectedSize=s,e.closest(".card").querySelectorAll(".size-option").forEach(o=>{o.classList.remove("text-success"),o.classList.add("text-muted")}),e.classList.add("text-success"),e.classList.remove("text-muted")})}),document.querySelectorAll(".color-option").forEach(e=>{e.addEventListener("click",()=>{const t=+e.dataset.id,s=e.dataset.color,i=d.find(o=>o.id===t);i.selectedColor=s,e.closest(".card").querySelectorAll(".color-option").forEach(o=>{o.classList.remove("border","border-dark")}),e.classList.add("border","border-dark")})})}function r(){const e=d.reduce((o,a)=>o+a.price*a.quantity,0),t=e*.06,s=e*.1,i=35,c=e+t+i-s;document.getElementById("subtotal").textContent=e.toFixed(2),document.getElementById("vat").textContent=t.toFixed(2),document.getElementById("discount").textContent=s.toFixed(2),document.getElementById("shipping").textContent=i.toFixed(2),document.getElementById("total").textContent=c.toFixed(2)}document.addEventListener("DOMContentLoaded",()=>{m(),r()});
