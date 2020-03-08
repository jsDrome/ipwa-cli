import React from 'react';
import classnames from 'classnames';
import { Link } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import GithubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';

import styles from './styles';

const GITHUB_LINK = '#';
const INSTAGRAM_LINK = '#';
const FACEBOOK_LINK = '#';
const LINKEDIN_LINK = '#';
const YOUTUBE_LINK = '#';
const TWITTER_LINK = '#';
const EMAIL_LINK = '#';

const SocialLinks = ({ classes }) => <div className={classes.social}>
  <Link className={classes.socialLink} href={GITHUB_LINK} target="_blank">
    <GithubIcon className={classnames(classes.socialIcon, classes.githubIcon)} />
  </Link>
  <Link className={classes.socialLink} href={INSTAGRAM_LINK} target="_blank">
    <InstagramIcon className={classes.socialIcon} />
  </Link>
  <Link className={classes.socialLink} href={FACEBOOK_LINK} target="_blank">
    <FacebookIcon className={classes.socialIcon} />
  </Link>
  <Link className={classes.socialLink} href={LINKEDIN_LINK} target="_blank">
    <LinkedInIcon className={classes.socialIcon} />
  </Link>
  <Link className={classes.socialLink} href={YOUTUBE_LINK} target="_blank">
    <YouTubeIcon className={classes.socialIcon} />
  </Link>
  <Link className={classes.socialLink} href={TWITTER_LINK} target="_blank">
    <TwitterIcon className={classes.socialIcon} />
  </Link>
  <Link className={classes.socialLink} href={EMAIL_LINK} target="_blank">
    <EmailIcon className={classes.socialIcon} />
  </Link>
</div>;

export default withStyles(styles, { withTheme: true })(SocialLinks);
