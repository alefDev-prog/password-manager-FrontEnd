export interface infoUser {
    username?: string,
    account?: [{
        AccountName: String,
        AccountPassword?: String,
        _id?: string 
    }]
}

export interface accountObj {

    AccountName: String,
    AccountPassword?: String,
    _id?: string

}

export interface registerInitial {
    

    usernameMessage: string;
    passwordMessage: string;
    checkPasswordMessage: string;

}