export const BASE_URL = 'http://localhost:8080'

class ApiService {
    private root = BASE_URL;
    private signal: AbortSignal | undefined;

    constructor(){
        
    };
    
    getRequestHeader(){
        return {
            'Content-Type': 'application/json'
        }
    }

    setSignal(signal: AbortSignal){
        this.signal = signal;
    }

    async request(path: string, payload: any, medthod: 'GET' | 'POST' | 'PUT' | 'DELETE', parseBodyToJson = true){
        const url = this.root + path;
        const headers = parseBodyToJson ? this.getRequestHeader() : undefined;
        const response = await fetch(url, {
            method: medthod,
            headers,
            signal: this.signal,
            body: parseBodyToJson ? JSON.stringify(payload) : payload
        })
        
        if(response){
            console.log('Fetch success');
            return response;
        }else{
            return undefined;
        }
    }

    get(path: string, payload: any){
        return this.request(path, payload, "GET");
    }

    post(path: string, payload: any){
        return this.request(path, payload, "POST");
    }

    postFile(path: string, payload: any){
        return this.request(path, payload, "POST", false);
    }

    put(path: string, payload: any){
        return this.request(path, payload, "PUT");
    }
    
    putFile(path: string, payload: any){
        return this.request(path, payload, "PUT", false);
    }

    delete(path: string, payload: any){
        return this.request(path, payload, "DELETE");
    }
}

export default new ApiService();
