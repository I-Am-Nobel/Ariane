const ArticlesEpingles = [
    {
        ImgSrc: 'Assets/img/1740798823428.jpg',
        Nom: 'Vehicule',
        Prix: '25K',
        devise: '$',
        numero: '0851780126'
    },
    {
        ImgSrc: 'Assets/img/1740798757016.jpg',
        Nom: 'Prado',
        Prix: '35K',
        devise: '$',
        numero: '0851780126'
    },
    {
        ImgSrc: 'Assets/img/1740798488661.jpg',
        Nom: 'Bottes',
        Prix: 25,
        devise: '$',
        numero: '0851780126'
    },
    {
        ImgSrc: 'Assets/img/1740798097858.jpg',
        Nom: 'Chrome Book',
        Prix: 725,
        devise: '$',
        numero: '0851780126'
    },
    {
        ImgSrc: 'Assets/img/1740797800807.jpg',
        Nom: 'IPhone 15 pro',
        Prix: 25,
        devise: '$',
        numero: '0851780126'
    },
    {
        ImgSrc: 'Assets/img/1740797774773.jpg',
        Nom: 'IPhone 16 pro',
        Prix: 725,
        devise: '$',
        numero: '0851780126'
    },
    {
        ImgSrc: 'Assets/img/1740798476915.jpg',
        Nom: 'Bottes gris',
        Prix: 25,
        devise: '$',
        numero: '0851780126'
    },
    {
        ImgSrc: 'Assets/img/1740798620507.jpg',
        Nom: 'Bottes noirs',
        Prix: 725,
        devise: '$',
        numero: '0851780126'
    },
];
let Articles = [
    {
        ImgSrc: 'Assets/img/1740798823428.jpg',
        Nom: 'Hundai',
        Prix: 25,
        devise: '$',
        numero: '0851780126'
    },
    {
        ImgSrc: 'Assets/img/1740797800807.jpg',
        Nom: 'IPhone 16 pro',
        Prix: 725,
        devise: '$',
        numero: '0851780126'
    },
    {
        ImgSrc: 'Assets/img/1740798470885.jpg',
        Nom: 'Bottes',
        Prix: 25,
        devise: '$',
        numero: '0851780126'
    },
    {
        ImgSrc: 'Assets/img/1740798757016.jpg',
        Nom: 'Prado',
        Prix: '35K',
        devise: '$',
        numero: '0851780126'
    },
    {
        ImgSrc: 'Assets/img/1740798488661.jpg',
        Nom: 'Bottes',
        Prix: 25,
        devise: '$',
        numero: '0851780126'
    },
    {
        ImgSrc: 'Assets/img/1740798097858.jpg',
        Nom: 'Chrome Book',
        Prix: 725,
        devise: '$',
        numero: '0851780126'
    },
    {
        ImgSrc: 'Assets/img/1740797800807.jpg',
        Nom: 'IPhone 15 pro',
        Prix: 25,
        devise: '$',
        numero: '0851780126'
    },
    {
        ImgSrc: 'Assets/img/1740797774773.jpg',
        Nom: 'IPhone 16 pro',
        Prix: 725,
        devise: '$',
        numero: '0851780126'
    },
    {
        ImgSrc: 'Assets/img/1740798476915.jpg',
        Nom: 'Bottes gris',
        Prix: 25,
        devise: '$',
        numero: '0851780126'
    },
];

function LoadData(Articles) {

    const ArticlesContainer = document.querySelector('.articles-container')
    if(Articles.length==0){
        return ArticlesContainer.innerHTML=`     <div class="d-flex justify-content-center my-4 rounded p-4"
      style="flex-direction: column;  background-color: rgb(230, 188, 217);"
      >
      <h4>Oups !</h4> 
        Aucun article trouvé !
      </div>`
    }
   while (ArticlesContainer.firstChild){
    ArticlesContainer.removeChild(ArticlesContainer.firstChild);
   }
    Articles.forEach((article, index) => {
        const ArticleBoucle = document.createElement("div");
        ArticleBoucle.classList.add("article")
        ArticleBoucle.innerHTML = `  
      <div id=${index} class="card articles  m-2 p-2" >   
        <h5 style="text-align: center;">${article.Nom} </h5>
        <img class="img-fluid w-100"
             src=${article.ImgSrc} alt="">
             <h5 style="text-align: center;"> <strong>Prix </strong>${article.devise} ${article.Prix}</h5>
             <div
             id=${'commande' + index} 
             class="p-2 commande rounded ${'commande' + index} "
             style="text-align: center;"
             >
             <i class="bi bi-whatsapp" ></i>
             Passer la commande</div>
      </div> 
    `;
        const commande = ArticleBoucle.querySelector('.commande' + index);
        commande.addEventListener('click', () => {
            const message = `Bonjour, je voudrais commander : ${article.Nom} au prix de ${article.Prix}$.`;
            const url = `https://wa.me/${article.numero}?text=${encodeURIComponent(message)}`;
            // Rediriger vers WhatsApp
            window.open(url, "_blank");
        })
        
        ArticlesContainer.appendChild(ArticleBoucle);
    })
}
LoadData(Articles)
//  A la une  

ArticlesEpingles.forEach((article, index) => {
    const ArticleBoucle = document.createElement("div");
    ArticleBoucle.innerHTML = `  
      <div>
     <strong>${article.Nom}</strong> 
      <img 
      class="img-fluid "
      src=${article.ImgSrc} alt="">
     <strong>${article.devise} ${article.Prix}</strong> 
    </div>
    </div>
    `;


    const ArticlesContainer = document.querySelector('.AlaUne')
    ArticlesContainer.appendChild(ArticleBoucle);
    ArticleBoucle.onclick = () => {
        const message = `Bonjour, je voudrais commander : ${article.Nom} au prix de ${article.Prix}$.`;
        const url = `https://wa.me/${article.numero}?text=${encodeURIComponent(message)}`;
        // Redirige vers WhatsApp
        window.open(url, "_blank");
    }
})

// function handleSearch(e) {
   
//    console.log('hi negro', Rechercher.onchange)

//    Rechercher.addEventListener('change',
document.addEventListener('DOMContentLoaded',e=>{
    const Rechercher= document.getElementById('Rechercher')
    Rechercher.oninput=  e=>{
        
       
        let newArts = []
        const searchData = e.target?.value
        Articles?.forEach(art => {
            if (art.Nom.toLowerCase().substring(0, searchData.length) == searchData.toLowerCase()) {
                newArts.push(art)
            }

        })
        // Articles=newArts
        console.log('hi negro', newArts)
        LoadData(newArts)
   }
   console.log('hi negro negro', Rechercher.input)
})

// }