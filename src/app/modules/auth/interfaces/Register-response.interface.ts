export interface RegisterResponse {
  userData: UserData;
}

export interface UserData {
  user:         User;
  access_token: string;
}

export interface User {
  username:  string;
  email:     string;
  id:        number;
  roles:     string;
  CreatedAt: Date;
  Updated:   Date;
}
