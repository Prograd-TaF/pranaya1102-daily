/*Fill your code */
var sum=0;
var layer=0;
function add_item(x){
    switch(x){
        case 1: var list = document.createElement("li");
        var node = document.createTextNode("Chocolate  -------- 300");
        list.appendChild(node);
        sum+=300;
        var element = document.getElementById("items");
        element.appendChild(list);
        layer++;
        add_layer("Chocolate");
        break;



        case 2: var list = document.createElement("li");
        var node = document.createTextNode("Strawberry  ------- 100");
        list.appendChild(node);
        sum+=100;
        var element = document.getElementById("items");
        element.appendChild(list);
        layer++;
        add_layer("Strawberry");
        break;



        case 3: var list = document.createElement("li");
        var node = document.createTextNode("Butterscotch  ----- 200");
        list.appendChild(node);
        sum+=200;
        var element = document.getElementById("items");
        element.appendChild(list);
        layer++;
        add_layer("ButterScotch");
        break;

        case 4: var list = document.createElement("li");
        var node = document.createTextNode("Vanilla ------------ 250");
        list.appendChild(node);
        sum+=250;
        var element = document.getElementById("items");
        element.appendChild(list);
        layer++;
        add_layer("Vanilla");
        break;
        
        case 5: var list = document.createElement("li");
        var node = document.createTextNode("RedVelvet -------- 100");
        list.appendChild(node);
        sum+=100;
        var element = document.getElementById("items");
        element.appendChild(list);
        layer++;
        add_layer("RedVelvet");
        break;
    
    }
}
function Buy(){
    document.getElementById("total").innerHTML="Total --------- " + sum;
}
function add_layer(str){
    switch(layer){
        case 1: document.getElementById("layer1").style.visibility="visible";
        document.getElementById("layer1").innerHTML=str;
        document.getElementById("layer1").style.fontStyle = "italic";
        break;
        case 2: document.getElementById("layer2").style.visibility="visible";
        document.getElementById("layer2").innerHTML=str;
        document.getElementById("layer2").style.fontStyle = "italic";
        break;
        case 3: document.getElementById("layer3").style.visibility="visible";
        document.getElementById("layer3").innerHTML=str;
        document.getElementById("layer3").style.fontStyle = "italic";
        break;
        case 4: document.getElementById("layer4").style.visibility="visible";
        document.getElementById("layer4").innerHTML=str;
        document.getElementById("layer4").style.fontStyle = "italic";
        break;
        case 5: document.getElementById("layer5").style.visibility="visible";
        document.getElementById("layer5").innerHTML=str;
        document.getElementById("layer5").style.fontStyle = "italic";
        break;
    
    }
}