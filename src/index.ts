
import { Instance } from './Class/Express'

let API = new Instance('local.ry', 80)
let StartServer = async () => {
    await API.createServer().then( async (Web) => {
        Web.get('/', async (req, res) => {
            res.end('Hello World!')
        })

        Web.get('/lol', async (req, res) => {
            res.end('Lmao.')
        })
    }) 
}

StartServer()