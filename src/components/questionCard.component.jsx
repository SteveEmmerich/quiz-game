import React from "react";

import { useDispatch } from "react-redux";
// TODO: Create Actions that will be called here
import { Answer } from "../redux/actions";
// Styled Components
import { Box, Text, Button } from "grommet";

// TODO: Style this like a card
const Card = props => {
  return (
    <Box
      pad="large"
      align="center"
      background={{ color: "light-2", opacity: "strong" }}
      round
      gap="small"
      {...props}
    />
  );
};

const QuestionCard = props => {
  const dispatch = useDispatch();
  const { question } = props;
  return (
    <Card>
      <Text>{question.text}</Text>
      {question.type === "boolean" ? (
        <Box>
          <Button
            label="True"
            onClick={() => {
              dispatch(Answer({ id: question.id, answer: true }));
            }}
          />
          <Button
            label="False"
            onClick={() => {
              dispatch(Answer({ id: question.id, answer: false }));
            }}
          />
        </Box>
      ) : null}
    </Card>
  );
};

export { Card, QuestionCard };
