import React, { Fragment } from "react";

// Styled Components
import { Box, Main, Header, Text, Button } from "grommet";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();
  return (
    <Fragment>
      <Header>
        <Text>Welcome to the Trivia Challenge!</Text>
      </Header>
      <Main>
        <Text>You will be presented with 10 True or False questions.</Text>
        <Text>Can you score 100%?</Text>
      </Main>
      <Box align="center" pad="medium">
        <Button
          primary
          label="Begin"
          onClick={() => {
            history.push("/quiz");
          }}
        />
      </Box>
    </Fragment>
  );
};

export default Home;
