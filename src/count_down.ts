const second: number = 1e3;
const minute: number = 6e4;
const hour: number = 3.6e6;

export default class CountDown {
    private distance: number = 0;

    constructor(private COUNT_DOWN_TO: number) {
        requestAnimationFrame(this.update.bind(this));
    }

    setText(selector: string, value: string | number) {
        const ele = document.querySelector<HTMLElement>(selector);
        if (!ele) {
            throw Error(`${selector} element does not exist`);
        }

        ele.innerText = this.padding(value);
    }
    
    update() {
        this.distance = this.COUNT_DOWN_TO - (new Date().getTime());
        this.render();
        requestAnimationFrame(this.update.bind(this));
    }

    render() {
        this.setText(
            '.js-hours',
            Math.floor(this.distance / (hour))
        );
        this.setText(
            '.js-minutes',
            Math.floor((this.distance % (hour)) / (minute))
        );
        this.setText(
            '.js-seconds',
            Math.floor((this.distance % (minute)) / second)
        );
    }

    padding(str: string | number) {
        str = str.toString();
        if (str.length === 1) {
            return `0${str}`;
        }

        return str;
    }
}