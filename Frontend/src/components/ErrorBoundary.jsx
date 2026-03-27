import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    handleReload = () => {
        window.location.reload();
    }

    render() {
        if(this.state.hasError) {
            return (
                <div className="h-screen flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl font-bold mb-4">Something went wrong.</h1>
                    <p className="text-lg mb-6">An unexpected error occurred. Please try again later.</p>

                    <button
                        onClick={this.handleReload}
                        className="px-4 py-2 bg-black text-white rounded"
                    >
                        Reload Page
                    </button>
                </div>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary