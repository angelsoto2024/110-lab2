export function Animation(feature: string) {
    if (feature === 'music') {
        console.log(`\x1b[1mMusic is playing\x1b[0m`);
    } else if (feature === 'clothing') {
        console.log(`\x1b[3mI like your outfit!\x1b[0m`);
    } else if (feature === 'lunch') {
        console.log(`\x1b[1mLunch is served\x1b[0m`);
    } else if (feature === 'guests') {
        console.log(`\x1b[1mWelcome, guests!\x1b[0m`);
    }
}