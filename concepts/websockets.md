websockets use http also under the hood as the first request is actually a http request which then gets upgraded to a websocket connection

Websocket is faster than repeated polling as it doesn't need the 3way handshake every time

make sure to close websocket using websocket.close when user goes to some other page or the component unmounts from the widget tree etc.

Scaling websocket servers multiple ws servers

1. Put all users who need to talk to each other on same server - use this unless you are building something very very big
2. Use pub sub to communicate between ws servers - only if option 1 above does't work
