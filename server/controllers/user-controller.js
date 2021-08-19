import userService from "../service/user-service.js";

class UserController {
    async registration(req, res, next) {
        try {
            const {login, password} = req.body;
            const userData = await userService.registration(login, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
            return res.json(userData);
        } catch (error) {
            console.log(error);
        }
    }

    async login(req, res, next) {
        try {

        } catch (error) {

        }
    }

    async logout(req, res, next) {
        try {

        } catch (error) {

        }
    }

    async activate(req, res, next) {
        try {

        } catch (error) {

        }
    }

    async refresh(req, res, next) {
        try {

        } catch (error) {

        }
    }

    async getUsers(req, res, next) {
        try {
            res.json(['123', '456']);
        } catch (error) {

        }
    }
}

const userController = new UserController();

export default userController;