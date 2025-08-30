interface YoutubeEmbed {
	key: string;
	mute: '1' | '0';
}

export const getYoutubeEmbedUrl = ({ key, mute }: YoutubeEmbed) => {
	return `https://www.youtube.com/embed/${key}?autoplay=1&mute=${mute}&controls=0&modestbranding=1&rel=0&showinfo=0`;
};
