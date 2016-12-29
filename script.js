var width=900, height=500, radius=20;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g");

function cCodeToPos(code) { //returns background-position offset for our flag sprites
   var pA={"bj":"-150px -15px","be":"-50px -15px","tt":"-150px -195px","yt":"-250px -210px","tc":"-250px -180px","zw":"-325px -210px","sz":"-225px -180px","nf":"-250px -135px","gr":"-50px -75px","ir":"-100px -90px","ad":"0px 0px","pa":"-100px -150px","ly":"0px -120px","ao":"-200px 0px", "gf":"-225px -60px","sn":"-75px -180px","mc":"-50px -120px","gm":"-350px -60px","kn":"0px -105px","dz":"-150px -45px","co":"-275px -30px","fj":"0px -60px","mg":"-125px -120px","om":"-75px -150px","nl":"-325px -135px","mm":"-225px -120px","ec":"-175px -45px","bf":"-75px -15px","fk":"-25px -60px","sr":"-125px -180px","hm":"-225px -75px","au":"-300px 0px","bn":"-200px -15px","aw":"-325px 0px","pt":"-375px -150px","jp":"-250px -90px","um":"-300px -195px","mt":"0px -135px","ee":"-200px -45px","ke":"-275px -90px","pl":"-250px -150px","eu":"-350px -45px","gb":"-150px -60px","zm":"-300px -210px","al":"-125px 0px","tm":"-50px -195px","ci":"-150px -30px","bw":"-350px -15px","lv":"-375px -105px","mn":"-250px -120px","vi":"-100px -210px","tg":"-325px -180px","dm":"-100px -45px","cn":"-250px -30px","kz":"-125px -105px","sk":"0px -180px","jm":"-200px -90px","gt":"-100px -75px","kw":"-75px -105px","th":"-350px -180px","pf":"-150px -150px","lt":"-325px -105px","pg":"-175px -150px","ar":"-225px 0px","kp":"-25px -105px","gs":"-75px -75px","by":"-375px -15px","ml":"-200px -120px","st":"-150px -180px","ng":"-275px -135px","lu":"-350px -105px","tf":"-300px -180px","bt":"-300px -15px","ai":"-100px 0px","bb":"0px -15px","ua":"-250px -195px","gi":"-300px -60px","va":"0px -210px","tk":"0px -195px","tl":"-25px -195px","ca":"-25px -30px","gp":"0px -75px","il":"0px -90px","hu":"-325px -75px","nu":"-25px -150px","bd":"-25px -15px","so":"-100px -180px","lr":"-275px -105px","no":"-350px -135px","pm":"-275px -150px","dj":"-50px -45px","bz":"0px -30px","tz":"-225px -195px","re":"-75px -165px","la":"-150px -105px","ru":"-150px -165px","na":"-175px -135px","tr":"-125px -195px","uz":"-375px -195px","do":"-125px -45px","km":"-375px -90px","li":"-225px -105px","cd":"-50px -30px","nc":"-200px -135px","eh":"-250px -45px","se":"-300px -165px","br":"-250px -15px","vc":"-25px -210px","cf":"-75px -30px","hk":"-200px -75px","sh":"-350px -165px","md":"-75px -120px","bm":"-175px -15px","sg":"-325px -165px","mv":"-50px -135px","er":"-275px -45px","cv":"-350px -30px","sl":"-25px -180px","ie":"-375px -75px","as":"-250px 0px","it":"-150px -90px","sy":"-200px -180px","bv":"-325px -15px","bg":"-100px -15px","ba":"-375px 0px","lb":"-175px -105px","dk":"-75px -45px","gq":"-25px -75px","ls":"-300px -105px","gy":"-175px -75px","ps":"-350px -150px","fr":"-100px -60px","mw":"-75px -135px","gh":"-275px -60px","gw":"-150px -75px","de":"-25px -45px","mx":"-100px -135px","ae":"-25px 0px","ve":"-50px -210px","uy":"-350px -195px","is":"-125px -90px","ye":"-225px -210px","lc":"-200px -105px","rs":"-125px -165px","tj":"-375px -180px","hr":"-275px -75px","az":"-350px 0px","ga":"-125px -60px","gn":"-375px -60px","at":"-275px 0px","kh":"-325px -90px","ug":"-275px -195px","np":"-375px -135px","id":"-350px -75px","me":"-100px -120px","ms":"-375px -120px","cg":"-100px -30px","eg":"-225px -45px","nz":"-50px -150px","rw":"-175px -165px","py":"-25px -165px","vg":"-75px -210px","mq":"-325px -120px","kg":"-300px -90px","vu":"-150px -210px","an":"-175px 0px","sd":"-275px -165px","cz":"0px -45px","mp":"-300px -120px","sc":"-250px -165px","pn":"-300px -150px","gd":"-175px -60px","ag":"-75px 0px","in":"-25px -90px","hn":"-250px -75px","mk":"-175px -120px","cy":"-375px -30px","af":"-50px 0px","fo":"-75px -60px","gu":"-125px -75px","gl":"-325px -60px","bs":"-275px -15px","mo":"-275px -120px","kr":"-50px -105px","my":"-125px -135px","iq":"-75px -90px","pe":"-125px -150px","qa":"-50px -165px","cl":"-200px -30px","sa":"-200px -165px","si":"-375px -165px","tv":"-175px -195px","pk":"-225px -150px","ge":"-200px -60px","fm":"-50px -60px","cu":"-325px -30px","mh":"-150px -120px","ne":"-225px -135px","jo":"-225px -90px","mz":"-150px -135px","wf":"-175px -210px","sm":"-50px -180px","ck":"-175px -30px","bo":"-225px -15px","ki":"-350px -90px","tn":"-75px -195px","us":"-325px -195px","et":"-325px -45px","pr":"-325px -150px","vn":"-125px -210px","fi":"-375px -45px","gg":"-250px -60px","bh":"-125px -15px","ky":"-100px -105px","lk":"-250px -105px","mu":"-25px -135px","ma":"-25px -120px","am":"-150px 0px","cm":"-225px -30px","es":"-300px -45px","ni":"-300px -135px","sb":"-225px -165px","to":"-100px -195px","ph":"-200px -150px","sv":"-175px -180px","ws":"-200px -210px","ht":"-300px -75px","cr":"-300px -30px","je":"-175px -90px","io":"-50px -90px","tw":"-200px -195px","ch":"-125px -30px","ro":"-100px -165px","mr":"-350px -120px","za":"-275px -210px","td":"-275px -180px","pw":"0px -165px","nr":"0px -150px","xk":"-350px -210px","bi":"-375px -210px"};
  //console.log("c: "+code+" "+pA[String(code)]);
  return pA[String(code)];
}

