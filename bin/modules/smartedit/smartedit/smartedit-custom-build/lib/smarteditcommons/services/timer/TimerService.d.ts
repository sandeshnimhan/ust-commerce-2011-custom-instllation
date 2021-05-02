import { Timer } from './Timer';
import { NgZone } from '@angular/core';
export declare class TimerService {
    private ngZone;
    constructor(ngZone: NgZone);
    createTimer(callback: () => void, duration: number): Timer;
}
