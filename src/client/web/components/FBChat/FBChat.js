/* eslint-disable no-magic-numbers */
/* global FB */
import React, { Fragment, useEffect } from 'react';
import { insertTag } from '../../../utils/helpers';

const FBChat = ({ pageId }) => {

  useEffect(() => {
    insertTag('https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js', document, 'script', 'facebook-jssdk');
    if (!window.fbAsyncInit) window.fbAsyncInit = () => FB.init({ xfbml: true, version: 'v5.0' });
  }, []);

  return <Fragment>
    <div id="fb-root"></div>
    <div className="fb-customerchat"
      attribution="setup_tool"
      page_id={pageId}>
    </div>
  </Fragment>
}

export default FBChat;
