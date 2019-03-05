import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';

const App = () => {
    return (
        <div className="ui container-fluid">
         <h1 className="ui header">React spring Parallax</h1>
         <Parallax pages={3}>
             <ParallaxLayer offset={0} speed={0.5} factor={1.5} style={{backgroundColor: '#aaa'}}>
                 <img className="ui image" src={faker.image.image()} alt=""/>
             </ParallaxLayer>
             <ParallaxLayer offset={1} speed={0.5} style={{backgroundColor: '#eee'}}>
                 <img className="ui image" src={faker.image.nature()} alt=""/>
             </ParallaxLayer>
             <ParallaxLayer offset={2} speed={0.5} style={{backgroundColor: '#ddd'}}>
                 <img className="ui image" src={faker.image.image()} alt=""/>
             </ParallaxLayer>
         </Parallax>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));