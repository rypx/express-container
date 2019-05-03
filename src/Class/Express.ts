
import * as Express from 'express'

export class Instance {
    
    private hostname: string
    private port: number
    constructor (hostname: string, port: number) {
        this.hostname = hostname
        if ( port === null ) {
            this.port = 80
        } else {
            this.port = port
        }
    }

    createServer = async () => {

        let Web = Express.default()
        Web.listen(this.port, () => { console.log(`[ # ] Express Instance listed on Port:`, this.port) })
        Web.get('*', async (req, res, next) => {
            if ( req.hostname !== this.hostname ) {
                res.writeHead(501)
            } else {
                next()
            }
        })

        return Web
    }

}