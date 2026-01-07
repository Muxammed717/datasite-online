import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo });
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: '40px', color: '#721c24', backgroundColor: '#f8d7da', height: '100vh', fontFamily: 'monospace' }}>
                    <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Something went wrong.</h1>
                    <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Error Details:</h3>
                    <pre style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '5px', overflow: 'auto', border: '1px solid #f5c6cb' }}>
                        {this.state.error && this.state.error.toString()}
                    </pre>
                    <h3 style={{ fontSize: '18px', marginTop: '20px', marginBottom: '10px' }}>Component Stack:</h3>
                    <details style={{ whiteSpace: 'pre-wrap', backgroundColor: '#fff', padding: '15px', borderRadius: '5px', border: '1px solid #f5c6cb' }}>
                        {this.state.errorInfo && this.state.errorInfo.componentStack}
                    </details>
                    <button
                        onClick={() => window.location.reload()}
                        style={{ marginTop: '30px', padding: '10px 20px', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                        Reload Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
