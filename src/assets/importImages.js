const allImageContext = require.context('./imgs', false, /\.(jpg|jpeg|png|gif|svg)$/);
const thumbImageContext = require.context('./imgs/thumbs', false, /\.(jpg|jpeg|png|gif|svg)$/);

export const images = allImageContext.keys().map(allImageContext);
export const thumbnails = thumbImageContext.keys().map(thumbImageContext);

