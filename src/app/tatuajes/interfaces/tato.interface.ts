// Generated by https://quicktype.io

export interface Tato {
  _id:         string;
  title:       string;
  description: string;
  price:       number;
  details:     string;
  size:        string;
  color:       string;
  style:       string;
  bodyPart:    string;
  imageUrl?:   string;
}

export interface Contact {
  firstName:    string;
  lastName:     string;
  email:        string;
  phoneNumber?: string;
  matter:       string;
  message:      string;
}