let data: Record<string, { id: number; [key: string]: unknown }[]> = {};
let nextId = 1;

abstract class database {
    public static async query<T>(query: string): Promise<T> {
        console.log(query);
        return Promise.resolve({ result: query } as T);
    }
}

export class DbService {
    public async find<T>(table: string, id: number): Promise<T | null> {
        await database.query(`SELECT * FROM ${table} WHERE id = ${id}`);

        if (!data[table]) return null;

        for (const item of data[table]) {
            if (item.id === id) {
                return item as T;
            }
        }
        return null;
    }

    public async create<T>(table: string, item: Omit<T, 'id'>): Promise<T> {
        await database.query(`INSERT INTO ${table}`);

        if (!data[table]) {
            data[table] = [];
        }

        const newItem = { ...item, id: nextId };
        nextId++;
        data[table].push(newItem);
        return newItem as T;
    }

    public async update<T>(table: string, id: number, item: Partial<Omit<T, 'id'>>): Promise<T> {
        await database.query(`UPDATE ${table} SET data WHERE id = ${id}`);

        if (!data[table]) throw new Error('Not found');

        for (let i = 0; i < data[table].length; i++) {
            if (data[table][i].id === id) {
                data[table][i] = { ...data[table][i], ...item };
                return data[table][i] as T;
            }
        }
        throw new Error('Not found');
    }

    public async selectAll<T>(table: string): Promise<T[]> {
        await database.query(`SELECT * FROM ${table}`);

        if (!data[table]) return [];
        return data[table] as T[];
    }

    public async delete(table: string, id: number): Promise<boolean> {
        await database.query(`DELETE FROM ${table} WHERE id = ${id}`);

        if (!data[table]) return false;

        for (let i = 0; i < data[table].length; i++) {
            if (data[table][i].id === id) {
                data[table].splice(i, 1);
                return true;
            }
        }
        return false;
    }

    public clearAll(): void {
        data = {};
        nextId = 1;
    }
}
