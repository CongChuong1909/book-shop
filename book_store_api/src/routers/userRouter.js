const router = require("express").Router();
const userController = require("../app/controllers/userController");
//1
router.post("/register", userController.register);
//2
router.post("/login_customer", userController.loginCustomer);
//3
router.post("/login_admin", userController.loginAdmin);
//4
router.get("/profile/:id", userController.profile);

//5
router.post("/update/:id", userController.updateProfile);
//
router.post("/delete/:id", userController.deleteUser);
//6
router.get("/", userController.getAllUser);
//7
router.put("/update_role/:id", userController.updateRole);
module.exports = router;
