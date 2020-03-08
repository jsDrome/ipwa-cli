import React, { Component } from 'react';
import { Link } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';

import styles from './styles';

class SocialLinks extends Component {
  render() {
    const { classes } = this.props;
    return <div className={classes.social}>
      <Link className={classes.socialLink} href="" target="_blank">
        <InstagramIcon className={classes.socialIcon} onClick={() => window.location = '#'} />
      </Link>
      <Link className={classes.socialLink} href="" target="_blank">
        <FacebookIcon className={classes.socialIcon} onClick={() => window.location = '#'} />
      </Link>
      <Link className={classes.socialLink} href="" target="_blank">
        <LinkedInIcon className={classes.socialIcon} onClick={() => window.location = '#'} />
      </Link>
      <Link className={classes.socialLink} href="" target="_blank">
        <YouTubeIcon className={classes.socialIcon} onClick={() => window.location = '#'} />
      </Link>
      <Link className={classes.socialLink} href="" target="_blank">
        <TwitterIcon className={classes.socialIcon} onClick={() => window.location = '#'} />
      </Link>
      <Link className={classes.socialLink} href="" target="_blank">
        <EmailIcon className={classes.socialIcon} onClick={() => window.location = `mailto:${'#'}`} />
      </Link>
    </div>;
  }
}

export default withStyles(styles, { withTheme: true })(SocialLinks);
