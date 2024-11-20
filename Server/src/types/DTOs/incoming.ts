export interface registerDto {
    username: string;
    password: string;
    phone: string;
}

export interface loginDto {
    username: string;
    password: string;
}

export interface addContactDto {
    nickname: string;
    phone: string
}