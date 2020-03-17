
// initialisation des variables
let x_coords = [];
let y_coords= [];
let yMax;
let yMin;
let indice=5;
let myonlineChart ;

lineIt();

// function pour afficher notre ligne
async function lineIt(){
await  getData();
console.log(yMax);
// on va chercher notre canvas
let onlinebar = document.getElementById('online') 
// on instency notre variable Chart.
// on lui passe notre canvas et on défini à travers une nouvelle class Chart() les paramètres.
myonlineChart = new Chart(onlinebar,{
    // le type de graphic - ici bar
    type:'line',
    // objet data qui comprends les bars proprements dits
    data:  { 
        // label des bars
        labels : x_coords, 
        // un tableau contenants la customization des bars
        datasets: [{   
                // le label dans précédants les valeurs lors de l'affichage         
                label:'Nb de Bières', 
                fill: false, 
                // les valeurs des barres
                data: y_coords, 
                // les background
                backgroundColor:'rgba(132, 219, 155,0.2)',
                // les bordures
                borderColor:
                    'rgba(132, 219, 155,0.5)',
                // la tailles des bordures
                borderWidth:1,
                borderDash:[1,5],
                borderColor:'red'
            }
        ]
    },
    options: {
        scales:{
            yAxes: [{ //on stylise notre axe des Y
                ticks:{
                max:yMax*indice, // notre max est egale à la valeur la plus haute de nos données fetcher
                min:yMin*indice, // idem que max mais en min               
                stepSize:100/(yMax-yMin), 
                stacked: true,
                precision:10,
               
                }
            }]
        }   
    }
   
}) ;
}

// import data from Api
async function getData() {
    x_coords=new Array();
    y_coords=new Array();
    
 const response = await fetch("https://inside.becode.org/api/v1/data/random.json");
 const jsondata = await response.json();
 jsondata.forEach((element) => {
    x_coords.push(element[0]);
    y_coords.push(element[1]);
    yMax = Math.max.apply(null,y_coords);
    yMin = Math.min.apply(null,y_coords);
    
 });

}

//function de mise a jour du graphic
setInterval(async function(){    
   await getData();
   myonlineChart.data.datasets[0].data=y_coords;
   myonlineChart.options.scales.yAxes[0].ticks.max=yMax;
   myonlineChart.options.scales.yAxes[0].ticks.min=yMin;
   myonlineChart.update();    
},5000);