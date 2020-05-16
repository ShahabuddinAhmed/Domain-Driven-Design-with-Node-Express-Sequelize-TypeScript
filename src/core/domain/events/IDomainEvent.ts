import { UniqueEntityID } from "../../../core/domain/UniqueEntityID";

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IDomainEvent {
    dateTimeOccurred: Date;
    getAggregateId(): UniqueEntityID;
}