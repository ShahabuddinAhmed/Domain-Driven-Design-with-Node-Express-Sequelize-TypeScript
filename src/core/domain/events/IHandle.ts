import { IDomainEvent } from "./IDomainEvent";

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IHandle<IDomainEvent> {
    setupSubscriptions(): void;
}