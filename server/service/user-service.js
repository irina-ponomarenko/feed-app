import Users from "../db/schemas/users.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';
import mailService  from "./mail-service.js";
import tokenService from "./token-service.js";
import UserDto from "../dtos/user-dto/user-dto.js";
import ApiError from "../exceptions/api-error.js";

class UserService {

    async registration(login, password, name) {
        const candidate = await Users.findOne({login})
        if(candidate) {
            throw ApiError.BadRequest(`Пользователь с поточным ${login} уже существует`);
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuidv4();
        const user = await  Users.create({
            name,
            login,
            password: hashPassword,
            activationLink
        });
        await mailService.sendActivationMail(login, `${process.env.API_URL}/api/activate/${activationLink}`);

        const userDto = new UserDto(user); //id, login, isActivated
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto};
    };

    async activate(activationLink) {
        const user = await Users.findOne({activationLink});
        if (!user) {
            throw ApiError.BadRequest("Некорректная ссылка активации");
        }
        user.isActivated = true;
        await user.save();
    };

    async login(login, password) {
        const user = await Users.findOne({login});
        if(!user) {
            throw ApiError.BadRequest("Пользователь с таким email не найден");
        }
        const isPasEquals = await bcrypt.compare(password, user.password);
        if(!isPasEquals) {
            throw ApiError.BadRequest("Неверный пароль");
        }
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, user: userDto};
    };
}

const userService = new UserService();

export default userService;