"use client";

import { signInAction } from "@/util/signInAction";

function SignInButton() {
    return (
        <div>
            <form action={signInAction}>
            <button className="flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                <span className="ml-2">Sign in with Google</span>
            </button>
            </form>
        </div>
    );

}

export default SignInButton