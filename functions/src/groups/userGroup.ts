import { UserHandlersImpl } from '../users/infrastructure/handlers/userHandlers';
import { UserApplicationImpl } from '../users/application/userApplication';
import { UserRepositoryImpl } from '../users/infrastructure/repository/userRepository';
import { UserHandlers } from '../users/infrastructure/handlers/userHandlers';

 function BuildUserHandlers():UserHandlers {
    const repository =  new UserRepositoryImpl()
    const application = new UserApplicationImpl(repository)
    const handlers = new UserHandlersImpl(application)
    return handlers
}

const userHandlers = BuildUserHandlers()

export default {
    login: userHandlers.Login,
    register: userHandlers.Register
}