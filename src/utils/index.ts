export const debounce = (func: any, wait: number) => {
    let timer: number | null = null;

    return function (this: unknown, ...args: unknown[]) {
        const onComplete = () => {
            func.apply(this, args);
            timer = null;
        };

        if (timer) {
            clearTimeout(timer);
        }

        setTimeout(onComplete, wait);
    };
};