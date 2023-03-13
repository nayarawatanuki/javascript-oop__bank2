export class AuthSystem {

    static login(user, password) {

        if(AuthSystem.isAuth(user)) {

            return user.auth(password);
        }

        return false;
    }

    static isAuth(user) {
        
        return "auth" in user && 
            user.auth instanceof Function;
    }
}