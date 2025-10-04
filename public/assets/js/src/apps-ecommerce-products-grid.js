import{c as m,i as p}from"../../admin.bundle-DI9_jvUJ.js";/* empty css                           */import"../../main-d77jCppw.js";document.addEventListener("DOMContentLoaded",function(){u(),c(),document.querySelectorAll(".form-check-input").forEach(i=>{i.addEventListener("change",c)}),document.querySelectorAll(".show-more").forEach(i=>{i.addEventListener("click",function(e){e.preventDefault(),h(this)})})});function u(){document.querySelectorAll(".product-filter").forEach(i=>{i.querySelectorAll(".form-check").forEach((t,a)=>{a>=5&&(t.style.display="none")})})}function h(i){const t=i.closest(".product-filter").querySelectorAll(".form-check"),a=i.textContent.includes("More");t.forEach((s,o)=>{o>=5&&(s.style.display=a?"block":"none")}),a?i.innerHTML='Show Less <i data-lucide="chevron-up" class="size-4"></i>':i.innerHTML='Show More <i data-lucide="chevron-down" class="size-4"></i>'}function c(){document.querySelectorAll(".product-filter").forEach(i=>{const e=i.querySelector("h6"),t=i.querySelectorAll(".form-check-input:checked"),a=e.textContent.split("(")[0].trim();e.textContent=`${a} (${t.length})`})}var b=document.getElementById("arbitrary-values-slider"),l=["$0","$50","$100","$500"],d={to:function(i){return l[Math.round(i)]},from:function(i){return l.indexOf(i)}};noUiSlider.create(b,{start:["$50","$100"],range:{min:0,max:l.length-1},step:1,tooltips:!0,format:d,pips:{mode:"steps",format:d,density:50}});class f{constructor(e,t={}){this.container=document.getElementById(e),this.options={itemsPerPage:t.itemsPerPage||8,pageButtonCount:t.pageButtonCount||3,...t},this.currentPage=1,this.data=[],this.filteredData=[],this.modalId="deleteModal",this.setupModal(),this.deleteItemId=null}setData(e){return this.data=e,this.filteredData=[...e],this.render(),this}setupModal(){if(!document.getElementById(this.modalId)){const e=`
          <div class="modal fade" id="${this.modalId}" tabindex="-1" aria-labelledby="${this.modalId}Label" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-xs">
              <div class="modal-content p-7 text-center">
                <div class="size-14 bg-danger-subtle rounded-circle avatar mx-auto mb-4">
                  <i data-lucide="trash-2" class="size-6 text-danger"></i>
                </div>
                <h5 class="mb-4 lh-base">Are you sure you want to delete this Product?</h5>
                <div class="d-flex justify-content-center align-items-center gap-2">
                  <button class="btn btn-danger" id="confirmDelete">Delete</button>
                  <button class="btn btn-link link-primary text-dark" data-bs-dismiss="modal">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        `;document.body.insertAdjacentHTML("beforeend",e),document.getElementById("confirmDelete").addEventListener("click",()=>{this.deleteItemId!==null&&(this.removeItem(this.deleteItemId),this.deleteItemId=null,this.hideModal())})}}showDeleteModal(e){this.deleteItemId=e;const t=document.getElementById(this.modalId);new window.bootstrap.Modal(t).show()}hideModal(){const e=document.getElementById(this.modalId);window.bootstrap.Modal.getInstance(e).hide()}removeItem(e){this.data=this.data.filter(a=>a.id!==e),this.filteredData=this.filteredData.filter(a=>a.id!==e);const t=Math.ceil(this.filteredData.length/this.options.itemsPerPage);this.currentPage>t&&this.currentPage>1&&(this.currentPage=t),this.render()}generateProductsHtml(){const e=(this.currentPage-1)*this.options.itemsPerPage,t=e+this.options.itemsPerPage,a=this.filteredData.slice(e,t);return a.length===0?'<div class="col-12 text-center"><p>No products found</p></div>':a.map(s=>`
        <div class="col-md-6 col-lg-4 col-xl-3">
          <div class="card card-hover-animate">
            <div class="p-2 card-body">
              <div class="position-relative p-5 bg-${s.bgColor}-subtle">
                <div class="dropdown position-absolute top-0 end-0 mt-2 me-2">
                  <a href="#!" class="link link-custom-danger avatar rounded-circle bg-body-secondary size-10" aria-label="More Action" id="moreDropdown${s.id}" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="ri-more-2-fill"></i>
                  </a>
                  <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="moreDropdown${s.id}">
                    <li><a class="dropdown-item" href="apps-ecommerce-product-overview.html"><i class="align-middle me-1 ri-eye-line"></i> Overview</a></li>
                    <li><a class="dropdown-item" href="apps-ecommerce-create-products.html"><i class="align-middle me-1 ri-pencil-line"></i> Edit</a></li>
                    <li><a class="dropdown-item delete-btn" href="#" data-id="${s.id}"><i class="align-middle me-1 ri-delete-bin-6-line"></i> Delete</a></li>
                  </ul>
                </div>
                <img src="${s.image}" loading="lazy" alt="${s.title}" class="img-fluid">
              </div>
              <div class="p-1 mt-2">
                <h5 class="mb-2 lh-base fs-lg">${s.price}</h5>
                <h6 class="mb-1"><a href="apps-ecommerce-product-overview.html" class="text-reset">${s.title}</a></h6>
                <p class="text-muted">${s.category}</p>
                <div class="d-flex gap-2 mt-3">
                  <a href="apps-ecommerce-shop-cart.html" class="w-100 btn btn-primary">Add to Cart</a>
                  <a href="#!" class="btn btn-light btn-icon flex-shrink-0" aria-label="favorite">
                    <i class="fs-lg ri-heart-line"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      `).join("")}generatePaginationHtml(){const e=this.filteredData.length,t=Math.ceil(e/this.options.itemsPerPage);if(t<=1)return"";let a=`
        <div class="row align-items-center g-3 mb-5">
          <div class="col-md-6">
            <p class="text-muted text-center text-md-start mb-0">
              Showing <b class="me-1">${(this.currentPage-1)*this.options.itemsPerPage+1}-${Math.min(this.currentPage*this.options.itemsPerPage,e)}</b>
              of<b class="ms-1">${e}</b> Results
            </p>
          </div>
          <div class="col-md-6">
            <nav aria-label="Page navigation">
              <ul class="pagination justify-content-center justify-content-md-end mb-0">
                <li class="page-item ${this.currentPage===1?"disabled":""}">
                  <a class="page-link prev-page" href="#!"><i data-lucide="chevron-left" class="size-4"></i> Previous</a>
                </li>
      `,s=Math.max(1,this.currentPage-Math.floor(this.options.pageButtonCount/2)),o=Math.min(t,s+this.options.pageButtonCount-1);o-s+1<this.options.pageButtonCount&&(s=Math.max(1,o-this.options.pageButtonCount+1));for(let r=s;r<=o;r++)a+=`
          <li class="page-item ${r===this.currentPage?"active":""}">
            <a class="page-link page-number" data-page="${r}" href="#!">${r}</a>
          </li>
        `;return a+=`
                <li class="page-item ${this.currentPage===t?"disabled":""}">
                  <a class="page-link next-page" href="#!">Next <i data-lucide="chevron-right" class="size-4"></i></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      `,a}render(){if(!this.container)return;const e=this.generateProductsHtml(),t=this.generatePaginationHtml();this.container.innerHTML=`
        <div class="row">
          ${e}
        </div>
        ${t}
      `,this.addEventListeners(),m({icons:p})}addEventListeners(){const e=this.container.querySelector(".prev-page"),t=this.container.querySelector(".next-page"),a=this.container.querySelectorAll(".page-number");e&&e.addEventListener("click",o=>{o.preventDefault(),this.currentPage>1&&(this.currentPage--,this.render())}),t&&t.addEventListener("click",o=>{o.preventDefault();const r=Math.ceil(this.filteredData.length/this.options.itemsPerPage);this.currentPage<r&&(this.currentPage++,this.render())}),a.forEach(o=>{o.addEventListener("click",r=>{r.preventDefault();const n=parseInt(r.target.dataset.page);n!==this.currentPage&&(this.currentPage=n,this.render())})}),this.container.querySelectorAll(".delete-btn").forEach(o=>{o.addEventListener("click",r=>{r.preventDefault();const n=r.target.closest(".delete-btn");if(n){const g=parseInt(n.dataset.id);this.showDeleteModal(g)}})})}}document.addEventListener("DOMContentLoaded",function(){const i=[{id:1,title:"Blouse Ruffle Tube top",price:"$14.99",category:"Fashion",image:"assets/images/products/img-01.png",bgColor:"primary"},{id:2,title:"Gold-colored locket watch",price:"$59.99",category:"Watch",image:"assets/images/products/img-02.png",bgColor:"success"},{id:3,title:"Spar Men Black Running Shoes",price:"$35.78",category:"Footwear",image:"assets/images/products/img-03.png",bgColor:"secondary"},{id:4,title:"Crop Top Sweater Clothing",price:"$29.49",category:"Fashion",image:"assets/images/products/img-04.png",bgColor:"pink"},{id:5,title:"Sleeve Clothing Leggings",price:"$22.00",category:"Fashion",image:"assets/images/products/img-05.png",bgColor:"pink"},{id:6,title:"Bra Lace Crop top",price:"$29.99",category:"Fashion",image:"assets/images/products/img-06.png",bgColor:"light"},{id:7,title:"Yellow Women Shoes",price:"$36.87",category:"Footwear",image:"assets/images/products/img-07.png",bgColor:"warning"},{id:8,title:"Tote Bag Leather Handbag Dolce",price:"$79.99",category:"Bags",image:"assets/images/products/img-08.png",bgColor:"danger"},{id:9,title:"Hoodie Jacket Letterman Sleeve Coat",price:"$44.49",category:"Fashion",image:"assets/images/products/img-09.png",bgColor:"info"},{id:10,title:"Straw hat Cap Cowboy hat Sun hat",price:"$12.50",category:"Accessories",image:"assets/images/products/img-10.png",bgColor:"orange"},{id:11,title:"Sneakers Shoe Nike Basketball",price:"$32.00",category:"Footwear",image:"assets/images/products/img-11.png",bgColor:"success"},{id:12,title:"Wireless Earbuds",price:"$89.99",category:"Electronics",image:"assets/images/products/img-12.png",bgColor:"pink"},{id:13,title:"Yoga Mat Premium",price:"$32.95",category:"Fitness",image:"assets/images/products/img-13.png",bgColor:"pink"},{id:14,title:"Stainless Steel Water Bottle",price:"$24.99",category:"Accessories",image:"assets/images/products/img-14.png",bgColor:"light"},{id:15,title:"Men's Casual Shirt",price:"$38.50",category:"Fashion",image:"assets/images/products/img-15.png",bgColor:"warning"},{id:16,title:"Leather Wallet",price:"$45.00",category:"Accessories",image:"assets/images/products/img-16.png",bgColor:"danger"},{id:17,title:"Pro 20000 mAh Power Bank",price:"$24.99",category:"Electronic",image:"assets/images/products/img-17.png",bgColor:"light"},{id:18,title:"Storm Revolution Football",price:"$49.99",category:"Sports",image:"assets/images/products/img-18.png",bgColor:"warning"},{id:19,title:"Minimal Hoop Earrings",price:"$79.99",category:"Jewelry",image:"assets/images/products/img-19.png",bgColor:"success"},{id:20,title:"Designer Sunglasses",price:"$85.00",category:"Accessories",image:"assets/images/products/img-20.png",bgColor:"pink"}];if(document.getElementById("products-container")){const t=new f("products-container",{itemsPerPage:8,pageButtonCount:3});t.setData(i),window.tableManager=t}});
