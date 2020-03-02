import React, { Fragment } from "react";
import { Typography } from "@material-ui/core";

import Layout from '../../components/Layout/Layout';
import FullpageLoader from '../../components/FullpageLoader/FullpageLoader';

const Home = () => <Fragment>
  <Layout>
    <Typography>Home</Typography>
    <FullpageLoader />
  </Layout>
</Fragment>;

export default Home;
