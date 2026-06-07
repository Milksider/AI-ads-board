export const formatDate = (isoString: string) => {
    const date = new Date(isoString);

    const formatter = new Intl.DateTimeFormat('ru-RU', {
        day: 'numeric',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit',
    });

    return formatter.format(date);
};
