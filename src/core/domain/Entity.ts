const isEntity = (v: any): v is Entity<any> => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return v instanceof Entity;
};

export abstract class Entity<T> {
    public readonly props: T;

    constructor(props: T) {
        this.props = props;
    }

    public equals(object?: Entity<T>): boolean {

        if (object == null || object == undefined) {
            return false;
        }

        if (this === object) {
            return true;
        }

        if (!isEntity(object)) {
            return false;
        }
    }
}


