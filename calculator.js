function calculateDiscount(price, discount) {
    if (typeof price !== 'number' || typeof discount !== 'number') return -1;
    if (price < 0 || discount < 0 || discount > 100) return -1;
    return Math.round((price - price * discount / 100) * 100) / 100;
}
module.exports = calculateDiscount;
