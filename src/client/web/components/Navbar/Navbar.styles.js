/* eslint-disable no-magic-numbers */
export default theme => ({
  "Navbar": {
    zIndex: theme.zIndex.drawer + 1,
  },
  "Navbar_menu-btn": {
    padding: 6,
  },
  "Navbar_menu-icon": {
    height: 30,
    width: 30,
  },
  "Navbar_menu-logo": {
    cursor: "pointer",
    height: 40,
    width: 40,
    padding: 6,
  },
  "Navbar_title-bar": {
    cursor: "pointer",
    flexGrow: 1,
    padding: 6,
  },
  "Navbar_title": {
    display: "inline",
  },
  "Navbar_greater-than": {
    padding: 6,
  },
  "Navbar_description": {
    display: "inline",
    fontStyle: "italic",
  },
  "Navbar_cursor": {
    marginBottom: -3,
  },
});
