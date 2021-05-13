import React from 'react';

import './frontpage.style.scss';

import Project from '../components/projects/Project.component';

class FrontPage extends React.Component {
    constructor() {
        super();
        
        this.state = {
            
        }
    }


    render() {
        return (
            <div className="front-page">
                <div className="front-text">
                    <h3>Something</h3>
                    <p className="paragraph">

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed nisl diam. Quisque purus quam, interdum nec ornare a, congue vitae orci. 
                    Donec mollis metus ipsum, quis dapibus nisl aliquam et. Aenean dignissim ac magna nec gravida. Duis eu lacinia ex. 
                    Proin sed nisi fringilla, maximus neque ut, lacinia nulla. Donec in pretium risus, ac sagittis felis. 
                    Aenean congue tellus sit amet enim mattis placerat.
                    
                    Nullam sed lacus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis nec risus interdum ex interdum semper nec sed libero. 
                    Duis eu ante sollicitudin, imperdiet ipsum lacinia, semper justo. Proin rhoncus purus quam, nec dignissim neque efficitur ut. Donec ac sollicitudin quam, id pellentesque neque. 
                    Ut venenatis orci quis ex suscipit condimentum. Vivamus scelerisque vel augue in pellentesque. 
                    </p>
                </div>
                <Project />
            </div>
        )
    }
}

export default FrontPage;