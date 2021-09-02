import userService from "../service/user-service.js";
import validResult from "express-validator";
import ApiError from "../exceptions/api-error.js";

const {validationResult} = validResult;

class UserController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req);
            if(!errors.isEmpty()) {
                return next(ApiError.BadRequest("Ошибка при валидации",errors.array()));
            }
            const {login, password} = req.body;
            const userData = await userService.registration(login, password);
            res.cookie(
                'refreshToken',
                userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true}
                );
            return res.json(
                {
                    userData
                }
            );
        } catch (error) {
            next(error);
        }
    }

    async login(req, res, next) {
        try {
            const {login, password} = req.body;
            const userData = await userService.login(login, password);
            res.cookie(
                'refreshToken',
                userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true}
            );
            return res.json(
                {
                    userData
                }
            );
        } catch (error) {
            next(error);
        }
    }

    async logout(req, res, next) {
        try {

        } catch (error) {
            next(error);
        }
    }

    async activate(req, res, next) {
        try {
            const activationLink = req.params.link;
            await userService.activate(activationLink);
            return res.redirect(process.env.CLIENT_URL);
        } catch (error) {
            next(error);
        }
    }

    async refresh(req, res, next) {
        try {

        } catch (error) {
            next(error);
        }
    }

    async getUsers(req, res, next) {
        try {
            res.json(['123', '456']);
        } catch (error) {
            next(error);
        }
    }
}

const userController = new UserController();

export default userController;