
interface IConsole {
    info(message?: any, ...optionalParams: any[]): void;
    warn(message?: any, ...optionalParams: any[]): void;
    error(message?: any, ...optionalParams: any[]): void;
    log(message?: any, ...optionalParams: any[]): void;
}

interface IToDoItem {
    name: KnockoutObservable<string>;
    completed: KnockoutObservable<boolean>;
}
