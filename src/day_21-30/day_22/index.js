function treatsDistribution(snacks) {
    let sisterShare = 0;
    const snacksMap = snacks.reduce((prev, curr) => {
            if (prev[curr]) {
                return {
                    ...prev,
                    [curr]: prev[curr] + 1
                };
            } else {
                return {
                    ...prev,
                    [curr]: 1
                };
            }
        }, {}
    );
    const sortedMap = Object.entries(snacksMap).sort((first, second) => second[1] - first[1]);
    sortedMap.every(snack => {
        if (sisterShare === snacks.length / 2) return false;
        if (snack[1] === 1) {
            sisterShare += 1;
        } else {
            sisterShare += snack[1] / 2;
        }
        return true;
    })
    return sisterShare;
}

module.exports = treatsDistribution
