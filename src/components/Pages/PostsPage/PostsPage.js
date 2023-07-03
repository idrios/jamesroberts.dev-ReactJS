import React from 'react'; 

import Page from '../Page/Page';

import { PAGE_NAMES } from '../../../res/constants/constants';
import { _7Oct2021, P28Mar2023 } from '../../Posts/Posts';


class PostsPage extends Page {
  constructor(props){
    super(props);
    this.pageName = PAGE_NAMES.POSTS;
  }
  renderContentBody(){
    return (
      <div>
        <P28Mar2023/>
      </div>
    );
  }
}

export default PostsPage; 