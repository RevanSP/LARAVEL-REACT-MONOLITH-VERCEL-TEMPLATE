const getApiUrl = (endpoint) => {
    const isProduction = window.location.hostname.includes('vercel.app');
    
    const baseUrl = isProduction ? '/api/api' : '/api';
    
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
    
    return `${baseUrl}/${cleanEndpoint}`;
};

export default getApiUrl; 