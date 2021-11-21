class Pomodoro {
    _id: string
    startTime: number;
    duration: number;

    constructor(_id: string, startTime: number, duration: number) {
        this._id = _id;
        this.startTime = startTime;
        this.duration = duration;
    }
}

export default Pomodoro;