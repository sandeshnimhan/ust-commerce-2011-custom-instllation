/**
 * @ngdoc overview
 * @name timerModule
 *
 * @description
 * A module that provides a Timer object that can invoke a callback after a certain period of time.
 * * {@link timerModule.service:Timer Timer}
 */
import { NgZone } from '@angular/core';
/**
 * @ngdoc service
 * @name timerModule.service:Timer
 *
 * @description
 * A `Timer` must be instanciated calling **`timerService.createTimer()`**.
 * This `Timer` service uses native setInterval function and adds additional functions to it.
 *
 * @param {Function} callback The function that will be invoked upon timeout.
 * @param {Number} [duration=1000] The number of milliseconds to wait before the callback is invoked.
 */
export declare class Timer {
    private zone;
    private _callback;
    private _duration;
    private _timer;
    constructor(zone: NgZone, _callback: () => void, _duration?: number);
    /**
     * @ngdoc method
     * @name timerModule.service:Timer#isActive
     * @methodOf timerModule.service:Timer
     *
     * @description
     * This method can be used to know whether or not the timer is currently active (counting down).
     *
     * @returns {Boolean} Returns true if the timer is active (counting down).
     */
    isActive(): boolean;
    /**
     * @ngdoc method
     * @name timerModule.service:Timer#restart
     * @methodOf timerModule.service:Timer
     *
     * @description
     * Stops the timer, and then starts it again. If a new duration is given, the timer's duration will be set to that new value.
     *
     * @param {Number} [duration=The previously set duration] The new number of milliseconds to wait before the callback is invoked.
     */
    restart(duration?: number): void;
    /**
     * @ngdoc method
     * @name timerModule.service:Timer#start
     * @methodOf timerModule.service:Timer
     *
     * @description
     * Start the timer, which will invoke the callback upon timeout.
     *
     * @param {Number} [duration=The previously set duration] The new number of milliseconds to wait before the callback is invoked.
     */
    start(duration?: number): void;
    /**
     * @ngdoc method
     * @name timerModule.service:Timer#stop
     * @methodOf timerModule.service:Timer
     *
     * @description
     * Stop the current timer, if it is running, which will prevent the callback from being invoked.
     */
    stop(): void;
    /**
     * @ngdoc method
     * @name timerModule.service:Timer#resetDuration
     * @methodOf timerModule.service:Timer
     *
     * @description
     * Sets the duration to a new value.
     *
     * @param {Number} [duration=The previously set duration] The new number of milliseconds to wait before the callback is invoked.
     */
    resetDuration(duration: number): void;
    /**
     * @ngdoc method
     * @name timerModule.service:Timer#teardown
     * @methodOf timerModule.service:Timer
     *
     * @description
     * Clean up the internal object references
     */
    teardown(): void;
}
