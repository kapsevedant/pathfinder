(this["webpackJsonppathfinding-visualizer"]=this["webpackJsonppathfinding-visualizer"]||[]).push([[0],{26:function(e,t,a){e.exports=a(50)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){e.exports=a.p+"static/media/favicon.4cff88f9.png"},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(25),r=a.n(i);a(31),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(5),o=a(9),c=a(2),h=a(11),u=a(10),d=(a(32),a(33),function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={toturialClasses:["first-toturial","secend-toturial","third-toturial","fourth-toturial"],toturialNumber:0},n.changeToturial=n.changeToturial.bind(Object(c.a)(n)),n.skipButton=n.skipButton.bind(Object(c.a)(n)),n}return Object(o.a)(a,[{key:"changeToturial",value:function(e){"next"===e&&this.state.toturialNumber<this.state.toturialClasses.length-1&&(document.getElementById(this.state.toturialClasses[this.state.toturialNumber]).style.display="none",document.getElementById(this.state.toturialClasses[this.state.toturialNumber+1]).style.display="inline-block",this.setState({toturialNumber:this.state.toturialNumber+1})),"prev"===e&&this.state.toturialNumber>0&&(document.getElementById(this.state.toturialClasses[this.state.toturialNumber]).style.display="none",document.getElementById(this.state.toturialClasses[this.state.toturialNumber-1]).style.display="inline-block",this.setState({toturialNumber:this.state.toturialNumber-1}))}},{key:"skipButton",value:function(){document.getElementById("fullscreen").style.display="none"}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{id:"fullscreen",class:"container-fluid"},s.a.createElement("div",{id:"tutorial",className:"mainContainer"},s.a.createElement("div",{className:"section",id:"first-toturial"},s.a.createElement("h3",{className:"title"},"Pathfinding Visualizer Toturial"),s.a.createElement("hr",{style:{backgroundColor:"rebeccapurple"}}),s.a.createElement("h5",{className:"sub-title"},"Pathfinding Algorithm find the shortest route between two points."),s.a.createElement("h6",{className:"paragraph"},"In this application you can see various pathfinding algorithms in action, and how they work.")),s.a.createElement("div",{className:"section",id:"secend-toturial"},s.a.createElement("h3",{className:"title"},"First Step"),s.a.createElement("hr",{style:{backgroundColor:"rebeccapurple"}}),s.a.createElement("h5",{className:"sub-title"},"Choose an algorithm to visualize"),s.a.createElement("h6",{className:"item animation1"},"Breadth First Search (BFS)"),s.a.createElement("h6",{className:"item animation2"},"Depth First Search (DFS)"),s.a.createElement("h6",{className:"item animation3"},"Dijkstra Algorithm"),s.a.createElement("h6",{className:"item animation4"},"A* Search")),s.a.createElement("div",{className:"section",id:"third-toturial"},s.a.createElement("h3",{className:"title"},"Secend step"),s.a.createElement("hr",{style:{backgroundColor:"rebeccapurple"}}),s.a.createElement("h5",{className:"paragraph"},"Choose between clear board or a maze."),s.a.createElement("h6",{className:"paragraph"},"also you can add walls to the board by click on the node."),s.a.createElement("h6",{className:"paragraph"},"or move the start / end node by handle clicking and draging the node even after the algorithm has finished running.")),s.a.createElement("div",{className:"section",id:"fourth-toturial"},s.a.createElement("h3",{className:"title"},"Third Step"),s.a.createElement("hr",{style:{backgroundColor:"rebeccapurple"}}),s.a.createElement("h5",{className:"sub-title"},"Choose the nodes size from three different sizes"),s.a.createElement("h5",{className:"sub-title"},"And, choose the algorthim's speed from three different speeds"),s.a.createElement("h2",null,"Enjoy!")),s.a.createElement("div",{className:"buttons"},s.a.createElement("button",{className:"btn btn-info",onClick:function(){return e.changeToturial("prev")}},"Previous"),s.a.createElement("button",{className:"btn btn-info",onClick:function(){return e.skipButton()}},"Skip"),s.a.createElement("button",{className:"btn btn-info",onClick:function(){return e.changeToturial("next")}},"Next"))))}}]),a}(s.a.Component)),m=(a(17),a(36),a(4)),g=a.n(m),p=a(12),b=(a(38),function e(t,a,n,s){Object(l.a)(this,e),this.id=t,this.height=a,this.width=n,this.status=s,this.parent=null,this.g=0,this.h=0,this.f=this.g+this.h,this.distance=1/0}),E=(a(39),a(1));var f=function(e){return s.a.createElement("div",{className:"container-fluid ",style:{marginTop:"100px"}},s.a.createElement("div",{className:"p1-container"},s.a.createElement("div",{className:"row text-center"},s.a.createElement("div",{className:"col-lg-6"},s.a.createElement(E.f,{size:65,className:"text-primary"})),s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("h3",{className:"text-center text-primary"},"About Us"),s.a.createElement("hr",{style:{width:"40%",margin:"auto",color:"blue"}}),s.a.createElement("hr",{style:{width:"40%",margin:"auto",color:"blue"}}),s.a.createElement("hr",{style:{width:"40%",margin:"auto",color:"blue"}}),s.a.createElement("hr",{style:{width:"40%",margin:"auto",color:"blue"}})))),s.a.createElement("div",{className:"container row team-container text-center"},s.a.createElement("div",{className:"col-lg-3 col-md-6 p-3",style:{border:"1px solid black",borderRadius:"4px",background:"cyan"}},s.a.createElement("h5",null,"Swapnil Kumbhare"),s.a.createElement(E.d,{size:27}),s.a.createElement(E.e,{size:27}),s.a.createElement(E.c,{size:27})),s.a.createElement("div",{className:"col-lg-3 col-md-6 p-3",style:{border:"1px solid black",borderRadius:"4px",background:"yellow"}},s.a.createElement("h5",null,"Sanket Ingale"),s.a.createElement(E.d,{size:27}),s.a.createElement(E.e,{size:27}),s.a.createElement(E.c,{size:27})),s.a.createElement("div",{className:"col-lg-3 col-md-6 p-3",style:{border:"1px solid black",borderRadius:"4px",background:"lightgreen"}},s.a.createElement("h5",null,"Shashank Juwar"),s.a.createElement(E.d,{size:27}),s.a.createElement(E.e,{size:27}),s.a.createElement(E.c,{size:27})),s.a.createElement("div",{className:"col-lg-3 col-md-6 p-3",style:{border:"1px solid black",borderRadius:"4px",background:"orange"}},s.a.createElement("h5",null,"Vedant Kapse"),s.a.createElement(E.d,{size:27}),s.a.createElement(E.e,{size:27}),s.a.createElement(E.c,{size:27}))))};a(40);var w=function(e){return s.a.createElement("div",{className:"footer-container"},s.a.createElement("div",{className:"text-center text-white"},s.a.createElement("h5",null,"Copyright \xa9 2023 || All Rights Reserved")))};a(41);var v,N=function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"container-fluid mt-5"},s.a.createElement("div",{className:"p1-container"},s.a.createElement("div",{className:"row text-center"},s.a.createElement("div",{className:"col-lg-6"},s.a.createElement(E.b,{size:65,className:"text-primary"})),s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("h3",{className:"text-center text-primary"},"About Project"),s.a.createElement("hr",{style:{width:"40%",margin:"auto",color:"blue"}}),s.a.createElement("hr",{style:{width:"40%",margin:"auto",color:"blue"}}),s.a.createElement("hr",{style:{width:"40%",margin:"auto",color:"blue"}}),s.a.createElement("hr",{style:{width:"40%",margin:"auto",color:"blue"}})))),s.a.createElement("div",{className:"container p2-container mt-5"},s.a.createElement("h5",null,"PATHFINDING VISUALIZER:"),s.a.createElement("p",{className:"text-justify"},"Plotting is known as pathfinding or pathing. A computer program, particularly brief  a path connecting two locations. Being more a useful maze-solving variation. This branch of study is primarily centered on Dijkstra's formula for determining the on a weighted graph, the shortest path that best meets some criteria ."),s.a.createElement("br",null),s.a.createElement("p",{className:"text-justify"},'A  pathfinding  approach  fundamentally  searches.  Beginning  at  one vertex  in  a  graph, looking into nearby nodes until the reaches the destination node, typically with the goal of locating the least expensive path. Although graph search techniques like If a route is needed,  a  breadth-first  search  would  be  used.  if  given  enough  time,  alternative techniques  "Explore" the graph, which would aim to the finish line earlier. An example would rather than a person moving across a space than considering all alternatives, The person would typically walk forward just travelling in the destination\'s direction  veer off  the  path  to  avoid  a  impediment,  and  downplay  deviations  the  maximum  area (shortest, cheapest, fastest, etc.) between two points in a large network.'),s.a.createElement("br",null),s.a.createElement("h5",null,"1. Path-finding using BFS i.e. Breadth First Search"),s.a.createElement("p",{className:"text-justify"},"BFS is  a traversal algorithm  in which you  should begin at  a chosen node  (source or starting node) and move layer-by-layer through the network to explore your neighbors\u2019 nodes (nodes that are directly connected to the source node). After that, you must head toward the nodes that are next in level."),s.a.createElement("br",null),s.a.createElement("h5",null,"2. Path-finding using DFS i.e. Depth First Search "),s.a.createElement("p",{className:"text-justify"},"Stack  is  the  type  of  data  structure  utilized  in  DFS.  The  method  is  comparable  to  the  BFS algorithm. In DFS, the  edges that  lead  to a node  that has  not yet been visited  are known as discovery edges, whereas the edges that lead to a node that has already been visited are known as block edges."),s.a.createElement("br",null),s.a.createElement("h5",null,"3. Path-finding using A* algorithm "),s.a.createElement("p",{className:"text-justify"},"A search algorithm known as A* algorithm looks  for the  shortest route  between the  starting point  and the  desired  outcome.  It  is  utilized  in many  applications,  including  maps.  The  A* method is used in maps to determine the shortest path between the source (starting point) and the destination (final state)"),s.a.createElement("br",null),s.a.createElement("h5",null,"4. Path-finding using Dijkstra searching algorithm "),s.a.createElement("p",{className:"text-justify"},"Dijkstra\u2019s algorithm, published in 1959 and named after its creator Dutch computer scientist Edger  Dijkstra,  can  be  applied  on  a  weighted  graph.  The  graph  can  either  be  directed  or undirected. One stipulation to using the algorithm is that the graph needs to have a nonnegative weight on every edge.")),s.a.createElement("div",{className:"container p3-container mt-5 mb-5"},s.a.createElement("h4",{className:"text-center"},"Time Complexity"),s.a.createElement("div",{className:"row text-center mt-5"},s.a.createElement("div",{className:"col-lg-3 col-md-6 p-4",style:{border:"1px solid black",borderRadius:"4px",background:"cyan"}},s.a.createElement("h5",null,"BFS Algorithm"),s.a.createElement("h6",null,"O(E+V)")),s.a.createElement("div",{className:"col-lg-3 col-md-6 p-4",style:{border:"1px solid black",borderRadius:"4px",background:"yellow"}},s.a.createElement("h5",null,"DFS Algorithm"),s.a.createElement("h6",null,s.a.createElement("h6",null,"O(E+V)"))),s.a.createElement("div",{className:"col-lg-3 col-md-6 p-4",style:{border:"1px solid black",borderRadius:"4px",background:"lightgreen"}},s.a.createElement("h6",null,"Dijstra's Algorithm"),s.a.createElement("h6",null,"O((V+E)logV)")),s.a.createElement("div",{className:"col-lg-3 col-md-6 p-4",style:{border:"1px solid black",borderRadius:"4px",background:"orange"}},s.a.createElement("h6",null,"A* Algorithm"),s.a.createElement("h6",null,"O(ElogV)")))),s.a.createElement("div",{className:"container p3-container mt-5 mb-5"},s.a.createElement("h4",{className:"text-center"},"Space Complexity"),s.a.createElement("div",{className:"row text-center mt-5"},s.a.createElement("div",{className:"col-lg-3 col-md-6 p-4",style:{border:"1px solid black",borderRadius:"4px",background:"cyan"}},s.a.createElement("h5",null,"BFS Algorithm"),s.a.createElement("h6",null,"O(V)")),s.a.createElement("div",{className:"col-lg-3 col-md-6 p-4",style:{border:"1px solid black",borderRadius:"4px",background:"yellow"}},s.a.createElement("h5",null,"DFS Algorithm"),s.a.createElement("h6",null,s.a.createElement("h6",null,"O(V+E)"))),s.a.createElement("div",{className:"col-lg-3 col-md-6 p-4",style:{border:"1px solid black",borderRadius:"4px",background:"lightgreen"}},s.a.createElement("h6",null,"Dijstra's Algorithm"),s.a.createElement("h6",null,"O(V)")),s.a.createElement("div",{className:"col-lg-3 col-md-6 p-4",style:{border:"1px solid black",borderRadius:"4px",background:"orange"}},s.a.createElement("h6",null,"A* Algorithm"),s.a.createElement("h6",null,"O(V)"))))))},y=a(18);function k(e,t,a,n,s){return n[t][a].status!==G&&(n[t][a].status===J&&(n[t][a].status=L,n[t][a].parent=[e.height,e.width],s.push(n[t][a])),!0)}function S(e,t,a){for(var n=[];e.status!==W;)n.push([q,t[e.height][e.width]]),e=t[e.parent[0]][e.parent[1]];v=n.length;for(var s=n.length-1;s>=0;s--)a.push(n[s])}var x,P=function(e,t,a){var n=[];return v=0,function(e,t,a,n){var s,i=!0,r=new y;r.push(t);for(;i;)0===r.length?i=!1:(s=r.shift(),e[s.height][s.width].status===G?i=!1:(e[s.height][s.width].status!==W&&(e[s.height][s.width].status=H,n.push([H,e[s.height][s.width]])),i&&s.height+1<e.length&&(i=k(s,s.height+1,s.width,e,r)),i&&s.height>0&&(i=k(s,s.height-1,s.width,e,r)),i&&s.width+1<e[0].length&&(i=k(s,s.height,s.width+1,e,r)),i&&s.width>0&&(i=k(s,s.height,s.width-1,e,r)),i||S(s,e,n)))}(JSON.parse(JSON.stringify(e)),t,0,n),{pathSize:v,animation:n}},C=a(18);function A(e,t,a,n,s){return n[t][a].status!==G&&(n[t][a].status===J&&(n[t][a].parent=[e.height,e.width],s.push(n[t][a])),!0)}function z(e,t,a){for(var n=[];e.status!==W;)n.push([q,t[e.height][e.width]]),e=t[e.parent[0]][e.parent[1]];x=n.length;for(var s=n.length-1;s>=0;s--)a.push(n[s])}var B,j=function(e,t,a){var n=[];return x=0,function(e,t,a,n){var s,i=!0,r=new C;r.push(t);for(;i;)0===r.length?i=!1:(s=r.pop(),e[s.height][s.width].status===G?i=!1:(e[s.height][s.width].status!==W&&(e[s.height][s.width].status=H,n.push([H,e[s.height][s.width]])),i&&s.width+1<e[0].length&&(i=A(s,s.height,s.width+1,e,r)),i&&s.height+1<e.length&&(i=A(s,s.height+1,s.width,e,r)),i&&s.width>0&&(i=A(s,s.height,s.width-1,e,r)),i&&s.height>0&&(i=A(s,s.height-1,s.width,e,r)),i||z(s,e,n)))}(JSON.parse(JSON.stringify(e)),t,0,n),{pathSize:x,animation:n}};function O(e,t,a,n){return Math.abs(a-e)+Math.abs(n-t)}function D(e,t){var a=[],n=t.height,s=t.width;return e[n-1]&&e[n-1][s]&&a.push(e[n-1][s]),e[n+1]&&e[n+1][s]&&a.push(e[n+1][s]),e[n][s-1]&&e[n][s-1]&&a.push(e[n][s-1]),e[n][s+1]&&e[n][s+1]&&a.push(e[n][s+1]),a}function M(e,t,a){for(var n=[];e.status!==W;)n.push([q,t[e.height][e.width]]),e=e.parent;B=n.length;for(var s=n.length-1;s>=0;s--)a.push(n[s])}var I,F=function(e,t,a){var n=[];return B=0,function(e,t,a,n){var s=[];s.push(t);for(;s.length>0;){for(var i=0,r=0;r<s.length;r++)s[r].f<=s[i].f&&(i=r);var l=s[i];if(s.splice(i,1),e[l.height][l.width].status===G)return void M(l.parent,e,n);e[l.height][l.width].status!==W&&(e[l.height][l.width].status=H,n.push([H,e[l.height][l.width]]));for(var o=D(e,l),c=0;c<o.length;c++){var h=o[c];if(h.status!==H&&h.status!==V){var u=l.g+1,d=!1;s.includes(h)?u<h.g&&(d=!0):(d=!0,h.g=u,h.h=O(h.height,h.width,a.height,a.width),s.push(h)),d&&(h.parent=l,h.g=u,h.f=h.g+h.h)}}}}(JSON.parse(JSON.stringify(e)),t,a,n),{pathSize:B,animation:n}};function R(e,t,a,n,s,i){var r=s[a][n];return r.status!==G&&(r.status===J&&(r.status=L,r.parent=[e.height,e.width],r.distance=e.distance+1,s[a][n]=r,i.push(r)),!0)}function T(e,t,a){for(var n=[];e.status!==W;)n.push([q,t[e.height][e.width]]),e=t[e.parent[0]][e.parent[1]];I=n.length;for(var s=n.length-1;s>=0;s--)a.push(n[s])}var U=function(e,t,a){var n=[];return I=0,function(e,t,a,n){var s,i=!0,r=[];r.push(t);for(;i;)if(0===r.length)i=!1;else{for(var l=0,o=0;o<r.length;o++)r[o].distance>r[l].distance&&(l=o);s=r[l],r.splice(l,1),e[s.height][s.width].status===G?i=!1:(e[s.height][s.width].status!==W&&(e[s.height][s.width].status=H,n.push([H,e[s.height][s.width]])),i&&s.height>0&&(i=R(s,a,s.height-1,s.width,e,r)),i&&s.height+1<e.length&&(i=R(s,a,s.height+1,s.width,e,r)),i&&s.width+1<e[0].length&&(i=R(s,a,s.height,s.width+1,e,r)),i&&s.width>0&&(i=R(s,a,s.height,s.width-1,e,r)),i||T(s,e,n))}}(JSON.parse(JSON.stringify(e)),t,a,n),{pathSize:I,animation:n}},V="wall",J="space",W="start",G="target",H="visit",L="gray",q="path",K=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).toggleHamburgerIconClass=function(e){n.setState({isClose:!n.state.isClose})},n.state={grid:[],algorithm:"",nodeSize:25,startPoint:{height:1,width:1},targetPoint:{height:2,width:2},isAlgorithmRun:!1,animations:[],visitedNodesNumber:0,pathNodesNumber:0,showPath:!1,width:window.innerWidth,height:window.innerHeight,clearBoard:!0,speed:25,previousStartNodeStatus:J,previousEndNodeStatus:J,mouseIsPressed:!1,startNodePressed:!1,EndNodePressed:!1,isClose:!0},n.setUpGrid=n.setUpGrid.bind(Object(c.a)(n)),n.updateWindowDimensions=n.updateWindowDimensions.bind(Object(c.a)(n)),n.changeSize=n.changeSize.bind(Object(c.a)(n)),n.runAlgorithm=n.runAlgorithm.bind(Object(c.a)(n)),n.changeBoard=n.changeBoard.bind(Object(c.a)(n)),n.runanimation=n.runanimation.bind(Object(c.a)(n)),n.onMouseDown=n.onMouseDown.bind(Object(c.a)(n)),n.onMouseEnter=n.onMouseEnter.bind(Object(c.a)(n)),n.onMouseUp=n.onMouseUp.bind(Object(c.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight}),this.state.isAlgorithmRun||this.setUpGrid(this.state.nodeSize,this.state.clearBoard)}},{key:"setUpGrid",value:function(){var e=Object(p.a)(g.a.mark((function e(t,a){var n,s,i,r,l,o,c,h,u,d;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],r=Math.floor((this.state.height-160)/t),l=Math.floor((this.state.width-50)/t),e.next=5,this.clearpath();case 5:for(o=0,s=0;s<r;s++)for(n[s]=[],i=0;i<l;i++)n[s][i]=new b(++o,s,i,J);if(a)n[5][5].status=W,n[r-5][l-5].status=G,this.setState({targetPoint:n[r-5][l-5],startPoint:n[5][5]});else{for(s=1;s<r-1;s++)for(i=1;i<l-1;i++)s%2===0?100*Math.random()<35&&(n[s][i].status=V):100*Math.random()<25&&(n[s][i].status=V);c=Math.floor(Math.random()*(r-1)+1),h=Math.floor(Math.random()*(l-1)+1),u=Math.floor(Math.random()*(r-1)+1),d=Math.floor(Math.random()*(l-1)+1),n[c][h].status=W,n[u][d].status=G,this.setState({targetPoint:n[u][d],startPoint:n[c][h]})}this.setState({grid:n});case 9:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"runAlgorithm",value:function(){var e=Object(p.a)(g.a.mark((function e(t,a,n,s,i){var r,l;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==a){e.next=2;break}return e.abrupt("return");case 2:if(r="BFS"===a?P:"DFS"===a?j:"A* Search"===a?F:"Dijkstra"===a?U:null){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,this.clearpath();case 7:l=r(t,n,s),this.setState({animations:l.animation,isAlgorithmRun:!0,pathNodesNumber:l.pathSize,visitedNodesNumber:l.animation.length-l.pathSize,showPath:!0}),i?this.runanimation(JSON.parse(JSON.stringify(l.animation))):this.changePath(l.animation);case 10:case"end":return e.stop()}}),e,this)})));return function(t,a,n,s,i){return e.apply(this,arguments)}}()},{key:"runanimation",value:function(e){var t=this;e.length?setTimeout((function(){var a=e[0][1];e[0][0]===q?document.getElementById("".concat(a.height,"-").concat(a.width)).className="path-node":document.getElementById("".concat(a.height,"-").concat(a.width)).className="visit-node",e.shift(),t.runanimation(e)}),this.state.speed):setTimeout((function(){t.setState({isAlgorithmRun:!1})}),100)}},{key:"changePath",value:function(e){for(var t=0;t<e.length;t++){var a=e[t][1];e[t][0]===q?document.getElementById("".concat(a.height,"-").concat(a.width)).className="path-node":document.getElementById("".concat(a.height,"-").concat(a.width)).className="visit-node2"}this.setState({isAlgorithmRun:!1})}},{key:"clearpath",value:function(){var e=Object(p.a)(g.a.mark((function e(){var t,a,n,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=this.state.animations,a=this.state.grid,n=0;n<t.length;n++)s=t[n][1],a[s.height][s.width].status===J&&(document.getElementById("".concat(s.height,"-").concat(s.width)).className="space-node"),a[s.height][s.width].status===V&&(document.getElementById("".concat(s.height,"-").concat(s.width)).className="wall-node"),a[s.height][s.width].h=0,a[s.height][s.width].g=0,a[s.height][s.width].distance=1/0;this.setState({grid:a,animations:[],pathNodesNumber:0,visitedNodesNumber:0,showPath:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"changeBoard",value:function(e){this.setState({clearBoard:e}),this.setUpGrid(this.state.nodeSize,e)}},{key:"changeSize",value:function(e){this.setState({nodeSize:e}),this.setUpGrid(e,this.state.clearBoard)}},{key:"onMouseDown",value:function(e,t){var a=this.state.grid,n=a[e][t];a[e][t].status=n.status===V?J:n.status===J?V:n.status,a[e][t].status===W&&this.setState({startNodePressed:!0}),a[e][t].status===G&&this.setState({EndNodePressed:!0}),this.setState({grid:a,mouseIsPressed:!0})}},{key:"onMouseEnter",value:function(e,t){if(this.state.mouseIsPressed){var a=this.state.grid;if(!this.state.startNodePressed&&!this.state.EndNodePressed){var n=a[e][t];a[e][t].status=n.status===V?J:n.status===J?V:n.status}if(this.state.startNodePressed&&a[e][t].status!==G){var s=this.state.startPoint,i=a[e][t].status;a[s.height][s.width].status=this.state.previousStartNodeStatus,a[e][t].status=W,this.setState({startPoint:a[e][t],previousStartNodeStatus:i}),this.state.showPath&&this.runAlgorithm(a,this.state.algorithm,a[e][t],this.state.targetPoint,!1)}if(this.state.EndNodePressed&&a[e][t].status!==W){var r=this.state.targetPoint,l=a[e][t].status;a[r.height][r.width].status=this.state.previousEndNodeStatus,a[e][t].status=G,this.setState({targetPoint:a[e][t],previousEndNodeStatus:l}),this.state.showPath&&this.runAlgorithm(a,this.state.algorithm,this.state.startPoint,a[e][t],!1)}this.setState({grid:a})}}},{key:"onMouseUp",value:function(){this.state.startNodePressed?this.setState({mouseIsPressed:!1,startNodePressed:!1}):this.state.EndNodePressed?this.setState({mouseIsPressed:!1,EndNodePressed:!1}):this.setState({mouseIsPressed:!1})}},{key:"render",value:function(){var e=this,t=this.state,a=t.grid,n=t.algorithm,i=t.startPoint,r=t.targetPoint,l=t.isAlgorithmRun,o=t.nodeSize,c=t.visitedNodesNumber,h=t.pathNodesNumber,u=t.showPath;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"mainContainer ",style:{background:"rgba(0, 0, 0, 0.518)"}},s.a.createElement("div",{className:"main-bar row"},s.a.createElement("div",{className:"hamburger-menu"},s.a.createElement("div",{id:"hamburger-icon",className:this.state.isClose?"":"open",onClick:this.toggleHamburgerIconClass},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null))),s.a.createElement("div",{id:"menu",className:this.state.isClose?"":"op"},s.a.createElement("div",{className:"devop"},s.a.createElement("h5",{className:"developed"},"Pathfinding"),s.a.createElement("h5",{className:"developed"},"Visualizer")),s.a.createElement("div",{className:"main-button"},s.a.createElement("button",{type:"button",className:"btn btn-outline-primary","data-toggle":"dropdown"},""===n?"Algorithm":n,s.a.createElement("a",{className:"dropdown-toggle"})," "),s.a.createElement("div",{className:"dropdown-menu"},s.a.createElement("button",{onClick:l?null:function(){return e.setState({algorithm:"BFS"})},type:"button",className:" dropdown-item"},s.a.createElement("h6",null,"Breadth First Search (BFS)")),s.a.createElement("button",{onClick:l?null:function(){return e.setState({algorithm:"DFS"})},type:"button",className:"dropdown-item"},s.a.createElement("h6",null,"Depth First Search (DFS)")),s.a.createElement("button",{onClick:l?null:function(){return e.setState({algorithm:"Dijkstra"})},type:"button",className:"dropdown-item"},s.a.createElement("h6",null,"Dijkstra Algorithm")),s.a.createElement("button",{onClick:l?null:function(){return e.setState({algorithm:"A* Search"})},type:"button",className:"dropdown-item"},s.a.createElement("h6",null,"A* Search")))),s.a.createElement("div",{className:"main-button"},s.a.createElement("button",{type:"button",className:"btn btn-outline-primary","data-toggle":"dropdown"},"Board",s.a.createElement("a",{className:"dropdown-toggle"})),s.a.createElement("div",{className:"dropdown-menu"},s.a.createElement("button",{onClick:l?null:function(){return e.changeBoard(!1)},type:"button",className:"dropdown-item"},s.a.createElement("h6",null,"Random Maze")),s.a.createElement("button",{onClick:l?null:function(){return e.clearpath()},type:"button",className:"dropdown-item"},s.a.createElement("h6",null,"Clear Path")),s.a.createElement("button",{onClick:l?null:function(){return e.changeBoard(!0)},type:"button",className:"dropdown-item"},s.a.createElement("h6",null,"Clear Board")))),s.a.createElement("div",{className:"main-button"},s.a.createElement("button",{type:"button",className:"btn btn-outline-primary","data-toggle":"dropdown"},"Nodes",s.a.createElement("a",{className:"dropdown-toggle"})),s.a.createElement("div",{className:"dropdown-menu"},s.a.createElement("button",{onClick:l?null:function(){return e.changeSize(45)},type:"button",className:"dropdown-item"},s.a.createElement("h6",null,"Big Nodes")),s.a.createElement("button",{onClick:l?null:function(){return e.changeSize(35)},type:"button",className:"dropdown-item"},s.a.createElement("h6",null,"Medium Nodes")),s.a.createElement("button",{onClick:l?null:function(){return e.changeSize(25)},type:"button",className:"dropdown-item"},s.a.createElement("h6",null,"Small Nodes")))),s.a.createElement("div",{className:"main-button"},s.a.createElement("button",{type:"button",className:"btn btn-outline-primary","data-toggle":"dropdown"},"Speed",s.a.createElement("a",{className:"dropdown-toggle"})),s.a.createElement("div",{className:"dropdown-menu"},s.a.createElement("button",{onClick:function(){return e.setState({speed:1})},type:"button",className:"dropdown-item"},s.a.createElement("h6",null,"Fast")),s.a.createElement("button",{onClick:function(){return e.setState({speed:25})},type:"button",className:"dropdown-item"},s.a.createElement("h6",null,"Average")),s.a.createElement("button",{onClick:function(){return e.setState({speed:50})},type:"button",className:"dropdown-item"},s.a.createElement("h6",null,"Slow"))))),s.a.createElement("div",{className:"main-button run-button"},s.a.createElement("button",{onClick:l?null:function(){return e.runAlgorithm(a,n,i,r,!0)},style:l?{cursor:"not-allowed"}:null,type:"button",className:" btn btn-success"},l?n:"Run")),s.a.createElement("div",{className:"info"},s.a.createElement("div",null,s.a.createElement("h6",{className:"info-font"},""===n?"Choose an algorithm":"Algorithm : "+n)),s.a.createElement("div",null,s.a.createElement("h6",{className:"info-font",style:{display:u?"block":"none"}},"Visited ",c," Nodes. Path length"," ",h)))),s.a.createElement("div",{className:"col-sm-12 pb-2",id:"mainBoardID"},a.map((function(t,a){return s.a.createElement("div",{key:a},t.map((function(t,n){return s.a.createElement("div",{id:"".concat(a,"-").concat(n),key:n,className:t.status===J?"space-node":t.status===V?"wall-node":t.status===H?"visit-node":t.status===q?"path-node":t.status===W?"start-node":t.status===G?"target-node":"space-node",style:{height:o+"px",width:o+"px"},onMouseDown:l?null:function(){return e.onMouseDown(a,n)},onMouseEnter:l?null:function(){return e.onMouseEnter(a,n)},onMouseUp:l?null:function(){return e.onMouseUp()}})})))}))),s.a.createElement("h5",{className:"text-success"},"scroll down"),s.a.createElement(E.a,{size:50,className:"down-arrow"})),s.a.createElement(N,null),s.a.createElement(f,null),s.a.createElement(w,null))}}]),a}(s.a.Component);r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(d,null),s.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.f7e57d09.chunk.js.map