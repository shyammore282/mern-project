const home = async (req, res) => {
  try {
    res.status(200).send("jai ho using controller");
  } catch (error) {
    res.status(404).send("not found");
  }
};

const register = async (req, res) => {
  try {
    res.status(200).send("registration using controllers");
  } catch (error) {
    res.status(404).send({ msg: "not found" });
  }
};

const login = async (req, res) => {
  try {
    res.status(200).send("login using controllers");
  } catch (error) {
    res.status(404).send({ msg: "login error please try agian" });
  }
};

module.exports = { home, register, login };
