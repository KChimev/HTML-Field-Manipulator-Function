import Json from "./example.json" assert {type: 'json'};

var test=Json;
for (const key in test) {
    if (test.hasOwnProperty(key)) {
        if(document.getElementById(key)!==null){
        document.getElementById(key).value=test[key];
        console.log( document.getElementById(key).value);
        }
        else{
            console.log("No element with id `" + key + "` found");
        }
    }
}