const controller = require('../controller/validate').default;
const { is_valid } = require('../models/check');

export default (router: any) => {
    router
        .post('/validation', async (req: any, res: any) => {
            let { refer, symbol } = req.body;
            console.log(refer, symbol)

            if (!is_valid(refer) || !is_valid(symbol))
                return res.status(403).json({message: `Requested params are not valid: \
                                                        refer: ${refer}, symbol: ${symbol}`}); 

            refer = String(refer);
            symbol = String(symbol);

            const data = await controller.validate_data(refer, symbol);

            res.status(200).json(data);
        });

    return router;
}
