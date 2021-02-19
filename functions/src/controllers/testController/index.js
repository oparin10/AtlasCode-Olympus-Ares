const testIndex = (req, res) => {
  return res.send("ok ok").status(200);
};

const testSuper = (req, res) => {
  return res.send("super ok").status(201);
};

module.exports = {
  testIndex: testIndex,
  testSuper: testSuper,
};
