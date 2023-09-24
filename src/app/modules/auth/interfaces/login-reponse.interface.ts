export interface LoginResponse {
  userData: UserData;
}

export interface UserData {
  user:         User;
  access_token: string;
}

export interface User {
  id:        number;
  username:  string;
  email:     string;
  roles:     string;
  CreatedAt: Date;
  Updated:   Date;
}
