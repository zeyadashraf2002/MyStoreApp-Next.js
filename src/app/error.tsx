'use client'
interface props {
    error: Error;
}

export default function error( { error }: props ) {
    return (
        <div className="p-8 text-center bg-yellow-50 min-h-screen flex items-center justify-center">
            <div>
                <h1 className="text-4xl font-bold text-yellow-600 mb-4">Oops! Something Went Wrong</h1>
                <p className="text-gray-600 mt-2 text-lg">{error.message}</p>
                <p className="text-gray-500 mt-2">Try refreshing the page or go back home.</p>
            </div>
        </div>
    );
}