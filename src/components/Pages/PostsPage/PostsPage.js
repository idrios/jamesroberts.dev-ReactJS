import React from 'react'; 

import Page from '../Page/Page';

import { PAGE_NAMES } from '../../../res/constants/constants';
import { _7Oct2021 } from '../../Posts/Posts';


class PostsPage extends Page {
    constructor(props){
        super(props);
        this.showHeader = true; 
        this.showFooter = true; 
        this.pageName = PAGE_NAMES.POSTS;
    }
    renderContentBody(){
        return (
            <div>
                <_7Oct2021/>
            </div>
        );
    }
}

export default PostsPage; 