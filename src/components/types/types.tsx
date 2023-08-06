//Export Type/interface
import { ReactNode } from "react";


export type PostProps = {
    id: number;
    title: string;
    body: string;
    userId: number
};

export interface FetchProps  {
    id: number;
    title: string;
    body: string;
    userId: number;
};
export interface FetchProps {
    // define any props here
}

export interface Props {
  children: ReactNode;
}