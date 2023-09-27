export interface CourseDetails {
  id:            number;
  title:         string;
  description:   string;
  createdAt:     Date;
  updatedAt:     Date;
  videos:        Video[];
  courseComents: CourseComent[];
}

export interface CourseComent {
  id:          number;
  description: string;
  created:     Date;
  Updated:     Date;
  user:        User;
}

export interface User {
  id:        number;
  username:  string;
  email:     string;
  roles:     string;
  CreatedAt: Date;
  Updated:   Date;
}

export interface Video {
  id:          number;
  title:       string;
  description: Description;
  videoUrl:    string;
  created:     Date;
  updated:     Date;
}
export enum Description {
  Djsnknakodkoaodad = "djsnknakodkoaodad",
  Dsjndnlankldklakdadad = "dsjndnlankldklakdadad",
  EstaEsLaDescripcionXd = "esta es la descripcion xd",
}
