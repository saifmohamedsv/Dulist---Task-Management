import { Dayjs } from "dayjs";
declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.svg";

export type TaskType = {
  id: number;
  title: string;
  dueDate: any;
  description: string;
  status: string;
  completed: boolean;
};
