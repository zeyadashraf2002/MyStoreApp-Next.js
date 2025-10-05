import SignInButton from "@/Components/signinbutton";

export default function LoginPage() {
    return (
        <div className="p-8 bg-gradient-to-br from-purple-50 to-pink-100 min-h-screen flex items-center justify-center">
            <div className="text-center">
                <SignInButton></SignInButton>
            </div>
        </div>
    );
}