import InputSignal from "./InputSignal";

export default class InputManager {
    private mapping: Map<string, InputSignal>;
    private states: Map<InputSignal, boolean>;

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

    public addMapping(inputSignal: InputSignal, key: string) {
        this.mapping.set(key, inputSignal);
    }

    public onKeyDown(event: KeyboardEvent) {
        this.changeKey(event, true);
    }

    public onKeyUp(event: KeyboardEvent) {
        this.changeKey(event, false);
    }

    private changeKey(event: KeyboardEvent, value: boolean) {
        const inputSignal = this.mapping.get(event.key);

        if(inputSignal !== undefined) {
            this.states.set(inputSignal, value);
        }

    }
}