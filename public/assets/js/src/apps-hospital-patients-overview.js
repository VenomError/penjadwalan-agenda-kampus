import{c as m,i as p}from"../../admin.bundle-DI9_jvUJ.js";/* empty css                               */import"../../main-d77jCppw.js";VirtualSelect.init({ele:"#reportTypeSelect",options:[{label:"X-Ray",value:"X-Ray"},{label:"Blood Test",value:"Blood Test"},{label:"MRI",value:"MRI"},{label:"CT Scan",value:"CT Scan"},{label:"Ultrasound",value:"Ultrasound"}],allowNewOption:!0});VirtualSelect.init({ele:"#recommendationsSelect",options:[{label:"N/A",value:"N/A"},{label:"Follow-up required",value:"Follow-up required"},{label:"Consult with surgeon",value:"Consult with surgeon"}],allowNewOption:!0});VirtualSelect.init({ele:"#statusSelect",options:[{label:"Completed",value:"Completed"},{label:"In Progress",value:"In Progress"},{label:"Pending",value:"Pending"}]});const d=[{type:"X-Ray",date:"29 May, 2024",doctor:"Dr. Smith",status:"Pending",statusClass:"bg-warning-subtle text-warning border-warning-subtle"},{type:"Blood Test",date:"05 May, 2024",doctor:"Dr. Johnson",status:"Completed",statusClass:"bg-success-subtle text-success border-success-subtle"},{type:"MRI",date:"05 Feb, 2024",doctor:"Dr. Williams",status:"Completed",statusClass:"bg-success-subtle text-success border-success-subtle"},{type:"CT Scan",date:"09 June, 2024",doctor:"Dr. Brown",status:"In Progress",statusClass:"bg-secondary-subtle text-secondary border-secondary-subtle"},{type:"Ultrasound",date:"19 Jan, 2024",doctor:"Dr. Wilson",status:"Completed",statusClass:"bg-success-subtle text-success border-success-subtle"},{type:"Echo",date:"10 Jan, 2024",doctor:"Dr. Lee",status:"Pending",statusClass:"bg-warning-subtle text-warning border-warning-subtle"},{type:"Biopsy",date:"01 Jan, 2024",doctor:"Dr. Adams",status:"Completed",statusClass:"bg-success-subtle text-success border-success-subtle"},{type:"Endoscopy",date:"15 Dec, 2023",doctor:"Dr. White",status:"In Progress",statusClass:"bg-secondary-subtle text-secondary border-secondary-subtle"}],r=4;let i=1;function y(){const t=document.getElementById("report-table-body");t.innerHTML="";const e=(i-1)*r;d.slice(e,e+r).forEach(s=>{t.innerHTML+=`
        <tr>
          <td>${s.type}</td>
          <td>${s.date}</td>
          <td>${s.doctor}</td>
          <td><span class="badge ${s.statusClass}">${s.status}</span></td>
          <td>
            <div class="d-flex align-items-center gap-2">
              <button class="btn btn-sub-secondary rounded-circle size-8 btn-icon"><i class="ri-download-2-line"></i></button>
              <button class="btn btn-sub-danger rounded-circle size-8 btn-icon"><i class="ri-delete-bin-line"></i></button>
            </div>
          </td>
        </tr>
      `});const a=document.getElementById("table-info");a.innerHTML=`Showing <b>${e+1}-${Math.min(e+r,d.length)}</b> of <b>${d.length}</b> Results`,P()}function P(){const t=Math.ceil(d.length/r),e=document.getElementById("pagination");e.innerHTML="",e.innerHTML+=`
      <li class="page-item ${i===1?"disabled":""}">
        <a class="page-link" href="#!" onclick="goToPage(${i-1})">
          <i data-lucide="chevron-left" class="size-4"></i>  Previous
        </a>
      </li>
    `;for(let n=1;n<=t;n++)e.innerHTML+=`
        <li class="page-item ${n===i?"active":""}">
          <a class="page-link" href="#!" onclick="goToPage(${n})">${n}</a>
        </li>
      `;e.innerHTML+=`
      <li class="page-item ${i===t?"disabled":""}">
        <a class="page-link" href="#!" onclick="goToPage(${i+1})">
          Next <i data-lucide="chevron-right" class="size-4"></i>
        </a>
      </li>
    `,m({icons:p})}window.goToPage=function(t){const e=Math.ceil(d.length/r);t<1||t>e||(i=t,y())};y();const c=[{date:"2024-01-01",time:"08:00 AM",name:"Aspirin",dosage:"81mg",frequency:"Daily",start:"2024-01-01",end:"-",doctor:"Dr. Smith",reason:"Heart Health",notes:"Taken with food"},{date:"2024-01-15",time:"09:30 AM",name:"Metformin",dosage:"500mg",frequency:"Twice a day",start:"2024-01-01",end:"-",doctor:"Dr. Johnson",reason:"Diabetes",notes:"After meals"},{date:"2024-02-01",time:"06:00 PM",name:"Atorvastatin",dosage:"20mg",frequency:"Daily",start:"2024-02-01",end:"-",doctor:"Dr. Brown",reason:"High Cholesterol",notes:"Before bedtime"},{date:"2024-03-01",time:"12:00 PM",name:"Antihistamine",dosage:"10mg",frequency:"As needed",start:"2024-03-05",end:"-",doctor:"Dr. Lee",reason:"Allergy",notes:"For rash"},{date:"2024-07-05",time:"08:00 AM",name:"Albuterol Inhaler",dosage:"-",frequency:"As needed",start:"2024-07-05",end:"2025-07-09",doctor:"Dr. Patel",reason:"Asthma",notes:"Use for symptoms"},{date:"2024-08-12",time:"10:00 AM",name:"Omeprazole",dosage:"40mg",frequency:"Daily",start:"2024-08-12",end:"-",doctor:"Dr. Miller",reason:"Acid reflux",notes:"Empty stomach"},{date:"2024-09-01",time:"08:00 AM",name:"Lisinopril",dosage:"10mg",frequency:"Daily",start:"2024-09-01",end:"-",doctor:"Dr. Taylor",reason:"High BP",notes:"Take in morning"}],u=5;let o=1;function M(){const t=document.getElementById("medicine-table-body");t.innerHTML="";const e=(o-1)*u;c.slice(e,e+u).forEach(a=>{t.innerHTML+=`
        <tr>
          <td>${a.date}</td>
          <td>${a.time}</td>
          <td>${a.name}</td>
          <td>${a.dosage}</td>
          <td>${a.frequency}</td>
          <td>${a.start}</td>
          <td>${a.end}</td>
          <td>${a.doctor}</td>
          <td>${a.reason}</td>
          <td>${a.notes}</td>
          <td>
            <div class="d-flex align-items-center gap-2">
              <button class="btn btn-sub-secondary size-8 rounded-circle btn-icon"><i class="ri-pencil-line"></i></button>
              <button class="btn btn-sub-danger size-8 rounded-circle btn-icon"><i class="ri-delete-bin-line"></i></button>
            </div>
          </td>
        </tr>
      `}),document.getElementById("medicineTableInfo").innerHTML=`Showing <b>${e+1}-${Math.min(e+u,c.length)}</b> of <b>${c.length}</b> Results`,T()}function T(){const t=Math.ceil(c.length/u),e=document.getElementById("medicinePagination");e.innerHTML="",e.innerHTML+=`
      <li class="page-item ${o===1?"disabled":""}">
        <a class="page-link" href="#!" onclick="goToMedicinePage(${o-1})">
          <i data-lucide="chevron-left" class="size-4"></i> Previous
        </a>
      </li>
    `;for(let n=1;n<=t;n++)e.innerHTML+=`
        <li class="page-item ${o===n?"active":""}">
          <a class="page-link" href="#!" onclick="goToMedicinePage(${n})">${n}</a>
        </li>
      `;e.innerHTML+=`
      <li class="page-item ${o===t?"disabled":""}">
        <a class="page-link" href="#!" onclick="goToMedicinePage(${o+1})">
          Next <i data-lucide="chevron-right" class="size-4"></i>
        </a>
      </li>
    `,m({icons:p})}window.goToMedicinePage=function(t){const e=Math.ceil(c.length/u);t<1||t>e||(o=t,M())};M();const g=[{date:"07 June, 2024",title:"Annual physical exam",time:"09:00 AM",department:"General Medicine",purpose:"Routine check-up",doctor:"Dr. Michael Johnson",status:"Pending"},{date:"08 June, 2024",title:"Dermatology consultation",time:"02:00 PM",department:"Dermatology",purpose:"Skin condition evaluation",doctor:"Dr. Sarah Evans",status:"Pending"},{date:"09 June, 2024",title:"Physical therapy session",time:"11:30 AM",department:"Physical Therapy",purpose:"Rehabilitation exercises",doctor:"Dr. John Williams",status:"Completed"},{date:"10 June, 2024",title:"Eye examination",time:"03:30 PM",department:"Ophthalmology",purpose:"Vision check-up",doctor:"Dr. Emily Martinez",status:"Completed"},{date:"11 June, 2024",title:"Psychiatry consultation",time:"10:00 AM",department:"Psychiatry",purpose:"Mental health evaluation",doctor:"Dr. James Anderson",status:"Completed"},{date:"12 June, 2024",title:"ENT check",time:"04:00 PM",department:"ENT",purpose:"Ear ringing",doctor:"Dr. Lucas Moore",status:"Pending"},{date:"13 June, 2024",title:"Cardiology visit",time:"01:00 PM",department:"Cardiology",purpose:"Heart pain",doctor:"Dr. Olivia Clark",status:"Completed"},{date:"14 June, 2024",title:"Nutritionist Meeting",time:"10:30 AM",department:"Nutrition",purpose:"Diet plan",doctor:"Dr. Ella Lewis",status:"Completed"},{date:"15 June, 2024",title:"Orthopedic review",time:"11:00 AM",department:"Orthopedics",purpose:"Knee pain",doctor:"Dr. Noah Davis",status:"Pending"}],b=5;let l=1;function f(){const t=document.querySelector("#appointmentTable tbody");t.innerHTML="";const e=(l-1)*b;g.slice(e,e+b).forEach(s=>{const h=document.createElement("tr");h.innerHTML=`
        <td>${s.date}</td>
        <td>${s.title}</td>
        <td>${s.time}</td>
        <td>${s.department}</td>
        <td>${s.purpose}</td>
        <td>${s.doctor}</td>
        <td>
          <span class="badge ${s.status==="Completed"?"bg-success-subtle text-success border border-success-subtle":"bg-warning-subtle text-warning border border-warning-subtle"}">${s.status}</span>
        </td>
        <td>
          <div class="d-flex align-items-center gap-2">
            <button class="btn btn-light text-dark size-8 btn-icon"><i class="ri-eye-line"></i></button>
            <button class="btn btn-light text-dark size-8 btn-icon"><i class="ri-pencil-line"></i></button>
            <button class="btn btn-sub-danger size-8 btn-icon"><i class="ri-delete-bin-line"></i></button>
          </div>
        </td>
        `,t.appendChild(h)});const a=document.getElementById("resultText");a.innerHTML=`Showing <b>${e+1}-${Math.min(e+b,g.length)}</b> of <b>${g.length}</b> Results`,$()}function $(){const t=Math.ceil(g.length/b),e=document.getElementById("paginationmandical");e.innerHTML="",e.innerHTML+=`
        <li class="page-item ${l===1?"disabled":""}">
            <a class="page-link" href="#!" onclick="goToAppointmentPage(${l-1})">
                <i data-lucide="chevron-left" class="size-4"></i> Previous
            </a>
        </li>
    `;for(let n=1;n<=t;n++)e.innerHTML+=`
            <li class="page-item ${l===n?"active":""}">
                <a class="page-link" href="#!" onclick="goToAppointmentPage(${n})">${n}</a>
            </li>
        `;e.innerHTML+=`
        <li class="page-item ${l===t?"disabled":""}">
            <a class="page-link" href="#!" onclick="goToAppointmentPage(${l+1})">
                Next <i data-lucide="chevron-right" class="size-4"></i>
            </a>
        </li>
    `,m({icons:p})}window.goToAppointmentPage=function(t){const e=Math.ceil(g.length/b);t<1||t>e||(l=t,f())};f();
