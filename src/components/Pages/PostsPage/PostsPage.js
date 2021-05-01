import React from 'react'; 

import Page from '../Page/Page';
import { PAGE_NAMES } from '../../../res/constants/constants';  

class PostsPage extends Page {
    constructor(props){
        super(props)
        this.showHeader = true; 
        this.showFooter = true; 
        this.pageName = PAGE_NAMES.POSTS;
    }
    renderContentBody(){
        return (
            <div>
                <h1>Posts Page!</h1>
                <p>This is the posts page!</p>
            </div>
        );
    }
}

export default PostsPage; 