var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d,i) { return i; }))
    .force("charge", d3.forceManyBody().strength(-10)
           .distanceMin(10)
           .distanceMax(200))
    .force("center", d3.forceCenter(width/2, height/2));

// Get the data
d3.json('//raw.githubusercontent.com/DealPete/forceDirected/master/countries.json',function(err,data) {
  if (err) {throw err;}
  
  //get our flag images ready
var defs=svg.append("defs")
  .selectAll("pattern")
  .data(data.nodes)
  .enter().append("pattern")
  .attr("width","25")
  .attr("height","15")
  .attr("id",function(d){return "pattern_"+d.code;});
  
  defs.append("image").attr("href","//raw.githubusercontent.com/thmsdnnr/d3_forcedirectedgraph/master/flags.png")
    .attr("display","inline-block")
    .attr("background-repeat","no-repeat")
    .attr("x", function(d){
    if (cCodeToPos(d.code)) {
      return cCodeToPos(d.code).split(" ")[0]; }
         else{console.log(d.code);}})
    .attr("y", function(d){
    if (cCodeToPos(d.code)) {
      return cCodeToPos(d.code).split(" ")[1]; }});
  
  var z = d3.scaleLinear().range(["#1C148A","#9BD6F8"]).domain([0,140]);
  
  //tool tip
var div = d3.select("body").append("div").attr("class", "tooltip").attr("opacity",0);
  
  var link = svg.append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(data.links)
      .enter().append("line");

  var node = svg.selectAll(".node")
      .data(data.nodes)
      .enter().append("g")
      .attr("class", "node")
      .append("rect")
      .attr("width","25")
      .attr("height","15")
      .style("stroke","none")
      .style("fill",function(d) {return "url(#pattern_"+d.code+")";})
      .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended))
      .on("mouseover", function(d) {
       div.transition()
         .duration(200)
         .style("opacity", 1); //give more information
       div.html(d.country)
         .style("left", (d3.event.pageX) + "px")
         .style("top", (d3.event.pageY - 28) + "px");
       })
     .on("mouseout", function(d) {
       div.transition()
         .duration(200)
         .style("opacity", .4)
         .duration(600)
         .style("opacity", 0);
       });
  
  simulation
      .nodes(data.nodes)
      .on("tick", ticked)
      .force("link")
      .links(data.links);

  function ticked() {
    link
        .attr("x1", function(d) { return d.source.x+radius/2; })
        .attr("y1", function(d) { return d.source.y+radius/2; })
        .attr("x2", function(d) { return d.target.x+radius/2; })
        .attr("y2", function(d) { return d.target.y+radius/2; });
    node
        .attr("x", function(d) { d.x=Math.max(radius, Math.min((width-radius), d.x)); return d.x; })
        .attr("y", function(d) { d.y=Math.max(radius, Math.min((height-radius), d.y)); return d.y; });
  }
});

function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}
