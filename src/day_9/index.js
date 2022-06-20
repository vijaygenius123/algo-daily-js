class Hashmap {
    constructor() {
        this.keys = []
        this.values = []
    }

    set(key, val) {
        const hashKey = this.hashStr(key)
            this.keys.push(hashKey)
            this.values.push(val)
        }

    get(key) {
        const hashKey = this.hashStr(key),
            index = this.keys.indexOf(hashKey)
        if (index >= 0) {
            return this.values[index]
        } else
            return undefined
    }

    hashStr(str) {
        let finalHash = 0;
        for (let i = 0; i < str.length; i++) {
            const charCode = str.charCodeAt(i);
            finalHash += charCode;
        }
        return finalHash;
    }
}

module.exports = Hashmap;
