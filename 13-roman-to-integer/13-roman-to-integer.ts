function romanToInt(s: string): number {
    const preDefined = { 
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let numeral = 0;

    for (let i=0; i < s.length; i++){
        const current = preDefined[s[i]];
        const next = preDefined[s[i+1]];

        if (current < next){
            numeral += next - current
            i++
        } else {
            numeral += current
        }
    }

    return numeral; 
};