Redis can be used for

1. Caching
2. queues
3. As a fast database let us say an order matching system for and exchange or you can build a orderbook in memory using rust

Don't manually update redis if used for caching clear its cache first and then update your postgres

when you start your backend first connect to redis then start litning on a port
