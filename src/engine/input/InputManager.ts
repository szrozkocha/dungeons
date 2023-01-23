import InputSignal from "./InputSignal";

export default class InputManager {
    private mapping: Map<string, InputSignal>;
    private states: Map<InputSignal, boolean>;
    private mousePosition: {x: number, y: number} = {x: 0, y: 0};

    public constructor() {
        this.states = new Map<InputSignal, boolean>();
        this.mapping = new Map<string, InputSignal>();

        for (let item in InputSignal) {
            if (isNaN(Number(item))) {
                this.states.set(item as unknown as InputSignal, false);
            }
        }
    }

    public getStatus(inputSignal: InputSignal): boolean {
        return this.states.get(inputSignal) as boolean;
    }

    public getMousePosition(): {x: number, y: number} {
        return this.mousePosition;
    }

    public addMapping(inputSignal: InputSignal, key: string) {
        this.mapping.set(key, inputSignal);
    }

    public onKeyDown(event: KeyboardEvent) {
        this.changeKey(event, true);
    }

    public onKeyUp(event: KeyboardEvent) {
        this.changeKey(event, false);
    }

    public onMouseMove(event: MouseEvent) {
        this.mousePosition = {x: event.clientX - window.innerWidth / 2, y: -(event.clientY - window.innerHeight / 2)};
    }

    private changeKey(event: KeyboardEvent, value: boolean) {
        const inputSignal = this.mapping.get(event.key);

        if(inputSignal !== undefined) {
            this.states.set(inputSignal, value);
        }

    }
}