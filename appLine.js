// on va chercher notre canvas
var line = document.getElementById('line') 
// on instency notre variable Chart.
// on lui passe notre canvas et on défini à travers une nouvelle class Chart() les paramètres.
var lineChart = new Chart(line,{
    // le type de graphic - ici bar
    type:'line', 
    // objet data qui comprends les bars proprements dits
    data:  { 
        // label des bars
        labels : ['Lundi','Mardi','Mercredi','Jeudi','vendredi','Samedi','Dimanche'], 
        // un tableau contenants la customization des bars
        datasets: [{   
                // le label dans précédants les valeurs lors de l'affichage         
                label:'Nb de Bières', 
                fill:false, // permet de remplir les espace entre le seuil 0 et le sommet de la courbe.
                lineTension:0.5, // la tension de la ligne (0=ligne droite)                
                data: [25,3,-45,19,-15,35,15], // les valeurs des barres                
                backgroundColor:'#fff', // couleur de fond des points
                borderColor:'red',// couleur de la ligne
                borderCapStyle:'round', // style du bout de la ligne
                borderdash: [],
                borderDashOffset:0.5,
                borderjoinStyle: 'round', // style d'intersection
                pointBorderColor: 'green', // style du point d'intersection
                pointHoverRadius:10,
                pointHitRadius:20,
            }
        ]
    },
    options: {
        scales : {
            yAxes : [{
                ticks:{
                    min:-50, // le minimum sur les y 
                    max:50, // le maximum sur les y                    
                }
            }]
        }
    }


}) ;