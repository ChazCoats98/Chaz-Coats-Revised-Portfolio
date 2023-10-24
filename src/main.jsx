import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from '@fullpage/react-fullpage';
import './index.css';

class App extends React.Component {
    onLeave(origin, destination, direction) {

    }
    afterLoad(origin, destination, direction) {

    }
    render() {
        return (
            <ReactFullpage 
            onLeave={this.onLeave.bind(this)}
            afterLoad={this.afterLoad.bind(this)}
            render={({ state, fullPageApi }) => {
                return (
                    <div id="fullpage-wrapper">
                        <div className="'section section1">
                            
                        </div>
                        <div className="'section">
                            <div className='slide'>

                            </div>
                            <div className='slide'>
                                
                            </div>
                            <div className='slide'>
                                
                            </div>
                        </div>
                        <div className="'section">
                            
                        </div>
                        <div className="'section">
                            
                        </div>
                        
                    </div>
                );
            }}
        />
        );
    }
}

ReactDOM.render(<FullpageWrapper />, document.getElementById('react-root'));

export default FullpageWrapper;