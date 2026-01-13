// ==============================================
// user.model.ts
// User interface
// ==============================================

export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    roles: string[];
}
