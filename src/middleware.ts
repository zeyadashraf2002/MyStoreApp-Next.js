import { NextResponse } from "next/server";
import { auth } from "./services/auth";


export const middleware = auth;

export const config = {
    matcher: ["/products", "/category", "/serach", "/cart"]
};