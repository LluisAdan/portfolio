import {ObjectId} from "mongodb"

export type Project = {
  id: ObjectId;
  title: string;
  description: string;
  image: string;
  url: string;
  git: string;
  skills: [string];
}