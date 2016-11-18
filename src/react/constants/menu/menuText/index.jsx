import React from 'react';
import { study } from './study'
import { introduce } from './introduce'
import { about } from './about'
import { key } from './key'
import { source } from './source'
import Disqus from '../../../components/disqus';

export const menuText =
  [
    study,
    introduce,
    about,
    key,
    source,
    <aircle className='clearfix'>
      <h2>留下訊息</h2>
      <Disqus />
    </aircle>
  ];
