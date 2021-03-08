const keys = require("./keys");
const redis = require("redis");

const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000
});
const sub = redisClient.duplicate();

let fibCache = [0];
const fib = (index) => {
    if (fibCache[index]) {
        return fibCache[index];
    };
    if (index > 0 && index < 3) { value = 1 };
    if (index >= 3) {
        value = fib(index - 1) + fib(index - 2);
    };
    fibCache[index] = value;
    return value;
}

sub.on("message", (channel, message) => {
    redisClient.hset("values", message, fib(parseInt(message)));
});
sub.subscribe("insert");
