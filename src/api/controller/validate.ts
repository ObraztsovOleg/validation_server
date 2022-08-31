const Validation = require('../models/validation').default

class Validation_controller {
    async validate_data(refer: string, symbol: string) {
        try {
            let result = {
                status: true,
                message: ''
            };

            const phone = await Validation.is_phone_valid(refer, symbol);
            if (phone.status) return result;

            const card = await Validation.is_card_valid(refer, symbol);
            if (card.status) return result;

            const wallet = await Validation.is_wallet_valid(refer, symbol);
            if (wallet.status) return result;

            result.status = false;
            result.message = "Is not valid card/phone/wallet info";
            
            return result;
        } catch (e: any) {
            return { error: e };
        }
    }
}

export default new Validation_controller();