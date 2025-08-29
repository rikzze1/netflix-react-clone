export const isSessionExpired = (expiresAt: string) => {
	if (!expiresAt) return true;
	return new Date().getTime() > new Date(expiresAt).getTime();
};
