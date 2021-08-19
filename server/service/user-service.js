import Users from "../db/schemas/users.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';
import mailService  from "./mail-service.js";
import tokenService from "./token-service.js";
import UserDto from "../dtos/user-dto/user-dto.js";

class UserService {

    async registration(login, password, name) {
        const candidate = await Users.findOne({login})
        if(candidate) {
            throw new Error(`Пользователь с поточным ${login} уже существует`);
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuidv4();
        const user = await  Users.create({
            name,
            login,
            password: hashPassword,
            activationLink
        });
        await mailService.sendActivationMail(login, activationLink);

        const userDto = new UserDto(user); //id, login, isActivated
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto}
    }
}

const userService = new UserService();

export default userService;