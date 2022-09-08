export default function handler(req, res){

    if(req.method === "GET"){
        handlerGet(req, res)
    } else {
        res.status(405).send()
    }

}

function handlerGet(req, res){
    res.status(200).json({
        id: 3,
        name: 'Felipe',
        email: 'ffsfsfant4719@sfsf.com',
        idade: 17
    })
}