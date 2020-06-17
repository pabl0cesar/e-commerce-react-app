import React from 'react';

class HomePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            
        };
    }

    render() {
        return (
            <div>
                <ol>
                    <li> 
                        item de prueba A
                    </li>
                    <li>
                        item de prueba B
                    </li>
                </ol>
            </div>
        );
    }
}

export default HomePage;