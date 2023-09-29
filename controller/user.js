import { userModal } from "../Modals/user.js";
export const userRegister = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, phone, message } = req.body;

    //Authentication
    if (!name || !email || !phone) {
      return res.status(401).send({
        message: "All field are necessary",
        success: false,
      });
    }

    const user = await userModal.create({ name, email, phone, message });

    return res.status(200).send({
      message: "registration successful",
      success: true,
      user,
    });
  } catch (error) {
    console.log(`${error}`);
    return res.status(500).send({
      message: "Internal server error",
      success: false,
      error,
    });
  }
};
