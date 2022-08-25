function isPalindrome(x: number): boolean {
    const _x:number[] = Array.from(String(x), Number)
    const _y:number[] = [..._x].reverse()
    return JSON.stringify(_x) == JSON.stringify(_y) ? true : false
};