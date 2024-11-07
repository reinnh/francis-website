function ourServices(){
    const project=[
        {
            image:'i/14035684.png',
            title:'Our Services',
            description:'An interior design coorporation in kenya that specializes in creating timeless space through bespoke solutions'
        },
        {
            image:'i/5151994.png',
            title:'Residential Interior Design',
            description:'We design a highly functional and beatiful interior spaces that represent and match your company with goals to boast brand image'
        },
        {
            image:'i/gypsum.png',
            title:'Gypsum Ceilings',
            description:'Gypsum ceiling design creates exquisite homes , fire resistant and sound isolation homes due to their easy to fit , decorate and enhance aesthetic andartistic  homes'
        },
        {
            image:'i/3426740.png',
            title:'Painting &amp; Special Effects',
            description:'here are many ways to finish a wall however there are many paint effects that can be used depending on the project and techniques'
        }
     
    ]
    
    
    
    
    const wrapper=document.querySelector('.js-project')
    let projectHTML='';
    project.forEach((projectItems)=>{
        projectHTML+=`  <div class="commercial-interior-design text-light">
                            <div class="image-text d-flex gap-2">
                                <div class="img-container">
                                    <img src="${projectItems.image}" alt="">
                                </div>
                                    <p class="fs-4 t">${projectItems.title}</p>
                            </div>
                            <p>
                                ${projectItems.description}
                            </p>
                        </div >`;
    });
    wrapper.innerHTML=projectHTML;
}
ourServices();

const Card=[
    {
       image:'projects/IMG-20241017-WA0031.jpg',
       imText:'Painting  &amp; Interior Finishing' 
    },
    {
        image:'projects/IMG-20241017-WA0027.jpg',
        imText:'Wall Finishing' 
     },
     {
        image:'projects/IMG-20241017-WA0028.jpg',
        imText:' Painting &amp; gypsum fitting' 
     },
     {
        image:'projects/IMG-20241017-WA0026.jpg',
        imText:'Exterior Design &amp;gypsum ceiling' 
     }
]


function cardGeneratorRender(){
const cardElement=document.querySelector('.js-card-project');
let CardHTML='';
Card.forEach((cardItem)=>{
    CardHTML+=` <div class="col-md-6   col-lg-3">
                    <div class="card bg-light">
                        <div class=" p-0 card-body text-center">
                            <img src="${cardItem.image}"
                            class="
                             mb-3"
                             alt="">
                             <p class="t h5 text-secondary card-text">
                                ${cardItem.imText}
                             </p>
                        </div>
                    </div>
                </div>`;
});
cardElement.innerHTML=CardHTML;
}
cardGeneratorRender();

function LprojectRender(){
    const Lprojects=[
        {
            image:'projects/IMG-20241017-WA0018.jpg',
            imText:'gypsum ceiling',
            id:'lprojects1'
        },
        {
            image:'projects/IMG-20241017-WA0025.jpg',
            imText:'external wall finish',
            id:'lprojects2'
        },
        {
            image:'projects/IMG-20241017-WA0023.jpg',
            imText:'living room',
            id:'lprojects3'
        },
        {
            image:'projects/IMG-20241017-WA0033.jpg',
            imText:'kitchen',
            id:'lprojects4'
        },
        {
            image:'projects/IMG-20241017-WA0022.jpg',
            imText:'dinning',
            id:'lprojects5'
        },
        {
            image:'projects/IMG-20241017-WA0014.jpg',
            imText:'gypsum ceiling &amp; s-effects',
            id:'lprojects6'
        }
    
    ]
    
    const LprojectElement=document.querySelector('.js-lproject');
    let LprojectsHTML ='';
    Lprojects.forEach((Litems)=>{
        LprojectsHTML+=`
                     <div class="container mb-3">
                                <div class="item js-scaler"
                                        id="${Litems.id}">
                                        <div class="p-card ">
                                            <a href="personal-cv-website-template/index.html">
                                                <img  class=" col-sm-12" src="${Litems.image}" alt="">
                                            </a>
                                            <div class="">${Litems.imText}</div>
                                            </div>,
                                        </div>
                                    </div>
                                    
                            </div>
        `

        
    
    });
    LprojectElement.innerHTML=LprojectsHTML;
    
}

LprojectRender();

     
