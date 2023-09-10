import React from 'react';
import "./AboutProject.css";

import { FaAtlas, FaPeopleCarry,FaInstagram,FaLinkedin} from "react-icons/fa"

function AboutProject(props) {
    return (
        <>
          <div className='container-fluid mt-5'>
            <div className='p1-container'>
               
                <div className='row text-center'>
                    <div className='col-lg-6'>
                    <FaAtlas size={65} className='text-primary' />
                    </div>
                    <div className='col-lg-6'>
                    <h3 className='text-center text-primary'>About Project</h3>
                    <hr style={{ width: "40%", margin: "auto", color: "blue" }}></hr>
            <hr style={{ width: "40%", margin: "auto", color: "blue" }}></hr>
            <hr style={{ width: "40%", margin: "auto", color: "blue" }}></hr>
            <hr style={{ width: "40%", margin: "auto", color: "blue" }}></hr>
                    </div>
                </div>
            </div>
            <div className='container p2-container mt-5'>
                <h5>PATHFINDING VISUALIZER:</h5>
                <p className='text-justify'>Plotting is known as pathfinding or pathing. A computer program, particularly brief  a path connecting two locations. Being more a useful maze-solving variation. This branch of study is primarily centered on Dijkstra's formula for determining the on a weighted graph, the shortest path that best meets some criteria .</p><br></br>
                <p className='text-justify'>A  pathfinding  approach  fundamentally  searches.  Beginning  at  one vertex  in  a  graph, looking into nearby nodes until the reaches the destination node, typically with the goal of locating the least expensive path. Although graph search techniques like If a route is needed,  a  breadth-first  search  would  be  used.  if  given  enough  time,  alternative techniques  "Explore" the graph, which would aim to the finish line earlier. An example would rather than a person moving across a space than considering all alternatives, The person would typically walk forward just travelling in the destination's direction  veer off  the  path  to  avoid  a  impediment,  and  downplay  deviations  the  maximum  area (shortest, cheapest, fastest, etc.) between two points in a large network.</p>

                <br></br><h5>1. Path-finding using BFS i.e. Breadth First Search</h5>
                <p className='text-justify'>BFS is  a traversal algorithm  in which you  should begin at  a chosen node  (source or starting node) and move layer-by-layer through the network to explore your neighbors’ nodes (nodes that are directly connected to the source node). After that, you must head toward the nodes that are next in level.</p>
                <br></br>
                <h5>2. Path-finding using DFS i.e. Depth First Search </h5>
                <p className='text-justify'>Stack  is  the  type  of  data  structure  utilized  in  DFS.  The  method  is  comparable  to  the  BFS algorithm. In DFS, the  edges that  lead  to a node  that has  not yet been visited  are known as discovery edges, whereas the edges that lead to a node that has already been visited are known as block edges.</p>
                <br></br>
                <h5>3. Path-finding using A* algorithm </h5>
                <p className='text-justify'>A search algorithm known as A* algorithm looks  for the  shortest route  between the  starting point  and the  desired  outcome.  It  is  utilized  in many  applications,  including  maps.  The  A* method is used in maps to determine the shortest path between the source (starting point) and the destination (final state)</p>
                <br></br>
                <h5>4. Path-finding using Dijkstra searching algorithm </h5>
                <p className='text-justify'>Dijkstra’s algorithm, published in 1959 and named after its creator Dutch computer scientist Edger  Dijkstra,  can  be  applied  on  a  weighted  graph.  The  graph  can  either  be  directed  or undirected. One stipulation to using the algorithm is that the graph needs to have a nonnegative weight on every edge.</p>
            </div>

            <div className='container p3-container mt-5 mb-5'>
                <h4 className='text-center'>Time Complexity</h4>
                <div className='row text-center mt-5'>
                    <div className='col-lg-3 col-md-6 p-4' style={{border:"1px solid black", borderRadius:"4px",background:"cyan"}}>
                        <h5>BFS Algorithm</h5>
                        <h6>O(E+V)</h6>

                    </div>
                    <div className='col-lg-3 col-md-6 p-4' style={{border:"1px solid black", borderRadius:"4px",background:"yellow"}}>
                        <h5>DFS Algorithm</h5>
                        <h6><h6>O(E+V)</h6></h6>
                        
                    </div>
                    <div className='col-lg-3 col-md-6 p-4' style={{border:"1px solid black", borderRadius:"4px",background:"lightgreen"}}>
                        <h6>Dijstra's Algorithm</h6>
                        <h6>O((V+E)logV)</h6>
                        
                    </div>
                    <div className='col-lg-3 col-md-6 p-4' style={{border:"1px solid black", borderRadius:"4px",background:"orange"}}>
                        <h6>A* Algorithm</h6>
                        <h6>O(ElogV)</h6>
                        
                    </div>
                </div>
            </div>

            <div className='container p3-container mt-5 mb-5'>
                <h4 className='text-center'>Space Complexity</h4>
                <div className='row text-center mt-5'>
                    <div className='col-lg-3 col-md-6 p-4' style={{border:"1px solid black", borderRadius:"4px",background:"cyan"}}>
                        <h5>BFS Algorithm</h5>
                        <h6>O(V)</h6>

                    </div>
                    <div className='col-lg-3 col-md-6 p-4' style={{border:"1px solid black", borderRadius:"4px",background:"yellow"}}>
                        <h5>DFS Algorithm</h5>
                        <h6><h6>O(V+E)</h6></h6>
                        
                    </div>
                    <div className='col-lg-3 col-md-6 p-4' style={{border:"1px solid black", borderRadius:"4px",background:"lightgreen"}}>
                    <h6>Dijstra's Algorithm</h6>
                        <h6>O(V)</h6>
                        
                    </div>
                    <div className='col-lg-3 col-md-6 p-4' style={{border:"1px solid black", borderRadius:"4px",background:"orange"}}>
                    <h6>A* Algorithm</h6>
                        <h6>O(V)</h6>
                        
                    </div>
                </div>
            </div>
           
          </div>  
        </>
    );
}

export default AboutProject;