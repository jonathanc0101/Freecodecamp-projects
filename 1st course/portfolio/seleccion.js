let h=innerHeight/6;
let w=innerWidth;

let numElements = 150;
let widthElement = w/numElements;

let vector=[];
let j=0;

let snd;

function setup() {
    let myCanvas = createCanvas(w, h);
    myCanvas.parent("p5-sketch");

    frameRate(20);
    colorMode(HSB);
    vector = crearArrayRandom(numElements);

}

function draw() {
    dibujarArray(vector,widthElement);
    intercambiar(vector,j,menorPos(vector,j));

    if(j<vector.length-1){
        j++;}
}

function crearArrayRandom(max){
    array = []
    for (i = 0; i < max; i++) {
        array.push(Math.random()*height);
    }
    return array 
}


//animacion
function dibujarArray(arr, widthOfElement){
    background(240,71,64);
    
    strokeWeight(widthOfElement);
    
    //se dibujan las lineas
    for (i = 0; i < arr.length; i++) {
        stroke(arr[i],100,100);
        line(i*widthOfElement,0,i*widthOfElement,arr[i]);
    }
    
}

function mayorPos(arr,i){
    let max=i;
    aux=arr[i];
    for (var s=i; s < arr.length-1; s++) {
        if(aux<arr[s+1]){
            aux=arr[s+1];
            max=s+1;
        }
    }
    return max;
}

function menorPos(arr,i){
    let min=i;
    aux=arr[i];

    for (var s=i; s < arr.length-1; s++) {
        if(aux>arr[s+1]){
            aux=arr[s+1];
            min=s+1;
        }
    }
    return min;
}


function intercambiar(arr,s,t){
    aux=arr[s];
    arr[s]=arr[t];
    arr[t]=aux;
}
