function lorojosé(n) {
    if (n==1) {
        return 1
    } else {
        return n * lorojosé(n-1)
    }
}
console.log(lorojosé(5))
