/* eslint-disable no-magic-numbers */
export default theme => ({
  content: {
    flexGrow: 1,
    padding: 20,
    [theme.breakpoints.down('sm')]: {
      padding: 10,
    },
  },
  paper: {
    padding: 15,
    [theme.breakpoints.up('sm')]: {
      padding: 25,
    },
    wordBreak: 'break-word',
    maxWidth: 800,
    margin: 'auto',
  },
});
