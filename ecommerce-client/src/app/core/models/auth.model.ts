// ==============================================
// auth.model.ts
// Authentication interfaces
// ==============================================

export interface LoginRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    expiresAt: Date;
    user: import('./user.model').User;
}
