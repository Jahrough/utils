// This higher order function allows set the fequency in which it returns "true"...
// For example if you want mitigate how often some functionality can be called repeatedly...

const setGracePeriod = (delay = 10000) => {
    let state = true;
    let timeout = null;
    return () => {
        const result = state;

        if (state) {
            state = false;
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
        }
        
        if (!state && !timeout) {
            timeout = setTimeout(() => (state = true), delay);
        }

        return result;
    };
};
