export default function NotFound() {
    return (
        <div className="p-8 text-center bg-red-50 min-h-screen flex items-center justify-center">
            <div>
                <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
                <p className="text-gray-600 mt-2 text-xl">Oops! Page Not Found</p>
                <p className="text-gray-500 mt-2">Let's get you back home.</p>
            </div>
        </div>
    );
}