async function aboutcountry(){
    try {
    var response = await fetch('https://restcountries.eu/rest/v2/all');
    var data = await response.json();
    console.log(data);
    var i = 0;
    var div = document.getElementById("exampleFormControlSelect1")
    data.forEach(function(ele,ind){
        var sel = document.createElement("option")
        sel.innerText = ele.name;
        div.append(sel);
    })
    div.addEventListener("click",function(){
    var dval = document.querySelector("#exampleFormControlSelect1").value;
    console.log(dval);
    var img1 = document.getElementById("img");
    data.filter((ele,ind)=>{
        if(dval==ele.name){
         return img1.src = ele.flag;
        }
    })
    var t = document.getElementById('para')
    data.filter((ele,index)=>{
        if(dval==ele.name){
            var borders = ele.borders.filter((items)=>{
                return items+","
            })
            return t.innerHTML = "The country that u have selected is <b>"+ele.name+"</b> with native name of <b>"+ele.nativeName+"</b> The capital of this country <b>"+ele.capital+"</b> The population of this country is <b>"+ele.population+
         "</b> and the area is <b>"+ele.area+"</b> The latitude and longitude of the country is <b>"+ele.latlng[0]+"</b> and <b>"+ele.latlng[1]+
            "</b> and the region is <b>"+ele.region+"</b> with subregion of <b>"+ele.subregion+"</b> and timezone is <b>"+ele.timezones[0]+"</b> and borders of <b>"+borders+"</b> the currency name is <b>"+ele.currencies[0].name+"</b>"
        }
    })
  });
 }
 catch(error){
    console.log(error)
}
}
aboutcountry()