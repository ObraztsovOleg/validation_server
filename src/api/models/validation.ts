const config = require('config');
const { phone } = require('phone');
const card = require('card-validator');
var wallet = require('wallet-validator');

class Validation {
    constructor() {}

    async is_phone_valid(refer: string, symbol: string) {
        try {           
            const phone_info = phone(refer);
            
            symbol = symbol.toUpperCase();
            if (symbol != 'PHONE') {
                return { status: false, message: 'The symbol is not the PHONE' };
            }

            if (!phone_info?.isValid) {
                return { status: false, message: 'The phone is not valid' };
            }

            return { status: true, phone: phone_info.phoneNumber};
        } catch (e: any) {
            console.log(e);
        }
    }

    async is_card_valid(refer: string, symbol: string) {
        try {
            let data = card.number(refer);

            if (symbol.toUpperCase() !== data?.card?.type.toUpperCase()) {
                return { status: false, message: 'The card is not in any card\'s type' };
            }
            
            if (!data?.isValid) {
                return { status: false, message: 'The card is not valid' };
            }

            return { status: true, message: data };
        } catch (e: any) {
            console.log(e);
        }
    }

    async is_wallet_valid(refer: string, symbol: string) {
        try {
            let valid = null;

            try {
                valid = wallet.validate(refer, symbol);
            } catch (e) {
                return { status: false, message: 'The wallet is not valid' };
            }

            if(valid)
                return { status: true };
            else
                return { status: false, message: 'The wallet is not valid' };
                
        } catch (e: any) {
            console.log(e);
        }
    }
}

export default new Validation();