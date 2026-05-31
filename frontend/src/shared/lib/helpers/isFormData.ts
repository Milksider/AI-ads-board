export const isFormData = (object: unknown): object is FormData => {
    return object instanceof FormData;
};
