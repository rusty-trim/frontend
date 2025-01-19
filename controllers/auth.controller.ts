"use client";
import { FormEvent } from "react";

export const register = (event: FormEvent, data: any) => {
    event.preventDefault();
    console.log(data);
}

export const login = (event: FormEvent) => {
    event.preventDefault();
}