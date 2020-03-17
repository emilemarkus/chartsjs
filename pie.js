// on va chercher notre canvas
var multibars = document.getElementById('multibar');
var newpie = new Chart(multibars,{
    type:'doughnut',
    label:" Benelux iso",
    data:{
       datasets:[{
            data:[20,25,65],
            backgroundColor:[
                'Red',
                'Blue',
                '#fff'
            ],
            hoverBackgroundColor:'green',
            borderColor:[
                'none',
                'none',
                '#000'
            ],
            borderWidth:0.2
            }],
            labels: [
                'Belgium',
                'France',
                'Luxembourg'
            ]
    }
})
