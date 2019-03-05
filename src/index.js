import React from 'react';
import ReactDOM from 'react-dom';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';

const App = () => {
    return (
        <div className="ui container-fluid">
         <h1 className="ui header">React spring Parallax</h1>
         <Parallax pages={3}>
             <ParallaxLayer offset={0} speed={0.5} factor={1.5} style={{backgroundColor: '#aaa'}}>
                 <div>Layer 1 is going here!!</div> 
             </ParallaxLayer>
             <ParallaxLayer offset={1} speed={0.5} style={{backgroundColor: '#eee'}}>
                 <div>Layer 2 is going here!!</div>
             </ParallaxLayer>
             <ParallaxLayer offset={2} speed={0.5} style={{backgroundColor: '#ddd'}}>
                 <div>Layer 3 is going here!!</div>
             </ParallaxLayer>
         </Parallax>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));