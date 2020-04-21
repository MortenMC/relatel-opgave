export type StatusData = {
    id: number;
    title: string;
    body: string;
    state: string;
    created_at: Date;
    updated_at: Date;
    priority: string;
    regions: string[];
    services: string[];
    updates: string[];
}