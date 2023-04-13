function solution(wallpaper) {
    let lux = wallpaper.length, luy = wallpaper[0].length;
    let rdx = 0, rdy = 0;
    
    for (let i = 0; i < wallpaper.length; i++){
        for (let j = 0; j < wallpaper[0].length; j++) {
            if (wallpaper[i][j] === "#") {
                lux = Math.min(i, lux);
                luy = Math.min(j, luy);
                rdx = Math.max(i, rdx);
                rdy = Math.max(j, rdy);
            }
        }
    }
    
    return [lux, luy, rdx + 1, rdy + 1];
}