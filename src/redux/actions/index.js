const createAction = actionType => {
  return [
    actionType,
    payload => {
      return {
        type: actionType,
        payload
      };
    }
  ];
};

const [ANSWER, Answer] = createAction("ANSWER");

const actionTypes = {
  ANSWER
};
export { actionTypes, Answer };
