export interface VideoDetails {
  id:            number;
  title:         string;
  description:   string;
  videoUrl:      string;
  created:       Date;
  updated:       Date;
  videoComments: VideoComment[];
}

export interface VideoComment {
  id:          number;
  description: string;
  createdAt:   Date;
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
