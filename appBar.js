// on va chercher notre canvas
var bar = document.getElementById('bar') 
// on instency notre variable Chart.
// on lui passe notre canvas et on défini à travers une nouvelle class Chart() les paramètres.
var myChart = new Chart(bar,{
    // le type de graphic - ici bar
    type:'bar', 
    // objet data qui comprends les bars proprements dits
    data:  { 
        // label des bars
        labels : ['Lundi','Mardi','Mercredi','Jeudi','vendredi','Samedi','Dimanche'], 
        // un tableau contenants la customization des bars
        datasets: [{   
                // le label dans précédants les valeurs lors de l'affichage         
                label:'Nb de Bières', 
                // les valeurs des barres
                data: [25,3,-45,19,-15,35,15], 
                // les background
                backgroundColor:[
                    'rgba(132, 219, 155,0.2)',
                    'rgba(219, 181, 132,0.2)',
                    'rgba(132, 219, 216,0.2)',
                    'rgba(207, 132, 219,0.2)',
                    'rgba(207, 132, 219,0.2)',
                    'rgba(158, 92, 68,0.2)',                    
                ],
                // les bordures
                borderColor:[
                    'rgba(132, 219, 155,0.5)',
                    'rgba(219, 181, 132,0.5)',
                    'rgba(132, 219, 216,0.5)',
                    'rgba(207, 132, 219,0.5)',
                    'rgba(207, 132, 219,0.5)',
                    'rgba(158, 92, 68,0.5)'
                ],
                // la tailles des bordures
                borderWidth:1
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