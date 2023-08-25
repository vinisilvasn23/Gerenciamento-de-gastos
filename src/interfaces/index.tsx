import React, { ChangeEvent, ReactNode, MouseEventHandler } from "react";

export interface IValue {
  value: number;
}

export interface ISummaryProps {
  valueInsert: IValue[];
  setValueInserts: React.Dispatch<React.SetStateAction<ITransaction[]>>;
}

export interface ITransaction {
  id: string;
  description: string;
  value: number;
  type: string;
}

export interface IFormProps {
  valueInsert: ITransaction[];
  setValueInserts: React.Dispatch<React.SetStateAction<ITransaction[]>>;
}
export interface ISelectProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export interface InputProps {
  type: string;
  id: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export interface IButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

export interface ICardProps {
  valueInsert: ITransaction[];
  setValueInserts: React.Dispatch<React.SetStateAction<ITransaction[]>>;
}
